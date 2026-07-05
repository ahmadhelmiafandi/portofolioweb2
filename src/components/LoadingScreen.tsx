"use client";

import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  const progress = [24, 68, 96][phase] ?? 0;
  const PHASES = ["SYSTEM READY", "PORTFOLIO", "UI LOADING"];

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setVisible(false), 1400),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#050505",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(1.04)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
          {/* Background gradient blobs — reduced blur for performance */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 700,
                height: 700,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(20,184,166,0.2) 0%, transparent 65%)",
                top: "-20%",
                left: "-15%",
                filter: "blur(40px)",
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 500,
                height: 500,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 65%)",
                bottom: "-15%",
                right: "-10%",
                filter: "blur(40px)",
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            />
          </div>

          {/* Main card — reduced backdrop-filter */}
          <div className="loading-main-card">
            {/* LEFT */}
            <div>
              {/* Status pills */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginBottom: 32,
                  flexWrap: "wrap",
                }}
              >
                {PHASES.map((label, i) => (
                  <span
                    key={label}
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      padding: "4px 10px",
                      borderRadius: 9999,
                      fontFamily: "Outfit, monospace",
                      background:
                        i <= phase
                          ? "rgba(20,184,166,0.15)"
                          : "rgba(255,255,255,0.06)",
                      color: i <= phase ? "#14b8a6" : "#52525b",
                      border: `1px solid ${i <= phase ? "rgba(20,184,166,0.3)" : "rgba(255,255,255,0.08)"}`,
                      transition: "all 0.3s ease",
                    }}
                  >
                    • {label}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  fontFamily: "Outfit, sans-serif",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                Welcome to
                <br />
                my Portfolio
                <br />
                Website
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 14,
                  color: "#a1a1aa",
                  lineHeight: 1.7,
                  marginBottom: 32,
                  maxWidth: 360,
                }}
              >
                Building modern, reliable, and fast digital experiences with a
                focus on clean UI and solid engineering.
              </p>

              {/* Progress bar */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#52525b",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                    }}
                  >
                    LIVE STATUS
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: 1,
                      background: "rgba(255,255,255,0.08)",
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 3,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 9999,
                    overflow: "hidden",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      background: "linear-gradient(90deg, #14b8a6, #8b5cf6)",
                      borderRadius: 9999,
                      width: `${progress}%`,
                      transition: "width 0.22s ease-out",
                    }}
                  />
                </div>

                {/* Action pills */}
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { icon: "</>", label: "CODE" },
                    { icon: "◉", label: "PROFILE" },
                    { icon: "⊞", label: "SOURCE" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 12px",
                        borderRadius: 9999,
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#71717a",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      <span style={{ fontSize: 12 }}>{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — circular gauge */}
            <div className="loading-right-gauge">
              {/* Top bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#52525b",
                    letterSpacing: "0.08em",
                    fontFamily: "monospace",
                  }}
                >
                  CORE UI
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#22c55e",
                    letterSpacing: "0.08em",
                    fontFamily: "monospace",
                  }}
                >
                  ONLINE
                </span>
              </div>

              {/* Circular progress — pure SVG, no framer-motion for the circle animation */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "8px 0 20px",
                }}
              >
                {/* Desktop Gauge */}
                <div
                  className="loading-gauge-desktop"
                  style={{
                    position: "relative",
                    width: 140,
                    height: 140,
                  }}
                >
                  <svg
                    width={140}
                    height={140}
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <circle
                      cx={70}
                      cy={70}
                      r={54}
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="8"
                    />
                    <circle
                      cx={70}
                      cy={70}
                      r={54}
                      fill="none"
                      stroke="url(#loadGrad)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={339.292}
                      strokeDashoffset={
                        339.292 * (1 - Math.min(progress, 100) / 100)
                      }
                      style={{ transition: "stroke-dashoffset 0.15s ease-out" }}
                    />
                    <defs>
                      <linearGradient
                        id="loadGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#a1a1aa",
                        letterSpacing: "0.1em",
                        fontFamily: "monospace",
                      }}
                    >
                      WELCOME
                    </span>
                    <span
                      className="loading-pulse-dot"
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#22c55e",
                        marginTop: 6,
                        display: "inline-block",
                      }}
                    />
                  </div>
                </div>

                {/* Mobile Gauge */}
                <div
                  className="loading-gauge-mobile"
                  style={{
                    position: "relative",
                    width: 100,
                    height: 100,
                  }}
                >
                  <svg
                    width={100}
                    height={100}
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <circle
                      cx={50}
                      cy={50}
                      r={38}
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="8"
                    />
                    <circle
                      cx={50}
                      cy={50}
                      r={38}
                      fill="none"
                      stroke="url(#loadGradMobile)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={238.761}
                      strokeDashoffset={
                        238.761 * (1 - Math.min(progress, 100) / 100)
                      }
                      style={{ transition: "stroke-dashoffset 0.15s ease-out" }}
                    />
                    <defs>
                      <linearGradient
                        id="loadGradMobile"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#a1a1aa",
                        letterSpacing: "0.1em",
                        fontFamily: "monospace",
                      }}
                    >
                      WELCOME
                    </span>
                    <span
                      className="loading-pulse-dot"
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#22c55e",
                        marginTop: 6,
                        display: "inline-block",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {[
                  { label: "MODULES", value: "06", sub: "Loaded" },
                  { label: "LATENCY", value: "12ms", sub: "Stable" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="loading-stats-box"
                  >
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#52525b",
                        letterSpacing: "0.08em",
                        marginBottom: 4,
                        fontFamily: "monospace",
                      }}
                    >
                      {s.label}
                    </div>
                    <div className="loading-stats-value">
                      {s.value}
                    </div>
                    <div
                      style={{ fontSize: 10, color: "#52525b", marginTop: 2 }}
                    >
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </div>
  );
}
