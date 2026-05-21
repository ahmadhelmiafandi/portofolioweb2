'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useLang } from '@/contexts/LangContext'

interface Skill {
  id: string
  name: string
  level: number
  category: string
  icon?: string | null
}

const DEFAULT_SKILLS: Skill[] = [
  { id: '1', name: 'React / Next.js', level: 92, category: 'Frontend' },
  { id: '2', name: 'TypeScript', level: 88, category: 'Frontend' },
  { id: '3', name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { id: '4', name: 'Framer Motion', level: 80, category: 'Frontend' },
  { id: '5', name: 'Node.js / Express', level: 85, category: 'Backend' },
  { id: '6', name: 'PostgreSQL', level: 82, category: 'Backend' },
  { id: '7', name: 'Prisma ORM', level: 84, category: 'Backend' },
  { id: '8', name: 'Git / DevOps', level: 78, category: 'Tools' },
  { id: '9', name: 'Figma', level: 72, category: 'Design' },
]

function SkillCard({ name, level, delay, index }: { name: string; level: number; delay: number; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const bgColors = ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent-4)', 'var(--accent-light)', 'var(--surface-2)']
  const bgColor = bgColors[index % bgColors.length]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
      style={{
        background: bgColor,
        border: '3px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        padding: '16px 20px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'var(--transition)',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', fontSize: 16, color: '#000000' }}>{name}</span>
        <span style={{ 
          fontSize: 12, 
          fontWeight: 800, 
          color: '#000000',
          background: 'var(--surface)',
          border: '2px solid var(--border)',
          padding: '2px 8px',
          borderRadius: 'var(--radius-sm)',
          boxShadow: '2px 2px 0px 0px var(--border)'
        }}>
          {level}%
        </span>
      </div>
      
      <div style={{ width: '100%', height: '12px', border: '2px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--surface)', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ height: '100%', background: '#000000' }}
        />
      </div>
    </motion.div>
  )
}

export function SkillsSection({ data }: { data?: Skill[] | null }) {
  const { lang, t } = useLang()
  const skills = (data && data.length > 0) ? data : DEFAULT_SKILLS
  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = (activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory))
    .sort((a, b) => b.level - a.level)

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">{t.skills.subtitle}</p>
          <h2 className="section-title">{t.skills.title}</h2>
        </motion.div>

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-sm)',
                fontSize: 13,
                fontWeight: 800,
                fontFamily: 'Space Grotesk, sans-serif',
                cursor: 'pointer',
                border: '2px solid var(--border)',
                boxShadow: '2px 2px 0px 0px var(--border)',
                transition: 'var(--transition)',
                background: activeCategory === cat ? 'var(--accent-4)' : 'var(--surface)',
                color: '#000000',
              }}
              onMouseEnter={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)'
                  e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--border)'
                  e.currentTarget.style.background = 'var(--surface-2)'
                }
              }}
              onMouseLeave={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = '2px 2px 0px 0px var(--border)'
                  e.currentTarget.style.background = 'var(--surface)'
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
        }}>
          {filtered.map((skill, i) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              level={skill.level}
              delay={i * 0.05}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
