"use client";

import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useMotionPreferences } from "@/lib/useReducedMotion";
import Image from 'next/image'
import "@/app/hero.css";

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
  const containerRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container) return;

    container.textContent = "";
    if (cursor) cursor.style.display = "inline-block";

    let index = 0;
    let intervalId: any = null;

    const timerId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        container.textContent = text.slice(0, index);
        if (index >= text.length) {
          clearInterval(intervalId);
          if (cursor) cursor.style.display = "none";
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timerId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <span>
      <span ref={containerRef} />
      <span ref={cursorRef} className="hero-typewriter-cursor" />
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
  const { prefersReducedMotion, isMobile } = useMotionPreferences();
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
  const { firstTitle, secondTitle } = useMemo(() => {
    const titleWords = name.trim().split(/\s+/);
    const firstTitle = titleWords[0] || name;
    const secondTitle = titleWords.slice(1).join(" ");
    return { firstTitle, secondTitle };
  }, [name]);

  // Animation durations — shorter on mobile, none on reduced-motion
  const dur = prefersReducedMotion ? 0 : isMobile ? 0.4 : undefined;

  // --- Viewport & tab visibility: pause infinite animations when off-screen or tab inactive ---
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(true); // hero starts in view
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibility = () => setIsTabActive(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const shouldAnimate = isInView && isTabActive && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawYPortrait = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rawYText = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const yPortraitVal = shouldAnimate && !isMobile ? rawYPortrait : 0;
  const yTextVal = shouldAnimate && !isMobile ? rawYText : 0;

  const heroSocials = useMemo(() =>
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
        ],
    [socials]
  );

  return (
    <>
      <section id="home" className="hero-editorial" aria-label="Hero" ref={sectionRef}>

        
        {/* Decorative elements */}
        <div className="hero-ambient-glow" />
        <div className="hero-noise" />
        <div className="hero-corner-mark hero-corner-tl" />
        <div className="hero-corner-mark hero-corner-br" />

        {/* Scroll indicator on right side */}
        <m.div
          className="hero-side-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: dur ?? 0.8 }}
        >
          <span className="hero-side-label">
            {lang === "en" ? "Scroll" : "Gulir"}
          </span>
          {shouldAnimate ? (
            <m.div
              className="hero-side-line"
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          ) : (
            <div className="hero-side-line" />
          )}
        </m.div>



        {/* Main content composition */}
        <div className="hero-composition">
          <m.div className="hero-title-block" style={{ y: yTextVal }}>
            {/* Kicker row */}
            <div className="hero-kicker-row">
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
            </div>

            {/* Giant overlapping name */}
            <h1 className="hero-giant-name">
              <span className="hero-name-first">{firstTitle}</span>
              <span className="hero-name-second-wrap">
                <span className="hero-name-line">{secondTitle}</span>
                {/* Brush underline */}
                <svg
                  className="hero-brush-underline"
                  viewBox="0 0 500 20"
                  preserveAspectRatio="none"
                >
                  <m.path
                    d="M5 6 C 150 20, 350 -4, 495 10"
                    stroke="var(--hero-accent)"
                    fill="none"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: dur ?? 1, delay: 0.8, ease: "easeOut" }}
                  />
                  <m.path
                    d="M15 12 C 120 22, 320 0, 480 14"
                    stroke="var(--hero-accent)"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ opacity: 0.5 }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: dur ?? 0.8, delay: 1.1, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </h1>
            {/* Meta: role tag, description, CTAs, socials */}
            <div
              className="hero-meta"
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
            </div>
          </m.div>

          {/* Portrait – absolutely positioned to overlap the text */}
          <div className="hero-portrait-container">
            <m.div style={{ y: yPortraitVal, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%', width: '100%', position: 'relative' }}>
              
              {/* Aspect Ratio Wrapper matching the portrait image dimensions */}
              <div className="hero-portrait-wrapper" style={{ position: 'relative', height: '100%', aspectRatio: '720/960', maxWidth: '100%', display: 'flex', alignItems: 'flex-end', pointerEvents: 'none' }}>
                
                {/* Cyan glow behind portrait body */}
                <div className="hero-portrait-glow" />

                {/* The portrait image — explicit dimensions to prevent CLS */}
                <Image
                  className="hero-portrait-img"
                  src={imageUrl}
                  alt={name}
                  width={720}
                  height={960}
                  priority
                  fetchPriority="high"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
                  draggable={false}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
                />

                {/* Floating Glass Stats Card near head/shoulder */}
                <div className="hero-stats-card-container">
                  <m.div
                    className="hero-stats-card"
                    initial={{ scale: 0.94, y: 10 }}
                    animate={{
                      scale: 1,
                      y: shouldAnimate ? [0, -10, 0] : 0,
                    }}
                    transition={{
                      scale: { duration: 0.65, delay: 0.8, ease: [0.33, 1, 0.68, 1] },
                      y: shouldAnimate
                        ? {
                            repeat: Infinity,
                            duration: 4.5,
                            ease: "easeInOut",
                            delay: 1.4,
                          }
                        : { duration: 0 },
                    }}
                  >
                    {/* Glassmorphism Background with clipped bottom-left corner */}
                    <div className="hero-stats-card-bg" />

                    {/* Speech Bubble Tail SVG */}
                    <svg
                      className="hero-stats-card-tail-svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '-20px',
                        pointerEvents: 'none',
                        zIndex: 3,
                      }}
                    >
                      {/* Tail Background Fill (closed with diagonal line) */}
                      <path
                        d="M 20.75,3.25 C 20.75,15 12,28 4,36 C 12,34 26,19.25 36.75,19.25 Z"
                        fill="var(--bubble-bg)"
                      />
                      {/* Tail Glowing Border Stroke (no diagonal line) */}
                      <path
                        d="M 20.75,3.25 C 20.75,15 12,28 4,36 C 12,34 26,19.25 36.75,19.25"
                        stroke="var(--bubble-border)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Content */}
                    <div className="hero-stats-info" style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 4 }}>
                      <div className="hero-status-dot" style={{ width: 10, height: 10, flexShrink: 0 }} />
                      <span className="hero-stats-number" style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text-primary)', lineHeight: 1 }}>
                        {lang === "en" ? "Open to Work" : "Terbuka untuk Kerja"}
                      </span>
                    </div>
                  </m.div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </>
  );
}
