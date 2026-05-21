import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'

export async function GET() {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: { order: 'asc' }
    })
    return NextResponse.json(certificates)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch certificates' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await request.json()
    
    if (!body.name || !body.issuer || !body.issue_date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const certificate = await prisma.certificate.create({
      data: {
        name: body.name,
        issuer: body.issuer,
        issue_date: new Date(body.issue_date),
        credential_id: body.credential_id || null,
        link: body.link || null,
        file_url: body.file_url || null,
        published: body.published !== undefined ? body.published : true,
        order: body.order ? parseInt(body.order) : 0
      }
    })
    return NextResponse.json(certificate)
  } catch (error) {
    console.error('Create certificate API error:', error)
    return NextResponse.json({ error: 'Failed to create certificate' }, { status: 500 })
  }
}
