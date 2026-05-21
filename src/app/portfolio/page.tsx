import { prisma } from '@/lib/prisma'
import { Globe, Mail, Phone, MapPin, ExternalLink, GitBranch } from 'lucide-react'
import { PrintButton } from '@/components/PrintButton'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getData() {
  try {
    const [hero, about, skills, projects, experiences, contact, socials] = await Promise.all([
      prisma.hero.findFirst({ where: { published: true } }),
      prisma.about.findFirst({ where: { published: true } }),
      prisma.skill.findMany({ where: { published: true }, orderBy: { level: 'desc' } }),
      prisma.project.findMany({ where: { published: true }, orderBy: [{ featured: 'desc' }, { order: 'asc' }] }),
      prisma.experience.findMany({ where: { published: true }, orderBy: { start_date: 'desc' } }),
      prisma.contact.findFirst({ where: { published: true } }),
      prisma.social.findMany({ where: { published: true }, orderBy: { order: 'asc' } }),
    ])
    return { hero, about, skills, projects, experiences, contact, socials }
  } catch {
    return { hero: null, about: null, skills: [], projects: [], experiences: [], contact: null, socials: [] }
  }
}

function formatDate(date: Date | null | undefined) {
  if (!date) return 'Present'
  return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default async function PortfolioPage() {
  const { hero, about, skills, projects, experiences, contact, socials } = await getData()

  const name = hero?.title_en?.split('\n')[0]?.replace('.', '') ?? 'Ahmad Helmi Afandi'
  const subtitle = hero?.subtitle_en ?? 'Full-Stack Developer'

  const techSkills = skills.filter(s => s.category === 'Technical' || s.category === 'Frontend' || s.category === 'Backend')
  const otherSkills = skills.filter(s => s.category !== 'Technical' && s.category !== 'Frontend' && s.category !== 'Backend')
  
  // Ambil data bahasa untuk informasi tambahan jika ada (gunakan ID untuk bahasa yang konsisten, atau EN)
  const extraInfoList = (contact?.portfolio_extra_en || 'Languages: Indonesian (Native), English (Professional)').split('\n').filter(Boolean)

  return (
    <>
      <style>{`
        /* CV Professional Print Styles */
        :root {
          --cv-text: #000000;
          --cv-light: #000000;
          --cv-lighter: #222222;
          --cv-accent: #000000;
          --cv-border: #000000;
        }

        body { 
          background: #f3f4f6; 
          margin: 0;
          -webkit-print-color-adjust: exact;
        }

        .cv-container {
          background: white;
          max-width: 210mm;
          min-height: 297mm;
          margin: 40px auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          padding: 15mm 20mm;
          font-family: 'Inter', -apple-system, sans-serif;
          color: var(--cv-text);
          line-height: 1.4;
        }

        .cv-header {
          border-bottom: 2px solid #000;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }

        .cv-name {
          font-size: 32px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 4px 0;
          color: #000;
        }

        .cv-title {
          font-size: 16px;
          font-weight: 700;
          color: #222;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 15px 0;
        }

        .cv-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          font-size: 11px;
          font-weight: 500;
          color: #000;
        }

        .cv-contact-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .cv-contact-item a {
          color: #000;
          text-decoration: none;
        }

        .cv-section {
          margin-bottom: 25px;
        }

        .cv-section-title {
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          color: #000;
          border-bottom: 1.5px solid #000;
          padding-bottom: 3px;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .cv-about {
          font-size: 11.5px;
          color: #000;
          text-align: justify;
        }

        .cv-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        .cv-exp-item, .cv-proj-item {
          margin-bottom: 18px;
        }

        .cv-exp-header, .cv-proj-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2px;
        }

        .cv-item-title {
          font-weight: 700;
          font-size: 13px;
          color: #000;
        }

        .cv-item-date {
          font-size: 11px;
          font-weight: 700;
          color: #000;
        }

        .cv-item-subtitle {
          font-size: 12px;
          font-weight: 600;
          color: #000;
          margin-bottom: 5px;
        }

        .cv-item-desc {
          font-size: 11.5px;
          color: #000;
          margin: 0;
          padding-left: 15px;
        }

        .cv-item-desc li {
          margin-bottom: 3px;
        }

        .cv-skills-group {
          margin-bottom: 15px;
        }

        .cv-skills-title {
          font-size: 11px;
          font-weight: 800;
          color: #000;
          margin-bottom: 5px;
          text-transform: uppercase;
        }

        .cv-skills-list {
          font-size: 11.5px;
          color: #000;
          line-height: 1.6;
        }

        .cv-tech-stack {
          font-size: 10px;
          color: #333;
          margin-top: 5px;
          font-style: italic;
        }

        @media print {
          .no-print { display: none !important; opacity: 0 !important; visibility: hidden !important; }
          body { background: white !important; margin: 0; color: black !important; }
          .cv-container { 
            box-shadow: none !important; 
            margin: 0 !important; 
            padding: 0 !important; 
            width: 100% !important;
            max-width: none !important;
            color: black !important;
          }
          /* Hide all links (Lihat Proyek, etc) explicitly */
          a { text-decoration: none !important; color: black !important; }
          .btn-primary, .btn-secondary, button, [role="button"] { display: none !important; }
          @page { margin: 15mm 20mm; size: A4; }
          
          /* Force black text for all elements */
          * { color: black !important; border-color: black !important; }
        }
      `}</style>

      {/* Print/Download button */}
      <div className="no-print" style={{ position: 'fixed', top: 20, right: 20, display: 'flex', gap: 10, zIndex: 999 }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: '#374151', padding: '10px 20px', borderRadius: 100, fontWeight: 600, fontSize: 14, textDecoration: 'none', boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
          <Globe size={16} /> Website
        </a>
        <PrintButton />
      </div>

      <div className="cv-container">
        
        {/* Header */}
        <div className="cv-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="cv-name">{name}</h1>
            <h2 className="cv-title">{subtitle}</h2>
            
            <div className="cv-contact">
              {contact?.email && (
                <span className="cv-contact-item">
                  <Mail size={12} /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </span>
              )}
              {contact?.phone && (
                <span className="cv-contact-item">
                  <Phone size={12} /> {contact.phone}
                </span>
              )}
              {contact?.location && (
                <span className="cv-contact-item">
                  <MapPin size={12} /> {contact.location}
                </span>
              )}
              {socials.filter(s => s.name.toLowerCase() === 'linkedin').map(s => (
                <span key={s.id} className="cv-contact-item">
                  <strong>in</strong> <a href={s.link} target="_blank" rel="noreferrer">{s.link.replace(/^https?:\/\/(www\.)?/, '')}</a>
                </span>
              ))}
              {socials.filter(s => s.name.toLowerCase() === 'github').map(s => (
                <span key={s.id} className="cv-contact-item">
                  <GitBranch size={12} /> <a href={s.link} target="_blank" rel="noreferrer">{s.link.replace(/^https?:\/\/(www\.)?/, '')}</a>
                </span>
              ))}
              <span className="cv-contact-item">
                <Globe size={12} /> <a href="https://porto-helmiafandi.vercel.app">porto-helmiafandi.vercel.app</a>
              </span>
            </div>
          </div>
          
          {/* Photo */}
          {(about?.image || hero?.image) && (
            <img 
              src={about?.image || hero?.image || ''} 
              alt={name} 
              style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--cv-border)' }} 
            />
          )}
        </div>

        {/* Profile / Summary */}
        {about && (
          <div className="cv-section">
            <h3 className="cv-section-title">Professional Summary</h3>
            <p className="cv-about">
              {about.description_en || about.description_id}
            </p>
          </div>
        )}

        <div className="cv-grid">
          {/* Main Column (Left) */}
          <div>
            
            {/* Experience */}
            {experiences.length > 0 && (
              <div className="cv-section">
                <h3 className="cv-section-title">Experience</h3>
                {experiences.map(exp => (
                  <div key={exp.id} className="cv-exp-item">
                    <div className="cv-exp-header">
                      <span className="cv-item-title">{exp.title_en || exp.title_id}</span>
                      <span className="cv-item-date">{formatDate(exp.start_date)} – {formatDate(exp.end_date)}</span>
                    </div>
                    <div className="cv-item-subtitle">{exp.company}{exp.location ? `, ${exp.location}` : ''}</div>
                    
                    {/* Render description line by line as bullet points if it contains line breaks, else just a paragraph */}
                    {(exp.description_en || exp.description_id).includes('\n') ? (
                      <ul className="cv-item-desc">
                        {(exp.description_en || exp.description_id).split('\n').filter(Boolean).map((line, i) => (
                          <li key={i}>{line.replace(/^- /, '')}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="cv-item-desc" style={{ paddingLeft: 0 }}>
                        {exp.description_en || exp.description_id}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
              <div className="cv-section">
                <h3 className="cv-section-title">Selected Projects</h3>
                {projects.slice(0, 4).map(proj => (
                  <div key={proj.id} className="cv-proj-item">
                    <div className="cv-proj-header">
                      <span className="cv-item-title">{proj.title_en || proj.title_id}</span>
                    </div>
                    
                    <p className="cv-item-desc" style={{ paddingLeft: 0, marginTop: '4px' }}>
                      {proj.description_en || proj.description_id}
                    </p>
                    {proj.tech_stack.length > 0 && (
                      <div className="cv-tech-stack">Technologies: {proj.tech_stack.join(', ')}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Sidebar Column (Right) */}
          <div>
            
            {/* Technical Skills */}
            <div className="cv-section">
              <h3 className="cv-section-title">Skills</h3>
              
              <div className="cv-skills-group">
                <div className="cv-skills-title">Technical Expertise</div>
                <div className="cv-skills-list">
                  {techSkills.map(s => s.name).join(', ')}
                </div>
              </div>

              {otherSkills.length > 0 && (
                <div className="cv-skills-group">
                  <div className="cv-skills-title">Other Skills</div>
                  <div className="cv-skills-list">
                    {otherSkills.map(s => s.name).join(', ')}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="cv-section">
              <h3 className="cv-section-title">Additional Info</h3>
              <div className="cv-skills-list" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div><strong>Status:</strong> {hero?.badge_en || hero?.badge_id || 'Available for Freelance'}</div>
                {extraInfoList.map((info, i) => {
                  const parts = info.split(':');
                  if (parts.length > 1) {
                    return <div key={i}><strong>{parts[0].trim()}:</strong> {parts.slice(1).join(':').trim()}</div>
                  }
                  return <div key={i}>{info}</div>
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
