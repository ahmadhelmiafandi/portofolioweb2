import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const OWNER_EMAIL = 'helmiafandi25@gmail.com'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, subject } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Simpan ke database
    const newMessage = await prisma.message.create({
      data: { name, email, message, subject }
    })

    // Kirim email notifikasi ke pemilik portfolio
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: OWNER_EMAIL,
        replyTo: email,
        subject: `📬 Pesan Baru dari ${name}${subject ? ` — ${subject}` : ''}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
            <div style="background: #000; padding: 20px; border-radius: 6px 6px 0 0;">
              <h1 style="color: #FFFF00; margin: 0; font-size: 22px;">📬 Pesan Baru dari Portofolio</h1>
            </div>
            <div style="background: #fff; padding: 28px; border: 3px solid #000; border-top: none; border-radius: 0 0 6px 6px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 2px solid #eee; font-weight: bold; color: #555; width: 100px;">Nama</td>
                  <td style="padding: 10px 0; border-bottom: 2px solid #eee; color: #000; font-weight: 700;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 2px solid #eee; font-weight: bold; color: #555;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 2px solid #eee;">
                    <a href="mailto:${email}" style="color: #00AA44; font-weight: 700;">${email}</a>
                  </td>
                </tr>
                ${subject ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 2px solid #eee; font-weight: bold; color: #555;">Subjek</td>
                  <td style="padding: 10px 0; border-bottom: 2px solid #eee; color: #000;">${subject}</td>
                </tr>` : ''}
              </table>
              <div>
                <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Pesan:</p>
                <div style="background: #f5f5f5; border-left: 4px solid #FFFF00; padding: 16px; border-radius: 4px; color: #000; line-height: 1.6; white-space: pre-wrap;">${message}</div>
              </div>
              <div style="margin-top: 28px; padding-top: 20px; border-top: 2px solid #eee;">
                <a href="mailto:${email}?subject=Re: ${subject || 'Pesan dari Portofolio'}" 
                   style="display: inline-block; background: #00FF66; color: #000; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 800; border: 2px solid #000;">
                  ↩ Balas Pesan
                </a>
              </div>
            </div>
            <p style="text-align: center; color: #aaa; font-size: 12px; margin-top: 16px;">
              Dikirim dari porto-helmiafandi.vercel.app
            </p>
          </div>
        `,
      })
    }

    return NextResponse.json(newMessage)
  } catch (error) {
    console.error('Message error:', error)
    return NextResponse.json({ error: 'Error sending message' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(messages)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching messages' }, { status: 500 })
  }
}
