"use client";

import { ArrowUp } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { useScrollPosition } from "@/lib/useScrollPosition";

export function ScrollToTop() {
  const { lang } = useLang();
  const isVisible = useScrollPosition(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "var(--accent)",
        color: "#000",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(20,184,166,0.3)",
        zIndex: 90,
        transition: "transform 0.2s ease, opacity 0.2s ease",
        opacity: isVisible ? 1 : 0,
      }}
      aria-label={lang === "en" ? "Back to top" : "Kembali ke atas"}
    >
      <ArrowUp size={24} strokeWidth={2.5} />
    </button>
  ) : null;
}
