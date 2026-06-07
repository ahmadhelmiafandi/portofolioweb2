import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const hero = await prisma.hero.findFirst({ where: { published: true } })

    if (!hero?.cv_url) {
      return NextResponse.json({ error: 'CV not available' }, { status: 404 })
    }

    // Fetch the file from Supabase (or any URL)
    const fileRes = await fetch(hero.cv_url)
    if (!fileRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch CV file' }, { status: 502 })
    }

    const buffer = await fileRes.arrayBuffer()

    // Extract filename from URL, strip timestamp prefix
    const rawName = hero.cv_url.split('/').pop() || 'cv.pdf'
    const cleanName = decodeURIComponent(rawName).replace(/^\d+-/, '')

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${cleanName}"`,
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('CV download error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
