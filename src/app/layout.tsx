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

export const metadata: Metadata = {
  title: "Helmi | Full-Stack Developer",
  description:
    "Creative full-stack developer crafting modern, elegant digital experiences. Specialized in React, Next.js, and scalable web solutions.",
  keywords: [
    "developer",
    "portfolio",
    "web development",
    "full-stack",
    "react",
    "next.js",
  ],
  authors: [{ name: "Helmi" }],
  openGraph: {
    title: "Helmi | Full-Stack Developer",
    description:
      "Creative full-stack developer crafting modern, elegant digital experiences.",
    type: "website",
  },
};

// Eksplisit izinkan zoom browser (Ctrl+/-)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // TIDAK pakai maximumScale atau userScalable=no
  // agar Ctrl+/- dan pinch zoom tetap berfungsi
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${outfit.className} ${spaceGrotesk.className}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LoadingScreen />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
