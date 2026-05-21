import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'

export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: { start_date: 'desc' }
    }).catch(err => {
      console.error('Prisma Experience Query Error:', err)
      return []
    })
    
    return NextResponse.json(experiences || [])
  } catch (error: any) {
    console.error('Experience API GET Error:', error)
    return NextResponse.json([], { status: 200 }) // Return empty array instead of 500 for safety
  }
}

import { translateIdToEn } from '@/lib/translate'

export async function POST(request: Request) {
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await request.json()

    // Auto translate fields if English fields not manually filled
    if (body.title_id && !body.title_en) {
      body.title_en = await translateIdToEn(body.title_id)
    }
    if (body.description_id && !body.description_en) {
      body.description_en = await translateIdToEn(body.description_id)
    }

    const experience = await prisma.experience.create({ 
      data: {
        ...body,
        start_date: new Date(body.start_date),
        end_date: body.end_date ? new Date(body.end_date) : null
      }
    })
    return NextResponse.json(experience)
  } catch (error: any) {
    console.error('Create experience error:', error)
    return NextResponse.json({ error: 'Failed', message: error.message }, { status: 500 })
  }
}
