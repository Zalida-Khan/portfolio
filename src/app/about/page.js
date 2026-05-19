"use client";

import { useState, useEffect, useRef } from 'react';
import FadeIn from "../components/all-pages/fadeIn";
import Header from "../components/all-pages/Header";
import Footer from "../components/all-pages/Footer";
import LoadingAnimation from "../components/all-pages/Loading";
import Journal from "./flipBook";

const skills = {
  "Front-end": [
    { name: "HTML5",      img: "/images/about/html.jpg" },
    { name: "CSS3",       img: "/images/about/css.jpg" },
    { name: "JavaScript", img: "/images/about/javascript.jpg" },
    { name: "React",      img: "/images/about/react.jpg" },
    { name: "Next.js",    img: "/images/about/next js.jpg" },
    { name: "Vite",       img: "/images/about/vite.jpg" },
    { name: "Bootstrap",  img: "/images/about/bootstrap.jpg" },
    { name: "TailwindCSS",img: "/images/about/tailwindcss.jpg" },
  ],
  "Tools & Dev": [
    { name: "NPM",              img: "/images/about/npm.jpg" },
    { name: "VS Code",          img: "/images/about/vs code.jpg" },
    { name: "GitHub",           img: "/images/about/github.jpg" },
    { name: "Git",              img: "/images/about/git.jpg" },
    { name: "Vercel",           img: "/images/about/vercel.jpg" },
    { name: "WordPress",        img: "/images/about/wordpress.jpg" },
    { name: "Google Cloud",     img: "/images/about/google cloud.jpg" },
    { name: "Google Maps API",  img: "/images/about/google maps api.jpg" },
  ],
  "Design": [
    { name: "Figma",            img: "/images/about/figma.jpg" },
    { name: "Creative Cloud",   img: "/images/about/creative cloud.jpg" },
    { name: "InDesign",         img: "/images/about/indesign.jpg" },
    { name: "Illustrator",      img: "/images/about/illustrator.jpg" },
    { name: "Photoshop",        img: "/images/about/photoshop.jpg" },
    { name: "Lightroom",        img: "/images/about/lightroom.jpg" },
    { name: "Adobe Express",    img: "/images/about/express.jpg" },
    { name: "Clipchamp",        img: "/images/about/clipchamp.jpg" },
  ],
};

const skillTabs = Object.keys(skills);

function SkillItem({ name, img }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-[#1A428A]/20 hover:shadow-md hover:-translate-y-0.5 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s, border-color 0.3s",
      }}
    >
      <img
        src={img}
        alt={name}
        className="w-10 h-10 object-contain rounded-lg"
      />
      <p className="text-xs font-medium text-center text-[#000] group-hover:text-[#1A428A] transition-colors">
        {name}
      </p>
    </div>
  );
}

