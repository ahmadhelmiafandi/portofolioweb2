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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
