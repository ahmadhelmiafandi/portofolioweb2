import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'
import { translateIdToEn } from '@/lib/translate'

export async function GET() {
  try {
    const hero = await prisma.hero.findFirst({
      where: { published: true }
    })
    return NextResponse.json(hero)
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await request.json()

    // Only pick valid Hero fields to avoid Prisma errors from extra fields
    const updateData: Record<string, any> = {}
    const allowedFields = ['title_id', 'title_en', 'subtitle_id', 'subtitle_en', 'cta_id', 'cta_en', 'badge_id', 'badge_en', 'image', 'cv_url', 'published']
    for (const field of allowedFields) {
      if (field in body) updateData[field] = body[field]
    }

    // Auto translate fields (only if not already provided)
    if (updateData.title_id && !updateData.title_en)
      updateData.title_en = await translateIdToEn(updateData.title_id)
    if (updateData.subtitle_id && !updateData.subtitle_en)
      updateData.subtitle_en = await translateIdToEn(updateData.subtitle_id)
    if (updateData.cta_id && !updateData.cta_en)
      updateData.cta_en = await translateIdToEn(updateData.cta_id)
    if (updateData.badge_id && !updateData.badge_en)
      updateData.badge_en = await translateIdToEn(updateData.badge_id)

    const hero = await prisma.hero.findFirst()
    if (!hero) {
      const newHero = await prisma.hero.create({ data: updateData })
      return NextResponse.json(newHero)
    }
    const updated = await prisma.hero.update({
      where: { id: hero.id },
      data: updateData,
    })
    return NextResponse.json(updated)
  } catch (error) {
    console.error('Hero PATCH error:', error)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
