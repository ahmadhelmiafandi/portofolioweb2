import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const certificate = await prisma.certificate.findUnique({
      where: { id }
    })
    if (!certificate) return NextResponse.json({ error: 'Certificate not found' }, { status: 404 })
    return NextResponse.json(certificate)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch certificate' }, { status: 500 })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await request.json()
    
    // Parse issue_date if provided
    const updateData: any = { ...body }
    if (body.issue_date) {
      updateData.issue_date = new Date(body.issue_date)
    }
    if (body.order !== undefined) {
      updateData.order = parseInt(body.order)
    }

    const certificate = await prisma.certificate.update({
      where: { id },
      data: updateData
    })
    return NextResponse.json(certificate)
  } catch (error) {
    console.error('Update certificate API error:', error)
    return NextResponse.json({ error: 'Failed to update certificate' }, { status: 500 })
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
    await prisma.certificate.delete({
      where: { id }
    })
    return NextResponse.json({ message: 'Certificate deleted successfully' })
  } catch (error) {
    console.error('Delete certificate API error:', error)
    return NextResponse.json({ error: 'Failed to delete certificate' }, { status: 500 })
  }
}
