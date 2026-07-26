'use client'

import { m, useScroll, useTransform } from 'framer-motion'
import { containerVariants, cardRevealUp } from '@/lib/motion'
import { useState, useMemo, memo, useEffect, useRef } from 'react'
import { useLang } from '@/contexts/LangContext'
import { translations } from '@/lib/i18n'
import Image from 'next/image'
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
  const [imgError, setImgError] = useState(false)
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

  const cleanedTechStack = useMemo(() => {
    if (!project.tech_stack) return []
    const rawList = Array.isArray(project.tech_stack) ? project.tech_stack : [project.tech_stack]
    const items = rawList.flatMap(item => String(item).split(',')).map(s => s.trim()).filter(Boolean)
    return Array.from(new Set(items))
  }, [project.tech_stack])

  return (
    <m.article
      {...(mounted ? { variants: cardRevealUp } : {})}
      className="neubrutal-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '410px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '12px 12px 0 12px' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '145px',
          overflow: 'hidden',
          borderRadius: '10px',
          border: '2px solid var(--text-primary)',
          background: 'var(--surface-2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {project.image && !imgError ? (
            <>
              <div className="project-img-hover-wrap" style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image
                  src={project.image}
                  alt={title || 'Project preview'}
                  fill
                  unoptimized
                  onError={() => setImgError(true)}
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
                background: `linear-gradient(135deg, ${shadowColor}15, ${shadowColor}30)`,
                zIndex: 1
              }} />
              <span style={{
                fontFamily: 'var(--font-space)',
                fontSize: 32,
                fontWeight: 900,
                color: shadowColor,
                opacity: 0.9,
                textShadow: '1.5px 1.5px 0px var(--text-primary)',
                zIndex: 2
              }}>
                {(project.title_en || project.title_id || 'PR').substring(0, 2).toUpperCase()}
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
                top: 8,
                right: 8,
                fontSize: 10, 
                fontWeight: 800, 
                color: '#000',
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                padding: '3px 9px', 
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                border: '1.5px solid #000',
                boxShadow: '1.5px 1.5px 0px #000',
                zIndex: 10
              }}>
              ⭐ {t.projects.featured}
            </m.span>
          )}
        </div>
      </div>

      <div style={{ padding: '12px 14px 14px 14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{
            fontSize: 15,
            fontWeight: 800,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-space)',
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
            marginBottom: 4,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '38px',
          }}>
            {title}
          </h3>
          <div style={{ marginBottom: 6 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-space)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {displayCategory}
            </span>
          </div>
          <p style={{
            color: 'var(--text-primary)', fontSize: 12, lineHeight: 1.45,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', textOverflow: 'ellipsis',
            margin: 0,
            minHeight: '34px',
          }}>
            {desc}
          </p>
        </div>

        <div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 10, minHeight: '26px' }}>
            {cleanedTechStack.slice(0, 3).map(tech => <span key={tech} className="tech-tag" style={{ fontSize: 10, padding: '2px 7px' }}>{tech}</span>)}
            {cleanedTechStack.length > 3 && (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2px 6px',
                borderRadius: '9999px',
                fontSize: '10px',
                fontWeight: 800,
                background: 'var(--accent-4)',
                color: '#000',
                border: '1.5px solid var(--text-primary)',
              }}>
                +{cleanedTechStack.length - 3}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: 8, paddingTop: 8, borderTop: '1px solid var(--border)' }}>
            {project.link && (
              <a 
                href={formatLink(project.link)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="neubrutal-btn-primary"
                style={{ flex: 1, padding: '7px 10px', fontSize: 12 }}
              >
                <ExternalLink size={13} />
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
                style={{ padding: '7px 10px' }}
              >
                <GitBranch size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </m.article>
  )
})

