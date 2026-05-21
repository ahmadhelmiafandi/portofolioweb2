import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/auth'

export async function GET() {
  try {
    const contact = await prisma.contact.findFirst()
    return NextResponse.json(contact || { email: '', phone: '', location: '' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}

import { translateIdToEn } from '@/lib/translate'

export async function PATCH(request: Request) {
  const user = await getAuthUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const body = await request.json()

    // Auto translate fields
    if (body.title_id) body.title_en = await translateIdToEn(body.title_id)
    if (body.desc_id) body.desc_en = await translateIdToEn(body.desc_id)
    if (body.portfolio_extra_id) body.portfolio_extra_en = await translateIdToEn(body.portfolio_extra_id)

    const contact = await prisma.contact.findFirst()

    if (!contact) {
      const newContact = await prisma.contact.create({ data: body })
      return NextResponse.json(newContact)
    }

    const updated = await prisma.contact.update({
      where: { id: contact.id },
      data: body
    })
    return NextResponse.json(updated)
  } catch (error) {
    console.error('Contact update error:', error)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
