export type Language = 'en' | 'id'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for work',
      cta_primary: 'View My Work',
      cta_secondary: 'Download CV',
    },
    about: {
      title: 'About Me',
      subtitle: 'Who I Am',
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'Technologies I Work With',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'My Recent Work',
      view_all: 'View All',
      visit_project: 'Visit Project',
      view_project: 'Project Details',
      source_code: 'Source Code',
      featured: 'Featured',
    },
    certificates: {
      title: 'Certifications',
      subtitle: 'My Verified Credentials',
      issuer: 'Issued by',
      date: 'Date of Issue',
      id: 'Credential ID',
      view_pdf: 'View PDF / Certificate',
    },
    experience: {
      title: 'Experience',
      subtitle: 'My Journey',
      present: 'Present',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Let's Work Together",
      email_label: 'Email',
      message_placeholder: 'Your message...',
      send: 'Send Message',
    },
    footer: {
      rights: 'All rights reserved',
      built_with: 'Built with',
    },
    theme: {
      toggle: 'Toggle theme',
    },
    lang: {
      toggle: 'EN',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      experience: 'Pengalaman',
      certificates: 'Sertifikat',
      contact: 'Kontak',
    },
    hero: {
      available: 'Tersedia untuk kerja',
      cta_primary: 'Lihat Karya Saya',
      cta_secondary: 'Unduh CV',
    },
    about: {
      title: 'Tentang Saya',
      subtitle: 'Siapa Saya',
    },
    skills: {
      title: 'Keahlian & Kompetensi',
      subtitle: 'Teknologi yang Saya Gunakan',
    },
    projects: {
      title: 'Proyek Unggulan',
      subtitle: 'Karya Terbaru Saya',
      view_all: 'Lihat Semua',
      visit_project: 'Lihat Proyek',
      view_project: 'Detail Proyek',
      source_code: 'Kode Sumber',
      featured: 'Unggulan',
    },
    certificates: {
      title: 'Sertifikasi',
      subtitle: 'Kredensial Terverifikasi Saya',
      issuer: 'Diterbitkan oleh',
      date: 'Tanggal Terbit',
      id: 'ID Kredensial',
      view_pdf: 'Lihat PDF / Sertifikat',
    },
    experience: {
      title: 'Pengalaman',
      subtitle: 'Perjalanan Saya',
      present: 'Sekarang',
    },
    contact: {
      title: 'Hubungi Saya',
      subtitle: 'Mari Bekerja Sama',
      email_label: 'Email',
      message_placeholder: 'Pesan Anda...',
      send: 'Kirim Pesan',
    },
    footer: {
      rights: 'Hak cipta dilindungi',
      built_with: 'Dibuat dengan',
    },
    theme: {
      toggle: 'Ganti tema',
    },
    lang: {
      toggle: 'ID',
    },
  },
}

export type TranslationType = typeof translations.en
