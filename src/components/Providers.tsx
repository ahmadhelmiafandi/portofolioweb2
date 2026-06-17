'use client'

import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/contexts/LangContext'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} storageKey="portfolio-theme">
      <LangProvider>
        {children}
      </LangProvider>
    </ThemeProvider>
  )
}