export function ProjectsSection({ data }: { data?: Project[] | null }) {
  const { lang: clientLang, t: clientT } = useLang()
  const [mounted, setMounted] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)
  const trackRef  = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const lang = mounted ? clientLang : 'id'
  const t = mounted ? clientT : translations.id

  const projects   = (data && data.length > 0) ? data : DEFAULT_PROJECTS
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], [projects])
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory), [projects, activeCategory])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 64px", "end end"]
  })

  // Measure exact horizontal scroll range (trackWidth - viewportWidth)
  useEffect(() => {
    if (!mounted) return
    const updateRange = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth
        const viewportWidth = window.innerWidth
        const padding = 80
        setScrollRange(Math.max(0, totalWidth - viewportWidth + padding))
      }
    }

    updateRange()
    const timer = setTimeout(updateRange, 150)
    window.addEventListener('resize', updateRange)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateRange)
    }
  }, [filtered, mounted, activeCategory])

  // Exact pixel transform from start (0) to end (-scrollRange)
  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange]
  )

  const sectionHeight = useMemo(() => {
    if (scrollRange <= 0) return '100vh'
    const viewportH = typeof window !== 'undefined' ? window.innerHeight : 800
    const navH = 64
    return `${Math.round(scrollRange * 1.15 + (viewportH - navH))}px`
  }, [scrollRange])

  return (
    <section
      ref={targetRef}
      id="projects"
      style={{
        position: 'relative',
        height: sectionHeight,
        background: 'var(--bg-secondary)',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 'var(--navbar-height, 64px)',
          height: 'calc(100vh - var(--navbar-height, 64px))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          paddingTop: '16px',
          paddingBottom: '16px',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Header & Category Filters */}
        <div className="container" style={{ flexShrink: 0, zIndex: 10, marginBottom: 8 }}>
          <m.div
            className="section-header"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 8 }}
          >
            <span className="section-subtitle">{t.projects.subtitle}</span>
            <h2 className="section-title" style={{ marginBottom: 4 }}>{t.projects.title}</h2>
            <p className="section-desc" style={{ marginBottom: 0 }}>
              {lang === 'en' ? 'A curated selection of my favorite and most impactful work.' : 'Koleksi karya favorit dan paling berdampak dari saya.'}
            </p>
          </m.div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8, marginBottom: 12 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '6px 18px', borderRadius: '9999px', fontSize: 12, fontWeight: 500,
                  fontFamily: 'Outfit, sans-serif', cursor: 'pointer', border: '1px solid',
                  transition: 'var(--transition)',
                  borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--border)',
                  background:  activeCategory === cat ? 'var(--accent-light)' : 'transparent',
                  color:       activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                }}
              >{cat}</button>
            ))}
          </div>
        </div>

        {/* Horizontal Cards Track Container */}
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '16px 0', flex: 1, display: 'flex', alignItems: 'center' }}>
          <m.div
            key={activeCategory}
            ref={trackRef}
            style={{
              x: mounted ? xTransform : 0,
              display: 'flex',
              alignItems: 'stretch',
              gap: 28,
              paddingLeft: 'clamp(24px, 6vw, 90px)',
              paddingRight: 'clamp(24px, 6vw, 90px)',
              width: 'max-content',
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          >
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--text-secondary)', fontSize: 14, width: '100vw' }}>
                {lang === 'en' ? 'No projects found in this category.' : 'Tidak ada proyek dalam kategori ini.'}
              </div>
            ) : (
              filtered.map((p, i) => (
                <div key={p.id} style={{ width: 'clamp(300px, 32vw, 420px)', flexShrink: 0, height: '410px', display: 'flex' }}>
                  <ProjectCard project={p} index={i} mounted={mounted} />
                </div>
              ))
            )}
          </m.div>
        </div>

        {/* Bottom Horizontal Scroll Progress Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, flexShrink: 0, zIndex: 10, paddingBottom: '8px' }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {lang === 'en' ? 'Scroll to explore projects' : 'Gulir ke bawah untuk melihat proyek'}
          </span>
          <div style={{ width: 100, height: 4, borderRadius: 999, background: 'var(--surface-3)', overflow: 'hidden', position: 'relative' }}>
            <m.div style={{ scaleX: scrollYProgress, transformOrigin: 'left center', height: '100%', background: 'linear-gradient(to right, var(--accent), var(--accent-2))' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
