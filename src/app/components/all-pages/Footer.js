"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const marqueeItems = [
  "Zalida Khan",
  "Designer & Developer",
  "Available for Projects",
  "Branding · UI/UX · Front-end",
];

export default function Footer() {
  // Duplicate for seamless loop
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <footer
      className="overflow-hidden"
      style={{
        background: "#FBFAF1",
        borderTop: "1px solid rgba(26,66,138,0.07)",
      }}
      role="contentinfo"
    >
      {/* ── Scrolling marquee strip ── */}
      <div
        className="border-b py-3 overflow-hidden whitespace-nowrap"
        style={{ borderColor: "rgba(26,66,138,0.07)" }}
        aria-hidden="true"
      >
        <div
          className="inline-flex"
          style={{ animation: "marqueeScroll 24s linear infinite" }}
        >
          {items.map((text, i) => (
            <span key={i} className="inline-flex items-center">
              <span
                className="font-syne font-extrabold uppercase px-6 tracking-tight"
                style={{
                  fontSize: "clamp(1.3rem,3vw,2rem)",
                  color: "rgba(26,66,138,0.1)",
                }}
              >
                {text}
              </span>
              <span
                            className="w-2 h-2 rounded-sm bg-[#AAAC24]"

                // className="text-[#AAAC24] px-1"
                style={{ opacity: 0.45, fontSize: "1.2rem" }}
              >
                {/* ✦ */}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="sm:col-span-1">
          <Link href="/" aria-label="Home">
            <img
              src="/images/Monogram-logo.png"
              alt="ZK monogram logo"
              className="h-9 w-auto mb-5"
            />
          </Link>
          <p className="text-sm font-light leading-relaxed max-w-xs mb-5" style={{ color: "#555" }}>
            Feel free to{" "}
            <a
              href="mailto:zalidakhan13@gmail.com?subject=Let's Connect"
              className="underline underline-offset-2 transition-colors duration-200 hover:text-[#AAAC24]"
              style={{ color: "#1A428A" }}
            >
              reach out.
            </a>{" "}
            I&apos;d love to connect and talk about how we can bring your vision to life.
          </p>
          {/* Available pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-widest uppercase"
            style={{
              border: "1px solid rgba(26,66,138,0.15)",
              background: "rgba(26,66,138,0.04)",
              color: "#1A428A",
            }}
            aria-label="Currently available for projects"
          >
            <span
              className="w-2 h-2 rounded-sm bg-[#AAAC24]"
              style={{ animation: "pulse 2.5s ease infinite" }}
              aria-hidden="true"
            />
            Available for projects
          </div>
        </div>

        {/* Navigate */}
        <div>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#bbb" }}
            aria-hidden="true"
          >
            Navigate
          </p>
          <ul className="flex flex-col gap-2.5 list-none" role="list">
            {[
              { label: "Home",    href: "/" },
              { label: "Work",    href: "/work" },
              { label: "About",   href: "/about" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm transition-colors duration-200 hover:text-[#1A428A] focus:outline-none focus:underline"
                  style={{ color: "#555" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#bbb" }}
            aria-hidden="true"
          >
            Connect
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/zalida-khan"
              target="_blank"
              rel="noopener noreferrer"
              title="Opens in a new tab"
              className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-[#1A428A] focus:outline-none focus:underline"
              style={{ color: "#555" }}
              aria-label="LinkedIn (opens in new tab)"
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{ border: "1px solid rgba(26,66,138,0.12)", background: "rgba(26,66,138,0.04)" }}
              >
                <FaLinkedin size={13} />
              </span>
              LinkedIn
            </a>
            <a
              href="https://github.com/Zalida-Khan"
              target="_blank"
              rel="noopener noreferrer"
              title="Opens in a new tab"
              className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-[#1A428A] focus:outline-none focus:underline"
              style={{ color: "#555" }}
              aria-label="GitHub (opens in new tab)"
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{ border: "1px solid rgba(26,66,138,0.12)", background: "rgba(26,66,138,0.04)" }}
              >
                <FaGithub size={13} />
              </span>
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1iOja2qdkEP0DKixhSmP0-0tKKys304g5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              title="Opens in a new tab"
              className="mt-1 inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-250 hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#1A428A]"
              style={{
                border: "1.5px solid rgba(26,66,138,0.2)",
                color: "#1A428A",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgb(26, 66, 138, 0.7)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#1A428A";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#1A428A";
                e.currentTarget.style.borderColor = "rgb(26, 66, 138, 0.6)";
              }}
              aria-label="View resume (opens in new tab)"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Resume
            </a>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div
        className="max-w-6xl mx-auto px-6 sm:px-8 pb-6 flex flex-wrap items-center justify-between gap-2"
        style={{ borderTop: "1px solid rgba(26,66,138,0.07)", paddingTop: "1.25rem" }}
      >
        <p className="text-xs" style={{ color: "#aaa" }}>
          Developed &amp; designed by{" "}
          <span className="font-semibold" style={{ color: "#AAAC24" }}>
            Zalida Khan
          </span>{" "}
          · © 2025
        </p>
        <p className="text-xs" style={{ color: "#ccc" }}>
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>

      {/* Marquee keyframe injected globally */}
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }
      `}</style>
    </footer>
  );
}