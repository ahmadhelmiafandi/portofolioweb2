import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Outfit, Space_Grotesk } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.helmiafandi.web.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ahmad Helmi Afandi | Full-Stack Web Developer & Jasa Pembuatan Website",
    template: "%s | Ahmad Helmi Afandi",
  },
  description:
    "Saya Ahmad Helmi Afandi adalah Full-Stack Web Developer & Penyedia Jasa Pembuatan Website Profesional di Indonesia. Spesialisasi Next.js, React, Node.js, PWA, & Sistem Kasir (POS). Hubungi untuk konsultasi proyek web Anda!",
  keywords: [
    "Ahmad Helmi Afandi",
    "Helmi Afandi",
    "ahmadhelmiafandi",
    "helmiafandi",
    "jasa pembuatan website",
    "jasa bikin website",
    "jasa pembuatan web",
    "web developer",
    "web developer indonesia",
    "full stack developer",
    "full-stack developer",
    "freelance web developer indonesia",
    "jasa pembuatan website profesional",
    "jasa website surabaya",
    "jasa pembuatan pwa",
    "jasa aplikasi pos",
    "react developer",
    "next.js developer",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Ahmad Helmi Afandi", url: SITE_URL }],
  creator: "Ahmad Helmi Afandi",
  publisher: "Ahmad Helmi Afandi",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Ahmad Helmi Afandi | Full-Stack Web Developer & Jasa Pembuatan Website",
    description:
      "Full-Stack Web Developer & Penyedia Jasa Pembuatan Website Profesional. Spesialis Next.js, React, PWA, & Sistem Kasir (POS).",
    url: SITE_URL,
    siteName: "Ahmad Helmi Afandi - Portfolio & Jasa Website",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Helmi Afandi | Full-Stack Web Developer & Jasa Pembuatan Website",
    description:
      "Ahmad Helmi Afandi - Full-Stack Web Developer & Jasa Pembuatan Website Profesional di Indonesia.",
    creator: "@ahmadhelmiafandi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Eksplisit izinkan zoom browser (Ctrl+/-)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmad Helmi Afandi",
    alternateName: ["Helmi Afandi", "Ahmad Helmi"],
    jobTitle: "Full-Stack Web Developer",
    url: SITE_URL,
    sameAs: [
      "https://github.com/ahmadhelmiafandi",
      "https://linkedin.com/in/ahmadhelmiafandi",
    ],
    knowsAbout: [
      "Web Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Progressive Web Apps (PWA)",
      "POS Systems",
      "UI/UX Design",
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jasa Pembuatan Website Ahmad Helmi Afandi",
    image: `${SITE_URL}/icon.svg`,
    url: SITE_URL,
    description:
      "Jasa pembuatan website profesional, landing page, sistem POS, PWA, dan aplikasi web custom oleh Ahmad Helmi Afandi.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    areaServed: "Indonesia",
    serviceType: [
      "Jasa Pembuatan Website",
      "Web Development",
      "Full Stack Development",
      "PWA Development",
      "Sistem Kasir POS",
    ],
  };

  return (
    <html
      lang="id"
      className={`${outfit.className} ${spaceGrotesk.className}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
