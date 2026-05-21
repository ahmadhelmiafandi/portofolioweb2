const { PrismaClient } = require('../src/generated/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10)

  // Create Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@portohelmi.com' },
    update: {},
    create: {
      email: 'admin@portohelmi.com',
      name: 'Helmi Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('Admin user created:', admin.email)

  // Clean existing portfolio data
  await prisma.certificate.deleteMany()
  await prisma.project.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.experience.deleteMany()
  await prisma.about.deleteMany()
  await prisma.hero.deleteMany()

  // Create Hero
  const hero = await prisma.hero.create({
    data: {
      title_en: "Building Digital\nExperiences That\nInspire.",
      title_id: "Membangun Pengalaman\nDigital yang\nMenginspirasi.",
      subtitle_en: "Full-Stack Developer specialized in crafting elegant, high-performance web applications with modern technologies.",
      subtitle_id: "Full-Stack Developer yang berfokus pada pembuatan aplikasi web elegan dan berkinerja tinggi dengan teknologi modern.",
      cta_en: "View My Work",
      cta_id: "Lihat Karya Saya",
      badge_en: "Available for Freelance",
      badge_id: "Tersedia untuk Freelance",
    }
  })

  // Create About
  await prisma.about.create({
    data: {
      description_en: "I'm a passionate full-stack developer with over 3 years of experience building modern web applications. I specialize in React, Next.js, and Node.js, and I love creating elegant solutions to complex problems.",
      description_id: "Saya adalah full-stack developer yang bersemangat dengan pengalaman lebih dari 3 tahun membangun aplikasi web modern. Saya mengkhususkan diri dalam React, Next.js, dan Node.js, dan saya suka menciptakan solusi elegan untuk masalah yang kompleks.",
    }
  })

  // Create Skills
  const skills = [
    { name: 'React / Next.js', level: 92, category: 'Frontend', order: 1 },
    { name: 'TypeScript', level: 88, category: 'Frontend', order: 2 },
    { name: 'Node.js', level: 85, category: 'Backend', order: 3 },
    { name: 'PostgreSQL', level: 82, category: 'Backend', order: 4 },
  ]
  for (const s of skills) {
    await prisma.skill.create({ data: s })
  }

  // Create Project
  await prisma.project.create({
    data: {
      title_en: 'E-Commerce Platform',
      title_id: 'Platform E-Commerce',
      description_en: 'A full-featured e-commerce platform built with Next.js and PostgreSQL.',
      description_id: 'Platform e-commerce lengkap yang dibangun dengan Next.js dan PostgreSQL.',
      tech_stack: ['Next.js', 'PostgreSQL', 'Tailwind'],
      category: 'Web',
      featured: true,
      published: true,
    }
  })

  // Create Experiences
  await prisma.experience.create({
    data: {
      title_en: 'Senior Frontend Developer',
      title_id: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'Jakarta, Indonesia',
      start_date: new Date('2024-01-01'),
      description_en: 'Leading frontend development for enterprise clients, designing Neo-Brutalist design systems, and improving load speeds by 40%.',
      description_id: 'Memimpin pengembangan frontend untuk klien enterprise, merancang sistem desain Neo-Brutalist, dan meningkatkan kecepatan pemuatan hingga 40%.',
      published: true,
      order: 1
    }
  })

  // Create Certificates
  const certificates = [
    {
      name: 'Advanced React & Next.js Masterclass',
      issuer: 'Vercel',
      issue_date: new Date('2025-08-15'),
      credential_id: 'VRC-8932749',
      link: 'https://vercel.com',
      published: true,
      order: 1
    },
    {
      name: 'Professional Frontend UI/UX Architect',
      issuer: 'Google',
      issue_date: new Date('2026-02-10'),
      credential_id: 'GGL-UX-774921',
      link: 'https://grow.google',
      published: true,
      order: 2
    }
  ]
  for (const c of certificates) {
    await prisma.certificate.create({ data: c })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
