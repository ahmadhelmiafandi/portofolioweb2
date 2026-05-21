import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { CertificatesSection } from '@/components/sections/CertificatesSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/Footer'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getPortfolioData() {
  try {
    const [hero, about, skills, projects, experiences, contact, socials, certificates] = await Promise.all([
      prisma.hero.findFirst({ where: { published: true } }),
      prisma.about.findFirst({ where: { published: true } }),
      prisma.skill.findMany({ where: { published: true }, orderBy: { order: 'asc' } }),
      prisma.project.findMany({ where: { published: true }, orderBy: [{ featured: 'desc' }, { order: 'asc' }] }),
      prisma.experience.findMany({ where: { published: true }, orderBy: { start_date: 'desc' } }),
      prisma.contact.findFirst({ where: { published: true } }),
      prisma.social.findMany({ where: { published: true }, orderBy: { order: 'asc' } }),
      prisma.certificate.findMany({ where: { published: true }, orderBy: { order: 'asc' } }),
    ])
    return { hero, about, skills, projects, experiences, contact, socials, certificates }
  } catch {
    return { hero: null, about: null, skills: [], projects: [], experiences: [], contact: null, socials: [], certificates: [] }
  }
}

export default async function HomePage() {
  const { hero, about, skills, projects, experiences, contact, socials, certificates } = await getPortfolioData()

  return (
    <>
      <Navbar />
      <main>
        <HeroSection data={hero} />
        <AboutSection data={about} />
        <SkillsSection data={skills.length > 0 ? skills : null} />
        <ProjectsSection data={projects.length > 0 ? projects as any : null} />
        <CertificatesSection data={certificates.length > 0 ? certificates : null} />
        <ExperienceSection data={experiences.length > 0 ? experiences as any : null} />
        <ContactSection contact={contact} socials={socials.length > 0 ? socials : null} />
      </main>
      <Footer contact={contact} />
    </>
  )
}
