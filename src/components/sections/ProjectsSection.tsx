'use client'

import { m } from 'framer-motion'
import { containerVariants, cardRevealUp } from '@/lib/motion'
import { useState, useMemo, memo, useEffect } from 'react'
import { useLang } from '@/contexts/LangContext'
import { translations } from '@/lib/i18n'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, GitBranch } from 'lucide-react'

interface Project {
  id: string; title_en: string; title_id: string
  description_en: string; description_id: string
  image?: string | null; tech_stack: string[]
  link?: string | null; github?: string | null
  category: string; featured: boolean
}

const DEFAULT_PROJECTS: Project[] = [
  { id: '1', title_en: 'E-Commerce Platform', title_id: 'Platform E-Commerce', description_en: 'A full-featured e-commerce platform built with Next.js, PostgreSQL, and Stripe integration.', description_id: 'Platform e-commerce lengkap yang dibangun dengan Next.js, PostgreSQL, dan integrasi Stripe.', image: 'https://images.unsplash.com/photo-1563062634-1ce34d6c76dc?w=800&q=80', tech_stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'], category: 'Web', featured: true },
  { id: '2', title_en: 'Interior Design CMS', title_id: 'CMS Desain Interior', description_en: 'A complete content management system for an interior design company with configurator.', description_id: 'Sistem manajemen konten lengkap untuk perusahaan desain interior dengan konfigurator.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', tech_stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'], category: 'Web', featured: true },
  { id: '3', title_en: 'Honda Self-Service App', title_id: 'Aplikasi Layanan Mandiri Honda', description_en: 'A self-service booking and management application for Honda dealerships.', description_id: 'Aplikasi pemesanan dan manajemen layanan mandiri untuk dealer Honda.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', tech_stack: ['React', 'Node.js', 'MySQL', 'REST API'], category: 'Web', featured: false },
]

const formatLink = (url: string | null | undefined) => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) return url
  return `https://${url}`
}

const ProjectCard = memo(function ProjectCard({ project, index, mounted }: { project: Project; index: number; mounted: boolean }) {
  const { lang: clientLang, t: clientT } = useLang()
  const lang = mounted ? clientLang : 'id'
  const t = mounted ? clientT : translations.id
  const title = lang === 'en' ? project.title_en : project.title_id
  const desc  = lang === 'en' ? project.description_en : project.description_id

  const shadowColors = [
    'var(--accent-2)', // Purple
    'var(--accent-3)', // Pink
    'var(--accent-4)', // Yellow
    'var(--accent)',   // Teal
  ]
  const shadowColor = shadowColors[index % shadowColors.length]
  const displayCategory = project.category === 'Web' ? 'Full Stack Developer' : project.category

  return (
    <m.article
      {...(mounted ? { variants: cardRevealUp } : {})}
      className="neubrutal-card"
    >
      <div style={{ padding: '18px 18px 0 18px' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
          borderRadius: '12px',
          border: '2px solid var(--text-primary)',
          background: 'var(--surface-2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {project.image ? (
            <>
              <div className="project-img-hover-wrap" style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image src={project.image} alt={title} fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  style={{ objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)', willChange: 'transform' }}
                />
              </div>
              
              {/* CSS gradient overlay on hover */}
              <div className="project-hover-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(139,92,246,0.15))',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
                zIndex: 2
              }} />
            </>
          ) : (
            <>
              <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${shadowColor}10, ${shadowColor}25)`,
                zIndex: 1
              }} />
              <span style={{
                fontFamily: 'var(--font-space)',
                fontSize: 36,
                fontWeight: 900,
                color: shadowColor,
                opacity: 0.85,
                textShadow: '1.5px 1.5px 0px var(--text-primary)',
                zIndex: 2
              }}>
                {project.title_en.substring(0, 2).toUpperCase()}
              </span>
            </>
          )}

          {project.featured && (
            <m.span 
              initial={{ scale: 0, y: -10 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              style={{ 
                position: 'absolute',
                top: 10,
                right: 10,
                fontSize: 10, 
                fontWeight: 800, 
                color: '#000',
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                padding: '4px 10px', 
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                border: '1.5px solid #000',
                boxShadow: '2px 2px 0px #000',
                zIndex: 10
              }}>
              ⭐ {t.projects.featured}
            </m.span>
          )}
        </div>
      </div>

      <div style={{ padding: '20px 20px 24px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-space)', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 6 }}>
            {title}
          </h3>
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-space)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {displayCategory}
            </span>
          </div>
          <p style={{
            color: 'var(--text-primary)', fontSize: 14, lineHeight: 1.6,
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', textOverflow: 'ellipsis',
            margin: 0
          }}>
            {desc}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginTop: 'auto' }}>
          {project.tech_stack.slice(0, 4).map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
          {project.tech_stack.length > 4 && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              fontSize: '11px',
              fontWeight: 800,
              background: 'var(--accent-4)',
              color: '#000',
              border: '1.5px solid var(--text-primary)',
              boxShadow: '1.5px 1.5px 0px var(--text-primary)',
            }}>
              +{project.tech_stack.length - 4}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 4, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
          {project.link && (
            <a 
              href={formatLink(project.link)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="neubrutal-btn-primary"
              style={{ flex: 1 }}
            >
              <ExternalLink size={14} />
              {t.projects.visit_project}
            </a>
          )}
          {project.github && (
            <a 
              href={formatLink(project.github)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="neubrutal-btn-secondary"
              aria-label="GitHub Repository"
            >
              <GitBranch size={15} />
            </a>
          )}
        </div>
      </div>

    </m.article>
  )
})

export function ProjectsSection({ data }: { data?: Project[] | null }) {
  const { lang: clientLang, t: clientT } = useLang()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const lang = mounted ? clientLang : 'id'
  const t = mounted ? clientT : translations.id

  const projects   = (data && data.length > 0) ? data : DEFAULT_PROJECTS
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], [projects])
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory), [projects, activeCategory])

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <m.div className="section-header"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">{t.projects.subtitle}</span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-desc">
            {lang === 'en' ? 'A curated selection of my favorite and most impactful work.' : 'Koleksi karya favorit dan paling berdampak dari saya.'}
          </p>
        </m.div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding: '7px 20px', borderRadius: '9999px', fontSize: 13, fontWeight: 500,
                fontFamily: 'Outfit, sans-serif', cursor: 'pointer', border: '1px solid',
                transition: 'var(--transition)',
                borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                background:  activeCategory === cat ? 'var(--accent-light)' : 'transparent',
                color:       activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >{cat}</button>
          ))}
        </div>

        <m.div
          {...(mounted ? {
            variants: containerVariants,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, margin: "-60px" }
          } : {})}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28, marginTop: 32 }}
        >
           {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} mounted={mounted} />)}
        </m.div>
      </div>
    </section>
  )
}