export default function About() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("Front-end");

  useEffect(() => { setTimeout(() => setHasLoaded(true), 250); }, []);

  return (
    <div className="bg-white text-[#1A428A] min-h-screen font-poppins overflow-x-hidden" style={{ paddingTop: "60px" }}>
      {!hasLoaded && <div className="loadingOverlay"><LoadingAnimation /></div>}
      <Header />

      <main>

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "#FBFAF1", borderBottom: "1px solid rgba(26,66,138,0.07)" }}
          aria-labelledby="about-heading"
        >
          {/* Soft blob */}
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(26,66,138,0.06) 0%, transparent 70%)", filter: "blur(80px)" }}
            aria-hidden="true"
          />

          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4" aria-hidden="true">
                <span className="h-px w-8 bg-[#AAAC24]" />
                <span className="text-[#AAAC24] text-xs font-bold tracking-widest uppercase">About Me</span>
              </div>
              <h1
                id="about-heading"
                className="font-syne font-extrabold leading-tight mb-5 text-[#1A428A]"
                style={{ fontSize: "clamp(2.5rem,6vw,3.75rem)" }}
              >
                Hey there,<br />I'm Zalida!
              </h1>
              <h2 className="font-syne font-bold text-lg text-gray-800 mb-4">
                Designing and coding with clarity!
              </h2>
                <p className="text-[#000] text-base sm:text-lg font-light leading-relaxed mb-6 max-w-lg">
                I'm a recent graduate in digital design and development from the{" "}
                <span className="font-medium text-[#1A428A]">British Columbia Institute of Technology</span>.{" "}
                I work across branding, logos, and UI/UX, and build websites with{" "}
                <span className="font-semibold text-[#1A428A]">front-end development</span>{" "}, keeping everything simple, intentional, and practical.
              </p>

              {/* Quick facts */}
              <div className="flex flex-wrap gap-3" role="list" aria-label="Quick facts">
                {[
                  { label: "Based in", value: "British Columbia" },
                  { label: "Graduated from", value: "BCIT" },
                  { label: "Open to", value: "Full-time & Freelance" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="px-4 py-2 rounded-full text-xs font-poppins"
                    style={{ border: "1px solid rgba(26,66,138,0.12)", background: "rgba(26,66,138,0.04)" }}
                    role="listitem"
                  >
                    <span className="text-gray-800">{label} </span>
                    <span className="font-semibold text-[#1A428A]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl opacity-20"
                style={{ background: "linear-gradient(135deg, #1A428A, #AAAC24)", filter: "blur(24px)" }}
                aria-hidden="true"
              />
              <img
                src="/images/about/me2.png"
                alt="A photo of Zalida Khan"
                className="relative w-full rounded-3xl object-cover shadow-lg"
                style={{ maxHeight: "420px", objectPosition: "top" }}
              />
            </div>
          </div>
        </section>

        {/* ── Flipbook ── */}
        <section
          className="py-16"
          aria-labelledby="journal-heading"
        >
          <div className="text-center mb-8 max-w-5xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3 mb-3" aria-hidden="true">
              <span className="h-px w-8 bg-[#AAAC24]" />
              <span className="text-[#AAAC24] text-xs font-bold tracking-widest uppercase">Personal</span>
              <span className="h-px w-8 bg-[#AAAC24]" />
            </div>
            <h2
              id="journal-heading"
              className="font-syne font-extrabold text-3xl sm:text-4xl text-[#1A428A] mb-2"
            >
              Learn More About Me
            </h2>
            <p className="text-gray-800 text-sm font-light">
              Explore my personal interests, hobbies, and what inspires me.
            </p>
          </div>
          <Journal />
        </section>

        {/* ── Skills ── */}
        <section
          className="py-16"
          style={{ background: "#FBFAF1", borderTop: "1px solid rgba(26,66,138,0.07)", borderBottom: "1px solid rgba(26,66,138,0.07)" }}
          aria-labelledby="skills-heading"
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3" aria-hidden="true">
                <span className="h-px w-8 bg-[#AAAC24]" />
                <span className="text-[#AAAC24] text-xs font-bold tracking-widest uppercase">Skills</span>
                <span className="h-px w-8 bg-[#AAAC24]" />
              </div>
              <h2
                id="skills-heading"
                className="font-syne font-extrabold text-3xl sm:text-4xl text-[#1A428A]"
              >
                Skills & Technology
              </h2>
            </div>

            {/* Tabs */}
            <div
              className="flex gap-1 p-1.5 rounded-xl mb-8 w-fit mx-auto"
              style={{ background: "#ede9e4" }}
              role="tablist"
              aria-label="Skill categories"
            >
              {skillTabs.map(tab => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-5 py-2 rounded-lg text-sm font-semibold font-poppins transition-all duration-200 focus:outline-none"
                  style={{
                    background: activeTab === tab ? "#fff" : "transparent",
                    color: activeTab === tab ? "#1A428A" : "#9ca3af",
                    boxShadow: activeTab === tab ? "0 1px 5px rgba(0,0,0,0.09)" : "none",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Skill grid */}
            <div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3"
              role="tabpanel"
              aria-label={`${activeTab} skills`}
            >
              {skills[activeTab].map(skill => (
                <SkillItem key={skill.name} name={skill.name} img={skill.img} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-12 text-center" aria-labelledby="cta-heading">
          <div className="flex items-center justify-center gap-3 mb-4" aria-hidden="true">
            <span className="h-px w-8 bg-[#AAAC24]" />
            <span className="text-[#AAAC24] text-xs font-bold tracking-widest uppercase">Let's Talk</span>
            <span className="h-px w-8 bg-[#AAAC24]" />
          </div>
          <h2
            id="cta-heading"
            className="font-syne font-extrabold text-3xl sm:text-5xl text-[#1A428A] leading-tight mb-4"
          >
            Have a project in mind?
          </h2>
          <p className="text-gray-800 text-base font-light mb-8 max-w-6xl mx-auto leading-relaxed">
            Have a project idea or just want to chat? Reach out — I&apos;d love to hear from you!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:zalidakhan13@gmail.com?subject=Let's Connect"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold font-poppins transition-all duration-300 focus:outline-none"
              style={{
                background: "#1A428A",
                color: "#fff",
                border: "1.5px solid #1A428A",
                transform: "translateY(0)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#1A428A";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#1A428A";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              aria-label="Email Zalida"
            >
              Get in Touch
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/zalida-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-8 py-3 rounded-xl text-sm font-semibold font-poppins transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1A428A] focus:ring-offset-2"
              style={{ border: "1.5px solid rgba(26,66,138,0.25)", color: "#1A428A" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#1A428A"; e.currentTarget.style.background = "rgba(26,66,138,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(26,66,138,0.25)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderWidth = "1.5px"; }}
              aria-label="Connect on LinkedIn (opens in new tab)"
            >
              LinkedIn 
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right style={{ flexShrink: 0 }}">
            <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
            </svg>

            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}