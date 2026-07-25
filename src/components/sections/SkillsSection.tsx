'use client'

import { m } from 'framer-motion'
import { containerVariants, cardRevealUp } from '@/lib/motion'
import { useState, useEffect, useMemo, memo } from 'react'
import { useLang } from '@/contexts/LangContext'

interface Skill {
  id: string; name: string; level: number; category: string; icon?: string | null
}

const DEFAULT_SKILLS: Skill[] = [
  { id: '1', name: 'React / Next.js',  level: 92, category: 'Frontend', icon: 'react' },
  { id: '2', name: 'TypeScript',        level: 88, category: 'Frontend', icon: 'typescript' },
  { id: '3', name: 'Tailwind CSS',      level: 90, category: 'Frontend', icon: 'tailwindcss' },
  { id: '4', name: 'Framer Motion',     level: 80, category: 'Frontend', icon: 'framermotion' },
  { id: '5', name: 'Node.js / Express', level: 85, category: 'Backend',  icon: 'nodejs' },
  { id: '6', name: 'PostgreSQL',        level: 82, category: 'Backend',  icon: 'postgresql' },
  { id: '7', name: 'Prisma ORM',        level: 84, category: 'Backend',  icon: 'prisma' },
  { id: '8', name: 'Git / DevOps',      level: 78, category: 'Tools',    icon: 'git' },
  { id: '9', name: 'Figma',            level: 72, category: 'Design',   icon: 'figma' },
]

const SkillCard = memo(function SkillCard({ skill, index, mounted }: { skill: Skill; index: number; mounted: boolean }) {
  const iconName = skill.icon?.toLowerCase().replace(/[\s/.]/g, '') || ''

  const darkModeIcons = ['github', 'nextjs', 'express', 'prisma', 'vercel', 'figma', 'flask', 'dbeaver', 'java', 'postgresql']
  const needsFilter = darkModeIcons.includes(iconName)

  const iconUrl = iconName
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`
    : null

  return (
    <m.div
      {...(mounted ? { variants: cardRevealUp } : {})}
      className="skill-card-perf"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        cursor: 'default',
        textAlign: 'center',
        boxShadow: 'var(--shadow-sm)',
      }}
      suppressHydrationWarning
    >
      {/* Icon container */}
      <div style={{
        width: 64, height: 64,
        borderRadius: '14px',
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', flexShrink: 0,
        transition: 'var(--transition)'
      }}>
        {iconUrl ? (
           <img
             src={iconUrl}
             alt={skill.name}
             width={36} height={36}
             loading="lazy"
             style={{
               objectFit: 'contain',
               filter: needsFilter ? 'var(--skill-icon-filter)' : 'none',
             }}
             onError={(e) => {
              const target = e.currentTarget
              if (!target.src.includes('-plain')) {
                target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-plain.svg`
              } else if (!target.src.includes('-colored')) {
                target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-plain-wordmark.svg`
              } else {
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = `<span style="font-size:24px;font-weight:800;color:var(--accent);font-family:Outfit,sans-serif;">${skill.name.charAt(0)}</span>`
                }
              }
            }}
           />
        ) : (
          <span style={{ fontSize: 24, fontWeight: 800, color: 'var(--accent)', fontFamily: 'Outfit, sans-serif' }}>
            {skill.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Name */}
      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'Outfit, sans-serif', lineHeight: 1.3 }}>
        {skill.name}
      </span>

    </m.div>
  )
})

export function SkillsSection({ data }: { data?: Skill[] | null }) {
  const { t } = useLang()
  const skills     = (data && data.length > 0) ? data : DEFAULT_SKILLS
  const categories = useMemo(() => ['All', ...Array.from(new Set(skills.map(s => s.category)))], [skills])
  const [activeCategory, setActiveCategory] = useState('All')
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const filtered = useMemo(() => activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory), [skills, activeCategory])

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <m.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">{t.skills.subtitle}</span>
          <h2 className="section-title">{t.skills.title}</h2>
        </m.div>

        {/* Category pills */}
        {mounted && (
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 20px', borderRadius: '9999px',
                  fontSize: 13, fontWeight: 500,
                  fontFamily: 'Outfit, sans-serif',
                  cursor: 'pointer', border: '1px solid',
                  transition: 'var(--transition)',
                  borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                  background:  activeCategory === cat ? 'var(--accent-light)' : 'transparent',
                  color:       activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                }}
              >{cat}</button>
            ))}
          </div>
        )}

        {/* Icon grid */}
        <m.div
          key={activeCategory}
          {...(mounted ? {
            variants: containerVariants,
            initial: "hidden",
            animate: "show",
          } : {})}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: 16,
          }}
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} mounted={mounted} />
          ))}
        </m.div>
      </div>


    </section>
  )
}
