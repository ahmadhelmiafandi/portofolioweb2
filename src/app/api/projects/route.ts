import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'

import { translateIdToEn } from '@/lib/translate'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [
        { featured: 'desc' },
        { order: 'asc' },
        { createdAt: 'desc' }
      ]
    })
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await request.json()
    
    // Auto translate fields if English fields not manually filled
    const title_en = body.title_en || (body.title_id ? await translateIdToEn(body.title_id) : '')
    const description_en = body.description_en || (body.description_id ? await translateIdToEn(body.description_id) : '')

    const project = await prisma.project.create({
      data: {
        title_en,
        title_id: body.title_id,
        description_en,
        description_id: body.description_id,
        image: body.image,
        tech_stack: body.tech_stack || [],
        link: body.link,
        github: body.github,
        category: body.category || 'Web',
        featured: body.featured || false,
        published: body.published !== undefined ? body.published : true,
        order: body.order || 0
      }
    })
    return NextResponse.json(project)
  } catch (error) {
    console.error('Create project error:', error)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
