"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import {
  ArrowRight,
  Download,
  Link2,
  Mail,
  MessageCircle,
  Phone,
  Globe,
} from "lucide-react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Twitch,
  Whatsapp,
} from "@/components/icons/BrandIcons";
import { useEffect, useState } from "react";

interface HeroData {
  title_en: string;
  title_id: string;
  subtitle_en: string;
  subtitle_id: string;
  cta_en: string;
  cta_id: string;
  badge_en: string;
  badge_id: string;
  image?: string | null;
  cv_url?: string | null;
}

interface Social {
  id: string;
  name: string;
  link: string;
  icon?: string | null;
}

const DEFAULT_HERO: HeroData = {
  title_en: "Helmi Afandi",
  title_id: "Helmi Afandi",
  subtitle_en: "Full-Stack Developer & UI Engineer",
  subtitle_id: "Full-Stack Developer & UI Engineer",
  cta_en: "View My Work",
  cta_id: "Lihat Karya Saya",
  badge_en: "Available for Freelance",
  badge_id: "Tersedia untuk Freelance",
};

function TypewriterText({
  text,
  speed = 35,
  delay = 0,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    setDisplayed("");
    setDone(false);

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started]);

  return (
    <span>
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{
            display: "inline-block",
            width: 2,
            height: "1em",
            background: "var(--hero-accent)",
            marginLeft: 2,
            verticalAlign: "middle",
            borderRadius: 1,
          }}
        />
      )}
    </span>
  );
}

const HERO_ICON_MAP: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  x: Twitter,
  facebook: Facebook,
  youtube: Youtube,
  whatsapp: Whatsapp,
  twitch: Twitch,
  mail: Mail,
  phone: Phone,
  globe: Globe,
  link: Link2,
  dribbble: Globe,
  behance: Globe,
};

const formatLink = (url: string | null | undefined) => {
  if (!url) return "#";
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("/")
  )
    return url;
  return `https://${url}`;
};

