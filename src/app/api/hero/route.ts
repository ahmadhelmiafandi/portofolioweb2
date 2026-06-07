import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'
import { translateIdToEn } from '@/lib/translate'
import type { Prisma } from '@/generated/client'

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

    // Build a typed update payload — only pick valid Hero fields
    const updateData: Prisma.HeroUpdateInput = {}
    const stringFields = ['title_id', 'title_en', 'subtitle_id', 'subtitle_en', 'cta_id', 'cta_en', 'badge_id', 'badge_en', 'image', 'cv_url'] as const
    for (const field of stringFields) {
      if (field in body && body[field] !== undefined) {
        (updateData as Record<string, unknown>)[field] = body[field]
      }
    }
    if ('published' in body) updateData.published = body.published

    // Auto translate fields (only if EN not already provided)
    if (body.title_id && !body.title_en)
      updateData.title_en = await translateIdToEn(body.title_id)
    if (body.subtitle_id && !body.subtitle_en)
      updateData.subtitle_en = await translateIdToEn(body.subtitle_id)
    if (body.cta_id && !body.cta_en)
      updateData.cta_en = await translateIdToEn(body.cta_id)
    if (body.badge_id && !body.badge_en)
      updateData.badge_en = await translateIdToEn(body.badge_id)

    const hero = await prisma.hero.findFirst()
    if (!hero) {
      // Create requires all mandatory fields
      const newHero = await prisma.hero.create({
        data: {
          title_en:    (updateData.title_en    as string) ?? '',
          title_id:    (updateData.title_id    as string) ?? '',
          subtitle_en: (updateData.subtitle_en as string) ?? '',
          subtitle_id: (updateData.subtitle_id as string) ?? '',
          cta_en:      (updateData.cta_en      as string) ?? 'View My Work',
          cta_id:      (updateData.cta_id      as string) ?? 'Lihat Karya Saya',
          badge_en:    (updateData.badge_en    as string) ?? 'Available for Freelance',
          badge_id:    (updateData.badge_id    as string) ?? 'Tersedia untuk Freelance',
          image:       (updateData.image       as string) ?? null,
          cv_url:      (updateData.cv_url      as string) ?? null,
          published:   (updateData.published   as boolean) ?? true,
        }
      })
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
