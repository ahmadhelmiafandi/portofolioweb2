import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Helmi | Full-Stack Developer',
  description: 'Creative full-stack developer crafting modern, elegant digital experiences. Specialized in React, Next.js, and scalable web solutions.',
  keywords: ['developer', 'portfolio', 'web development', 'full-stack', 'react', 'next.js'],
  authors: [{ name: 'Helmi' }],
  openGraph: {
    title: 'Helmi | Full-Stack Developer',
    description: 'Creative full-stack developer crafting modern, elegant digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
