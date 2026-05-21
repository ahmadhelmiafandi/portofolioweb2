import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'

import { translateIdToEn } from '@/lib/translate'

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await request.json()

    // Auto translate fields if Indonesian text is modified
    if (body.title_id) {
      body.title_en = await translateIdToEn(body.title_id)
    }
    if (body.description_id) {
      body.description_en = await translateIdToEn(body.description_id)
    }

    const { id: _, ...updateData } = body // Remove ID from update data
    const experience = await prisma.experience.update({
      where: { id },
      data: {
        ...updateData,
        start_date: body.start_date ? new Date(body.start_date) : undefined,
        end_date: body.end_date === null ? null : (body.end_date ? new Date(body.end_date) : undefined)
      }
    })
    return NextResponse.json(experience)
  } catch (error: any) {
    console.error('Update experience error:', error)
    return NextResponse.json({ error: 'Failed', message: error.message }, { status: 500 })
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    await prisma.experience.delete({ where: { id } })
    return NextResponse.json({ message: 'Experience deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
