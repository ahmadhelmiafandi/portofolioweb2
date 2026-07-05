import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { prisma } from "@/lib/prisma";
import dynamicImport from "next/dynamic";

function SectionPlaceholder() {
  return (
    <section className="section" aria-hidden="true">
      <div
        className="container"
        style={{
          minHeight: 280,
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            minHeight: 180,
            borderRadius: 28,
            background: "rgba(255,255,255,0.04)",
          }}
        />
      </div>
    </section>
  );
}

const ProjectsSection = dynamicImport(
  () =>
    import("@/components/sections/ProjectsSection").then((mod) => ({
      default: mod.ProjectsSection,
    })),
  { loading: SectionPlaceholder },
);
const CertificatesSection = dynamicImport(
  () =>
    import("@/components/sections/CertificatesSection").then((mod) => ({
      default: mod.CertificatesSection,
    })),
  { loading: SectionPlaceholder },
);
const ExperienceSection = dynamicImport(
  () =>
    import("@/components/sections/ExperienceSection").then((mod) => ({
      default: mod.ExperienceSection,
    })),
  { loading: SectionPlaceholder },
);
const ContactSection = dynamicImport(
  () =>
    import("@/components/sections/ContactSection").then((mod) => ({
      default: mod.ContactSection,
    })),
  { loading: SectionPlaceholder },
);

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getPortfolioData() {
  try {
    const [
      hero,
      about,
      skills,
      projects,
      experiences,
      contact,
      socials,
      certificates,
    ] = await Promise.all([
      prisma.hero.findFirst({ where: { published: true } }),
      prisma.about.findFirst({ where: { published: true } }),
      prisma.skill.findMany({
        where: { published: true },
        orderBy: { order: "asc" },
      }),
      prisma.project.findMany({
        where: { published: true },
        orderBy: [{ featured: "desc" }, { order: "asc" }],
      }),
      prisma.experience.findMany({
        where: { published: true },
        orderBy: { start_date: "desc" },
      }),
      prisma.contact.findFirst({ where: { published: true } }),
      prisma.social.findMany({
        where: { published: true },
        orderBy: { order: "asc" },
      }),
      prisma.certificate.findMany({
        where: { published: true },
        orderBy: { order: "asc" },
      }),
    ]);
    return {
      hero,
      about,
      skills,
      projects,
      experiences,
      contact,
      socials,
      certificates,
    };
  } catch {
    return {
      hero: null,
      about: null,
      skills: [],
      projects: [],
      experiences: [],
      contact: null,
      socials: [],
      certificates: [],
    };
  }
}

export default async function HomePage() {
  const {
    hero,
    about,
    skills,
    projects,
    experiences,
    contact,
    socials,
    certificates,
  } = await getPortfolioData();

  return (
    <>
      <ScrollProgress />
      <Navbar hero={hero} contact={contact} />
      <main>
        <HeroSection
          data={hero}
          socials={socials.length > 0 ? socials : null}
        />
        <AboutSection data={about} />
        <SkillsSection data={skills.length > 0 ? skills : null} />
        <ProjectsSection
          data={projects.length > 0 ? (projects as any) : null}
        />
        <CertificatesSection
          data={certificates.length > 0 ? certificates : null}
        />
        <ExperienceSection
          data={experiences.length > 0 ? (experiences as any) : null}
        />
        <ContactSection
          contact={contact}
          socials={socials.length > 0 ? socials : null}
        />
      </main>
      <Footer contact={contact} hero={hero} />
      <ScrollToTop />
    </>
  );
}
