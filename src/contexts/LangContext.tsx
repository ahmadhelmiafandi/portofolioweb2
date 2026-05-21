'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language } from '@/lib/i18n'

interface LangContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof translations.en
}

const LangContext = createContext<LangContextType>({
  lang: 'id',
  setLang: () => {},
  t: translations.id,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Language
    if (saved === 'en' || saved === 'id') {
      setLangState(saved)
    } else {
      setLangState('id')
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('portfolio-lang', newLang)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