export function HeroSection({
  data,
  socials,
}: {
  data?: HeroData | null;
  socials?: Social[] | null;
}) {
  const { lang } = useLang();
  const hero = data || DEFAULT_HERO;
  const name = lang === "en" ? hero.title_en : hero.title_id;
  const subtitleText = lang === "en" ? hero.subtitle_en : hero.subtitle_id;
  const role =
    subtitleText && subtitleText.length <= 60
      ? subtitleText
      : lang === "en"
        ? "Full-Stack Developer & UI Engineer"
        : "Full-Stack Developer & UI Engineer";
  const descriptionText =
    subtitleText ||
    (lang === "en"
      ? "Full-Stack Developer specialized in crafting elegant, high-performance web applications with modern technologies."
      : "Full-Stack Developer yang berfokus pada pembuatan aplikasi web elegan dan berkinerja tinggi dengan teknologi modern.");
  const badge = lang === "en" ? (hero.badge_en || "HELLO, I'M") : (hero.badge_id || "HALO SAYA");
  const imageUrl = hero.image || "/uploads/hero-cutout.png";
  const titleWords = name.trim().split(/\s+/);
  const firstTitle = titleWords[0] || name;
  const secondTitle = titleWords.slice(1).join(" ");

  const heroSocials =
    socials && socials.length > 0
      ? socials.map((s) => {
          const iconKey = (s.icon || s.name || "").toLowerCase();
          const Icon = HERO_ICON_MAP[iconKey] || Link2;
          return { icon: Icon, label: s.name, href: formatLink(s.link) };
        })
      : [
          { icon: Github, label: "GitHub", href: "#" },
          { icon: Linkedin, label: "LinkedIn", href: "#" },
          { icon: Instagram, label: "Instagram", href: "#" },
        ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap');

        .hero-editorial {
          --hero-accent: var(--accent);
          --hero-accent-soft: var(--accent-light);
          --hero-accent-glow: rgba(20, 184, 166, 0.2);

          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #020202 url('/uploads/hero-background.png') no-repeat;
          background-size: cover;
          background-position: right 10% center;
        }

        /* ── Subtle grid background ── */
        .hero-editorial::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 72px 72px;
          opacity: 0.2;
          z-index: 1;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 90%);
          -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 90%);
        }

        /* ── Shader Background ── */
        .hero-shader-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          z-index: 0;
          pointer-events: none;
          opacity: 0.8;
          mix-blend-mode: screen; /* Changed from color-dodge to screen for a more visible effect */
        }

        /* ── Ambient top-left glow ── */
        .hero-ambient-glow {
          position: absolute;
          left: -8%;
          top: 10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--hero-accent-glow) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          filter: blur(80px);
        }

        /* ── Noise texture overlay ── */
        .hero-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          z-index: 1;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E");
        }

        /* ── Main composition wrapper ── */
        .hero-composition {
          position: relative;
          z-index: 30;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(24px, 5vw, 80px);
          display: flex;
          align-items: flex-start;
          padding-top: clamp(100px, 12vh, 160px);
          padding-bottom: clamp(40px, 6vh, 80px);
          min-height: 100vh;
        }

        /* ── Oversized Title Block ── */
        .hero-title-block {
          position: relative;
          z-index: 40;
          width: clamp(500px, 72vw, 1150px);
          padding-bottom: 28px;
        }

        /* Kicker / subtitle badge */
        .hero-kicker-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: clamp(16px, 2vh, 28px);
        }

        .hero-kicker-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(11px, 0.85vw, 13px);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--hero-accent);
        }

        .hero-kicker-line {
          width: 80px;
          height: 1px;
          background: var(--hero-accent);
          opacity: 0.6;
        }

        /* ── Overlapping Avatars for Stats Card ── */
        .hero-stats-avatars {
          display: flex;
          align-items: center;
        }

        .hero-stats-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid #000;
          margin-left: -8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .hero-stats-avatar:first-child {
          margin-left: 0;
        }

        /* ── Giant name ── */
        .hero-giant-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(54px, 8.5vw, 120px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin: 0;
          position: relative;
          overflow-wrap: break-word;
          word-break: normal;
          z-index: 40;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .hero-name-first {
          display: block;
          position: relative;
          z-index: 12;
        }

        .hero-name-second-wrap {
          display: inline-flex;
          flex-direction: column;
          gap: -0.12rem;
          position: relative;
          align-items: flex-start;
        }

        .hero-name-line {
          display: block;
          line-height: 0.88;
          white-space: nowrap;
        }

        /* Brush underline under second name */
        .hero-brush-underline {
          position: absolute;
          bottom: -4px;
          left: -2%;
          width: 108%;
          height: clamp(10px, 1.2vw, 22px);
          z-index: 11;
          pointer-events: none;
        }

        .hero-brush-underline path {
          stroke: var(--hero-accent);
          fill: none;
        }

        /* ── Role & Description ── */
        .hero-meta {
          margin-top: clamp(24px, 3vh, 40px);
          max-width: 480px;
          position: relative;
          z-index: 40;
        }

        .hero-role-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: var(--hero-accent-soft);
          border: 1px solid rgba(20, 184, 166, 0.2);
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--hero-accent);
          letter-spacing: 0.04em;
          margin-bottom: 16px;
        }

        .hero-desc-block {
          border-left: 2px solid var(--hero-accent);
          padding-left: 18px;
        }

        .hero-desc-text {
          font-family: 'Outfit', 'Space Grotesk', sans-serif;
          color: var(--text-secondary);
          font-size: clamp(13px, 1vw, 15px);
          font-weight: 400;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Action Buttons ── */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: clamp(24px, 3vh, 36px);
          position: relative;
          z-index: 40;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 30px;
          background: var(--hero-accent);
          color: #000;
          border: none;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.02em;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(20, 184, 166, 0.25), 0 0 40px rgba(20, 184, 166, 0.1);
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(20, 184, 166, 0.4), 0 0 60px rgba(20, 184, 166, 0.15);
          background: var(--accent-hover);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-theme='light'] .hero-btn-secondary {
          border-color: rgba(0,0,0,0.15);
          color: var(--text-primary);
        }

        .hero-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: var(--hero-accent);
          color: var(--hero-accent);
          background: var(--hero-accent-soft);
        }

        /* ── Social Links ── */
        .hero-socials {
          display: flex;
          gap: 10px;
          margin-top: 24px;
          position: relative;
          z-index: 40;
        }

        .hero-social-link {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-decoration: none;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(8px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-social-link:hover {
          color: var(--hero-accent);
          border-color: var(--hero-accent);
          transform: translateY(-3px);
          background: var(--hero-accent-soft);
          box-shadow: 0 4px 16px rgba(20, 184, 166, 0.15);
        }

        /* ── Portrait (Absolute Positioned, Overlapping) ── */
        .hero-portrait-container {
          position: absolute;
          bottom: 0;
          right: 16%;
          height: 88vh;
          z-index: 10;
          pointer-events: none;
          display: flex;
          align-items: flex-end;
          max-width: 720px;
        }

        .hero-portrait-img {
          height: 100%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: bottom center;
          filter: drop-shadow(0 0 80px rgba(0,0,0,0.35));
          user-select: none;
          pointer-events: none;
          opacity: 1;
          mask-image: linear-gradient(to bottom, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 92%, transparent 100%);
        }

        /* ── Cyan glow behind portrait ── */
        .hero-portrait-glow {
          position: absolute;
          bottom: 12%;
          left: 50%;
          transform: translateX(-50%);
          width: 520px;
          height: 620px;
          background: radial-gradient(ellipse, rgba(20, 184, 166, 0.22) 0%, rgba(20, 184, 166, 0.08) 40%, transparent 70%);
          filter: blur(80px);
          z-index: 5;
          pointer-events: none;
          display: none;
        }

        /* ── Floating Glass Stats Card ── */
        .hero-stats-card {
          position: absolute;
          bottom: 35%;
          right: -60px;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 22px;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(20, 184, 166, 0.2);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 40px rgba(20, 184, 166, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          pointer-events: auto;
          cursor: default;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          white-space: nowrap;
        }

        [data-theme='light'] .hero-stats-card {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }

        .hero-stats-card:hover {
          transform: translateY(-6px) scale(1.03);
        }

        .hero-stats-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hero-status-dot {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10B981, 0 0 20px rgba(16, 185, 129, 0.4);
          animation: hero-pulse-dot 2s ease-in-out infinite;
        }

        .hero-stats-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hero-stats-number {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 18px;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .hero-stats-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Space Grotesk', sans-serif;
        }

        .hero-stats-avatar-cyan {
          background: linear-gradient(135deg, #22d3ee, #0891b2);
        }

        .hero-stats-avatar-sky {
          background: linear-gradient(135deg, #38bdf8, #0284c7);
        }

        .hero-stats-avatar-blue {
          background: linear-gradient(135deg, #60a5fa, #2563eb);
        }

        .hero-stats-avatar-indigo {
          background: linear-gradient(135deg, #818cf8, #4f46e5);
        }





        /* ── Decorative corner markers ── */
        .hero-corner-mark {
          position: absolute;
          width: 40px;
          height: 40px;
          border-color: rgba(20, 184, 166, 0.2);
          border-style: solid;
          z-index: 5;
          pointer-events: none;
        }

        .hero-corner-tl {
          top: clamp(80px, 12vh, 140px);
          left: clamp(24px, 5vw, 80px);
          border-width: 1px 0 0 1px;
        }

        .hero-corner-br {
          bottom: clamp(24px, 4vh, 60px);
          right: clamp(24px, 5vw, 80px);
          border-width: 0 1px 1px 0;
        }

        /* ── Vertical side text (scroll indicator) ── */
        .hero-side-text {
          position: absolute;
          right: clamp(24px, 3vw, 48px);
          bottom: clamp(60px, 10vh, 140px);
          z-index: 15;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .hero-side-label {
          writing-mode: vertical-rl;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .hero-side-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(180deg, var(--hero-accent), transparent);
        }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .hero-portrait-container {
            right: 10%;
            height: 70vh;
          }

          .hero-giant-name {
            font-size: clamp(52px, 9vw, 120px);
          }

          .hero-title-block {
            width: clamp(400px, 65vw, 800px);
          }
        }

        @media (max-width: 1024px) {
          .hero-editorial {
            background-position: center center;
            display: flex;
            flex-direction: column-reverse;
            height: auto;
            min-height: 100vh;
            align-items: center;
            padding-top: calc(var(--navbar-height) + 40px);
            padding-bottom: 40px;
          }

          .hero-composition {
            height: auto;
            flex-direction: column;
            align-items: center;
            padding-bottom: 0;
            padding-top: 16px;
            gap: 0;
            z-index: 30; /* Ensure text is above portrait glow */
          }

          .hero-title-block {
            width: 100%;
            text-align: left;
            padding-bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 12px;
          }

          .hero-kicker-row {
            justify-content: flex-start;
            margin-bottom: 12px;
          }

          .hero-role-tag {
            display: none;
          }

          .hero-giant-name {
            font-size: clamp(38px, 9.5vw, 64px);
            line-height: 1.15;
            text-align: left;
          }

          .hero-name-line {
            line-height: 1.1;
          }

          .hero-meta {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 16px;
          }

          .hero-desc-block {
            border-left: none;
            padding-left: 0;
            text-align: left;
          }

          .hero-actions {
            justify-content: flex-start;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
            width: 100%;
            margin-top: 20px;
          }

          .hero-socials {
            justify-content: flex-start;
            margin-top: 20px;
          }

          .hero-portrait-container {
            position: relative;
            right: auto;
            bottom: auto;
            height: clamp(480px, 65vh, 580px);
            width: 100%;
            justify-content: center;
            margin-top: 12px;
            max-width: 600px;
            z-index: 10;
          }

          .hero-portrait-img {
            transform: scale(1.55);
            transform-origin: bottom center;
          }

          .hero-portrait-glow {
            display: block;
            bottom: 15%;
            width: 300px;
            height: 350px;
            background: radial-gradient(ellipse, rgba(20, 184, 166, 0.35) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 70%);
            filter: blur(60px);
            z-index: 5;
          }



          .hero-stats-card {
            bottom: 8%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
          }

          .hero-stats-card:hover {
            transform: translateY(-6px) scale(1.03);
          }

          .hero-side-text {
            display: none;
          }

          .hero-corner-mark {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-editorial {
            padding-top: calc(var(--navbar-height) + 20px);
          }

          .hero-giant-name {
            font-size: clamp(32px, 10vw, 48px);
            line-height: 1.15;
          }

          .hero-name-line {
            line-height: 1.1;
          }

          .hero-portrait-container {
            height: clamp(450px, 60vh, 550px);
          }

          .hero-actions {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            width: 100%;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            justify-content: center;
            width: auto;
            flex: 1;
            max-width: 180px;
            padding: 10px 16px;
            font-size: 13px;
            white-space: nowrap;
          }

          .hero-stats-card {
            bottom: 8%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
            padding: 10px 16px;
            gap: 10px;
          }

          .hero-stats-card:hover {
            transform: translateY(-6px) scale(1.03);
          }
        }

        /* ── Light Mode Custom Theme Fixes ── */
        [data-theme='light'] .hero-editorial {
          background: var(--bg);
          --hero-accent-glow: rgba(20, 184, 166, 0.06);
        }

        [data-theme='light'] .hero-giant-name {
          text-shadow: none;
        }

        [data-theme='light'] .hero-portrait-glow {
          background: radial-gradient(ellipse, rgba(20, 184, 166, 0.08) 0%, rgba(20, 184, 166, 0.02) 40%, transparent 70%);
        }

        [data-theme='light'] .hero-portrait-img {
          filter: drop-shadow(0 0 80px rgba(0, 0, 0, 0.08));
        }

        [data-theme='light'] .hero-stats-number {
          color: var(--text-primary);
        }

        [data-theme='light'] .hero-stats-label {
          color: var(--text-secondary);
        }

        [data-theme='light'] .hero-stats-avatar {
          border-color: var(--surface);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        [data-theme='light'] .hero-social-link {
          background: rgba(0, 0, 0, 0.02);
        }
      `}</style>

      <section id="home" className="hero-editorial" aria-label="Hero">

        
        {/* Decorative elements */}
        <div className="hero-ambient-glow" />
        <div className="hero-noise" />
        <div className="hero-corner-mark hero-corner-tl" />
        <div className="hero-corner-mark hero-corner-br" />

        {/* Scroll indicator on right side */}
        <motion.div
          className="hero-side-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="hero-side-label">
            {lang === "en" ? "Scroll" : "Gulir"}
          </span>
          <motion.div
            className="hero-side-line"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>



        {/* Main content composition */}
        <div className="hero-composition">
          <div className="hero-title-block">
            {/* Kicker row */}
            <motion.div
              className="hero-kicker-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="hero-kicker-text">{badge}</span>
              <div className="hero-kicker-line" />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="var(--hero-accent)"
                style={{ flexShrink: 0 }}
              >
                <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
              </svg>
            </motion.div>

            {/* Giant overlapping name */}
            <motion.h1
              className="hero-giant-name"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="hero-name-first">{firstTitle}</span>
              <span className="hero-name-second-wrap">
                <span className="hero-name-line">{secondTitle}</span>
                {/* Brush underline */}
                <svg
                  className="hero-brush-underline"
                  viewBox="0 0 500 20"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M5 6 C 150 20, 350 -4, 495 10"
                    stroke="var(--hero-accent)"
                    fill="none"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  />
                  <motion.path
                    d="M15 12 C 120 22, 320 0, 480 14"
                    stroke="var(--hero-accent)"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ opacity: 0.5 }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </motion.h1>
            {/* Meta: role tag, description, CTAs, socials */}
            <motion.div
              className="hero-meta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ position: 'relative', zIndex: 40 }}
            >
              <div className="hero-role-tag">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
                </svg>
                {role}
              </div>

              <div className="hero-desc-block">
                <p className="hero-desc-text">
                  <TypewriterText
                    text={descriptionText}
                    speed={30}
                    delay={1000}
                  />
                </p>
              </div>

              <div className="hero-actions">
                <a href="#projects" className="hero-btn-primary">
                  {lang === "en" ? hero.cta_en : hero.cta_id}
                  <ArrowRight size={15} />
                </a>
                {hero.cv_url && (
                  <a
                    href={hero.cv_url}
                    className="hero-btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={15} />
                    {lang === "en" ? "Download CV" : "Unduh CV"}
                  </a>
                )}
              </div>

              <div className="hero-socials">
                {heroSocials.map((s) => (
                  <a
                    className="hero-social-link"
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <s.icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Portrait – absolutely positioned to overlap the text */}
          <motion.div
            className="hero-portrait-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >


            {/* Cyan glow behind portrait body */}
            <div className="hero-portrait-glow" />

            {/* The portrait image */}
            <img
              className="hero-portrait-img"
              src={imageUrl}
              alt={name}
              loading="eager"
              draggable={false}
            />

            {/* Floating Glass Stats Card near waist */}
            <motion.div
              className="hero-stats-card"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.8 },
                scale: { duration: 0.6, delay: 0.8 },
                y: {
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                  delay: 1.4,
                },
              }}
            >
              <div className="hero-stats-info">
                <div className="hero-stats-text">
                  <span className="hero-stats-number">
                    4.8k Plus
                  </span>
                  <span className="hero-stats-label">
                    {lang === "en" ? "Happy Customers" : "Pelanggan Puas"}
                  </span>
                </div>
                
                {/* Overlapping Avatars */}
                <div className="hero-stats-avatars">
                  <div className="hero-stats-avatar hero-stats-avatar-cyan" />
                  <div className="hero-stats-avatar hero-stats-avatar-sky" />
                  <div className="hero-stats-avatar hero-stats-avatar-blue" />
                  <div className="hero-stats-avatar hero-stats-avatar-indigo" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
