import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'

export async function GET() {
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const [projectsCount, skillsCount, experiencesCount, certificatesCount, messagesCount, recentProjects] = await Promise.all([
      prisma.project.count(),
      prisma.skill.count(),
      prisma.experience.count(),
      prisma.certificate.count(),
      prisma.message.count(),
      prisma.project.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title_en: true,
          category: true,
          createdAt: true,
          published: true
        }
      })
    ])

    return NextResponse.json({
      stats: {
        projects: projectsCount,
        skills: skillsCount,
        experiences: experiencesCount,
        certificates: certificatesCount,
        messages: messagesCount
      },
      recentProjects
    })
  } catch (error) {
    console.error('Dashboard stats error:', error)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
