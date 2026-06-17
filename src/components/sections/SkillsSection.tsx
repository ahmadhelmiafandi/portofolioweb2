'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useLang } from '@/contexts/LangContext'

interface Skill {
  id: string; name: string; level: number; category: string; icon?: string | null
}

const DEFAULT_SKILLS: Skill[] = [
  { id: '1', name: 'React / Next.js',    level: 92, category: 'Frontend' },
  { id: '2', name: 'TypeScript',          level: 88, category: 'Frontend' },
  { id: '3', name: 'Tailwind CSS',        level: 90, category: 'Frontend' },
  { id: '4', name: 'Framer Motion',       level: 80, category: 'Frontend' },
  { id: '5', name: 'Node.js / Express',   level: 85, category: 'Backend' },
  { id: '6', name: 'PostgreSQL',          level: 82, category: 'Backend' },
  { id: '7', name: 'Prisma ORM',          level: 84, category: 'Backend' },
  { id: '8', name: 'Git / DevOps',        level: 78, category: 'Tools' },
  { id: '9', name: 'Figma',              level: 72, category: 'Design' },
]

function SkillCard({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.45 }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '16px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        transition: 'var(--transition)',
      }}
      whileHover={{ borderColor: 'var(--accent)', y: -3, boxShadow: '0 8px 24px rgba(20,184,166,0.1)' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}>{name}</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', fontFamily: 'Outfit, sans-serif' }}>
          {level}%
        </span>
      </div>
      <div style={{ width: '100%', height: 6, background: 'var(--surface-3)', borderRadius: '9999px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: delay + 0.15, ease: [0.4, 0, 0.2, 1] }}
          style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--accent-hover))', borderRadius: '9999px' }}
        />
      </div>
    </motion.div>
  )
}

export function SkillsSection({ data }: { data?: Skill[] | null }) {
  const { t } = useLang()
  const skills = (data && data.length > 0) ? data : DEFAULT_SKILLS
  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))]
  const [activeCategory, setActiveCategory] = useState('All')
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const filtered = (activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory))
    .sort((a, b) => b.level - a.level)

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-subtitle">{t.skills.subtitle}</span>
          <h2 className="section-title">{t.skills.title}</h2>
        </motion.div>

        {/* Category pills */}
        {mounted && (
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 20px',
                  borderRadius: '9999px',
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: 'Outfit, sans-serif',
                  cursor: 'pointer',
                  border: '1px solid',
                  transition: 'var(--transition)',
                  borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                  background:  activeCategory === cat ? 'var(--accent-light)' : 'transparent',
                  color:       activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {filtered.map((skill, i) => (
            <SkillCard key={skill.id} name={skill.name} level={skill.level} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  )
}
