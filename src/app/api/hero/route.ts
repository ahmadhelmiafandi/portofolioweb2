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

    // Auto translate fields
    if (body.title_id) body.title_en = await translateIdToEn(body.title_id)
    if (body.subtitle_id) body.subtitle_en = await translateIdToEn(body.subtitle_id)
    if (body.cta_id) body.cta_en = await translateIdToEn(body.cta_id)
    if (body.badge_id) body.badge_en = await translateIdToEn(body.badge_id)

    const hero = await prisma.hero.findFirst()
    if (!hero) {
      const newHero = await prisma.hero.create({ data: body })
      return NextResponse.json(newHero)
    }
    const updated = await prisma.hero.update({
      where: { id: hero.id },
      data: body
    })
    return NextResponse.json(updated)
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
