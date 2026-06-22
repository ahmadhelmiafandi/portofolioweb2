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
  ChevronLeft,
  Sun,
  Moon,
  MessageSquare,
  Settings,
  Award,
  Terminal,
  Menu,
  X
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { ToastProvider } from '@/components/admin/Toast'

const SIDEBAR_ITEMS = [
  { label: 'Dashboard',          icon: LayoutDashboard, href: '/admin/dashboard' },
  { label: 'Hero Section',       icon: Star,            href: '/admin/hero' },
  { label: 'About Me',           icon: User,            href: '/admin/about' },
  { label: 'Skills',             icon: Code2,           href: '/admin/skills' },
  { label: 'Projects',           icon: Briefcase,       href: '/admin/projects' },
  { label: 'Certificates',       icon: Award,           href: '/admin/certificates' },
  { label: 'Experience',         icon: Clock,           href: '/admin/experience' },
  { label: 'Socials',            icon: Globe,           href: '/admin/socials' },
  { label: 'Messages',           icon: MessageSquare,   href: '/admin/messages' },
  { label: 'Settings',           icon: Settings,        href: '/admin/settings' },
  { label: 'SQL Editor',         icon: Terminal,        href: '/admin/sql' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null)

  useEffect(() => {
    setMounted(true)
    // Read sidebar state
    const saved = localStorage.getItem('admin_sidebar_collapsed')
    if (saved === 'true') setCollapsed(true)

    // Fetch user profile info
    fetch('/api/auth/me')
      .then(res => res.ok ? res.json() : null)
      .then(data => setUser(data))
      .catch(err => console.error('Failed to load user info', err))
  }, [])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const toggleCollapse = () => {
    setCollapsed(prev => {
      const next = !prev
      localStorage.setItem('admin_sidebar_collapsed', String(next))
      return next
    })
  }

  // Breadcrumbs generator
  const getBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean)
    return segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/')
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
      const isLast = index === segments.length - 1
      return { href, label, isLast }
    })
  }

  const breadcrumbs = getBreadcrumbs()

  if (pathname === '/admin/login') {
    return <ToastProvider>{children}</ToastProvider>
  }

  return (
    <ToastProvider>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex' }}>
        
        {/* Mobile Header */}
        <header className="mobile-header" style={{
          display: 'none',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          height: '60px',
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40
        }}>
          <button 
            onClick={() => setMobileOpen(true)} 
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            aria-label="Open sidebar"
          >
            <Menu size={24} />
          </button>
          <span style={{ fontFamily: 'Outfit', fontWeight: 800, color: 'var(--text-primary)', fontSize: '18px' }}>PortoCMS</span>
          <div style={{ width: 24 }} />
        </header>

        {/* Mobile Sidebar Overlay */}
        {mobileOpen && (
          <div 
            className="sidebar-overlay" 
            onClick={() => setMobileOpen(false)}
            style={{ zIndex: 45 }}
          />
        )}

        {/* Sidebar */}
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`} style={{ zIndex: 50 }}>
          {/* Sidebar Brand Header */}
          <div className="sidebar-logo-container">
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '800',
              flexShrink: 0
            }}>H</div>
            <span className="sidebar-logo-text">PortoCMS</span>
            
            {/* Collapse toggle (Desktop only) */}
            {!mobileOpen && (
              <button 
                onClick={toggleCollapse} 
                style={{
                  marginLeft: 'auto',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'var(--transition)'
                }}
                className="hidden-mobile"
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface-3)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface-2)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >
                {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
            )}

            {/* Mobile close button */}
            {mobileOpen && (
              <button 
                onClick={() => setMobileOpen(false)} 
                style={{
                  marginLeft: 'auto',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-label="Close sidebar"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Sidebar Nav Items */}
          <nav style={{ flex: 1 }}>
            {SIDEBAR_ITEMS.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`sidebar-item ${active ? 'active' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  <item.icon size={18} style={{ flexShrink: 0 }} />
                  <span>{item.label}</span>
                  {active && !collapsed && <ChevronRight size={14} style={{ marginLeft: 'auto', flexShrink: 0 }} />}
                  {collapsed && (
                    <span className="sidebar-tooltip">{item.label}</span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* User Profile & Theme Toggle */}
          <div style={{ padding: '16px 12px 0', borderTop: '1px solid var(--border)', marginTop: 'auto', flexShrink: 0 }}>
            
            {/* User Profile Badge (Premium design) */}
            {!collapsed && user && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                background: 'var(--surface-2)',
                borderRadius: '10px',
                marginBottom: '12px',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--accent-light)',
                  color: 'var(--accent)',
                  fontWeight: '700',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textTransform: 'uppercase'
                }}>
                  {user.name?.charAt(0) || user.email?.charAt(0) || 'A'}
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {user.name || 'Admin User'}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {user.email}
                  </div>
                </div>
              </div>
            )}

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="sidebar-item"
                style={{ width: 'calc(100% - 24px)', marginBottom: '8px' }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                {collapsed && (
                  <span className="sidebar-tooltip">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                )}
              </button>
            )}
            <button
              onClick={handleLogout}
              className="sidebar-item"
              style={{ width: 'calc(100% - 24px)', color: '#ef4444' }}
            >
              <LogOut size={18} />
              <span>Logout</span>
              {collapsed && (
                <span className="sidebar-tooltip" style={{ color: '#ef4444' }}>Logout</span>
              )}
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main 
          className="admin-main"
          style={{ 
            flex: 1, 
            marginLeft: collapsed ? '76px' : '260px', 
            padding: '40px',
            transition: 'var(--transition)',
            minWidth: 0
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Breadcrumbs Navigation */}
            <div className="breadcrumbs">
              <Link href="/admin/dashboard">Admin</Link>
              {breadcrumbs.map((bc, idx) => {
                // Skip the first 'admin' segment in display since we added static root 'Admin'
                if (bc.label.toLowerCase() === 'admin') return null
                return (
                  <React.Fragment key={bc.href}>
                    <span className="breadcrumbs-separator">/</span>
                    {bc.isLast ? (
                      <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{bc.label}</span>
                    ) : (
                      <Link href={bc.href}>{bc.label}</Link>
                    )}
                  </React.Fragment>
                )
              })}
            </div>

            {children}
          </div>
        </main>
      </div>
    </ToastProvider>
  )
}
