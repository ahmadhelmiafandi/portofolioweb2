'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  Code2, 
  Star, 
  Clock, 
  Globe, 
  LogOut,
  ChevronRight,
  Sun,
  Moon,
  MessageSquare,
  Settings,
  FileText,
  Award,
  Terminal
} from 'lucide-react'
import { useTheme } from 'next-themes'

const SIDEBAR_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
  { label: 'Hero Section', icon: Star, href: '/admin/hero' },
  { label: 'About Me', icon: User, href: '/admin/about' },
  { label: 'Skills', icon: Code2, href: '/admin/skills' },
  { label: 'Projects', icon: Briefcase, href: '/admin/projects' },
  { label: 'Certificates', icon: Award, href: '/admin/certificates' },
  { label: 'Experience', icon: Clock, href: '/admin/experience' },
  { label: 'SQL Editor', icon: Terminal, href: '/admin/sql' },
  { label: 'Socials', icon: Globe, href: '/admin/socials' },
  { label: 'Messages', icon: MessageSquare, href: '/admin/messages' },
  { label: 'Manage CV', icon: FileText, href: '/admin/cv' },
  { label: 'Contact & Settings', icon: Settings, href: '/admin/settings' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  if (pathname === '/admin/login') return <>{children}</>

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex' }}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ padding: '0 24px 32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '800'
          }}>H</div>
          <span style={{ fontWeight: '700', fontSize: '18px', color: 'var(--text-primary)', fontFamily: 'Syne' }}>PortoCMS</span>
        </div>

        <nav style={{ flex: 1 }}>
          {SIDEBAR_ITEMS.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-item ${active ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                <item.icon size={18} />
                {item.label}
                {active && <ChevronRight size={14} style={{ marginLeft: 'auto' }} />}
              </Link>
            )
          })}
        </nav>

        <div style={{ padding: '24px 12px', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="sidebar-item"
              style={{ width: '100%', marginBottom: '8px' }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          )}
          <button
            onClick={handleLogout}
            className="sidebar-item"
            style={{ width: '100%', color: '#ef4444' }}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, marginLeft: '260px', padding: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </div>
      </main>

      <style>{`
        @media (max-width: 1024px) {
          .sidebar { width: 80px; }
          .sidebar span, .sidebar .ChevronRight { display: none; }
          main { margin-left: 80px !important; }
        }
      `}</style>
    </div>
  )
}
