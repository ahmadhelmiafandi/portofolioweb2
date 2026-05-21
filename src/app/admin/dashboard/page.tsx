'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Eye, 
  Briefcase, 
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
  ExternalLink,
  Clock,
  Award
} from 'lucide-react'

export default function DashboardPage() {
  const [data, setData] = useState<{ stats: { projects: number; skills: number; experiences: number; certificates: number; messages: number }; recentProjects: any[] }>({ stats: { projects: 0, skills: 0, experiences: 0, certificates: 0, messages: 0 }, recentProjects: [] });
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/stats')
        if (res.ok) {
          const json = await res.json()
          setData(json)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])
const statCards: { label: string; value: number; icon: any; color: string }[] = [
  { label: 'Total Projects', value: data?.stats?.projects || 0, icon: Briefcase, color: 'var(--accent)' },
  { label: 'Skills Added', value: data?.stats?.skills || 0, icon: TrendingUp, color: 'var(--accent-3)' },
  { label: 'Experiences', value: data?.stats?.experiences || 0, icon: Clock, color: 'var(--accent-4)' },
  { label: 'Certificates', value: data?.stats?.certificates || 0, icon: Award, color: 'var(--accent-2)' },
  { label: 'Messages', value: data?.stats?.messages || 0, icon: MessageSquare, color: '#ef4444' },
];


  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', fontFamily: 'Syne', marginBottom: '8px' }}>Dashboard Overview</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Welcome back to your portfolio management system.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        {statCards.map((stat: { label: string; value: number; icon: any; color: string }, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card"
            style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              background: 'var(--bg-secondary)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: stat.color
            }}>
              <stat.icon size={28} />
            </div>
            <div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>{stat.label}</div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)' }}>{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Recent Projects</h3>
            <a href="/admin/projects" style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none' }}>View All</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data?.recentProjects && data.recentProjects.length > 0 ? (
              data.recentProjects.map((project: any) => (
                <div key={project.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '12px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '12px'
                }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{project.title_en}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{project.category}</div>
                  </div>
                  <div style={{ fontSize: '12px', color: project.published ? '#10b981' : 'var(--text-secondary)' }}>
                    {project.published ? 'Published' : 'Draft'}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', textAlign: 'center', padding: '40px 0' }}>
                No recent projects recorded.
              </div>
            )}
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Quick Actions</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <a href="/" target="_blank" className="btn-secondary" style={{ fontSize: '13px', padding: '12px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <ExternalLink size={14} /> Visit Site
            </a>
            <a href="/admin/hero" className="btn-primary" style={{ fontSize: '13px', padding: '12px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Users size={14} /> Edit Hero
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
