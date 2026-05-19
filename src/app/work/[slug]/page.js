"use client";

import { useParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import Header from "../../components/all-pages/Header";
import Footer from "../../components/all-pages/Footer";
import MagazineDesign from "../projects/arguitectura-organica";
import ProductDesign from "../projects/sugar-magic";
import PosterDesign from "../projects/the-waterfall";
import PosterDesignTE from "../projects/the-exhibition";
import CaseStudy from "../projects/aether";
import MenuDesign from "../projects/the-yolk";
import AssembleIndustries from "../projects/assemble-industries";
import KhanceptProjects from "../projects/khancept-projects";
import posts from "./posts";
import { AiOutlineRight } from "react-icons/ai";
import FadeIn from "../../components/all-pages/fadeIn";

const projectComponents = {
  "Magazine Design": MagazineDesign,
  "Logo and Product Design": ProductDesign,
  "Poster & Vinyl Design (Redesign)": PosterDesign,
  "Poster Design": PosterDesignTE,
  "Mobile App": CaseStudy,
  "Branding & Menu Design": MenuDesign,
  "Branding & Web": AssembleIndustries,
  "Personal Branding & Web": KhanceptProjects,
};

// ── Reading Progress Bar ──
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[200] h-0.5 transition-all duration-75"
      style={{ width: `${progress}%`, background: "#AAAC24" }}
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

// ── Table of Contents — reads DOM headings after render ──
function TableOfContents({ contentRef }) {
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState("");

  // After content renders, find all h2/h3/h4 inside the content area
  useEffect(() => {
    if (!contentRef.current) return;
    const timer = setTimeout(() => {
      const headings = Array.from(
        contentRef.current.querySelectorAll("h2[id], h3[id], h4[id]")
      );
      setSections(headings.map(h => ({
        id: h.id,
        label: h.textContent.replace(/[🚙🎨]/g, "").trim(),
        level: parseInt(h.tagName[1]),
      })));
    }, 300);
    return () => clearTimeout(timer);
  }, [contentRef]);

  // Highlight active section on scroll
  useEffect(() => {
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  if (!sections.length) return null;

  return (
    <aside
      className="hidden xl:block sticky top-28 self-start flex-shrink-0"
      style={{ width: "240px" }}
      aria-label="Table of contents"
    >
      <p className="text-xs font-bold tracking-widest uppercase mb-4 font-poppins"
        style={{ color: "#bbb" }}>
        On this page
      </p>
      <nav aria-label="Page sections">
        <ul className="flex flex-col gap-0.5" role="list">
          {sections.map(({ id, label, level }) => {
            const isActive = activeId === id;
            return (
              <li key={id} style={{ paddingLeft: level === 4 ? "0.75rem" : "0" }}>
                <a
                  href={`#${id}`}
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById(id);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 90;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="flex items-center gap-2 py-1.5 focus:outline-none group"
                  style={{ textDecoration: "none" }}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span
                    className="flex-shrink-0 rounded-xl transition-all duration-300"
                    style={{
                      width: isActive ? "18px" : "8px",
                      height: "1.5px",
                      background: isActive ? "#AAAC24" : "#e0e0e0",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-poppins leading-tight transition-colors duration-200"
                    style={{
                      fontSize: level === 4 ? "0.68rem" : "0.72rem",
                      color: isActive ? "#1A428A" : "#aaa",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const router = useRouter();
  const contentRef = useRef(null);

  useEffect(() => {
    setPost(posts.find((p) => p.slug === slug) || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!post) return <div>Post not found.</div>;

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = posts[currentIndex + 1];
  const previousPost = posts[currentIndex - 1];
  const ProjectComponent = projectComponents[post.projectType] || null;

  const links = [
    { label: "Digital Version", url: post.links,  visibleOn: "sm" },
    { label: "Digital Version", url: post.links1, visibleOn: "lg" },
    { label: "Blog",            url: post.links2 },
    { label: "Styleguide",      url: post.links3 },
    { label: "Hi-fi Prototype", url: post.links4 },
  ].filter(l => l.url);

  return (
    <div className="bg-white text-[#1A428A] min-h-screen font-poppins" style={{ paddingTop: "64px" }}>
      <ReadingProgress />
      <Header />

      {/* ── Back ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-6 pb-2">
        <button
          onClick={() => { router.push("/work"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-[#1A428A] transition-colors duration-200 focus:outline-none group"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-0.5">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Work
        </button>
      </div>

      {/* ── Hero header ── */}
      <header className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-5 pb-8">
        <div className="flex flex-wrap gap-2 mb-5">
          {(Array.isArray(post.category) ? post.category : [post.category]).map(cat => (
            <span key={cat}
              className="text-xs font-semibold font-poppins tracking-widest uppercase px-3 py-1 rounded-xl"
              style={{ background: "rgba(170,172,36,0.1)", color: "#7a7d00", border: "1px solid rgba(170,172,36,0.25)" }}>
              {cat}
            </span>
          ))}
        </div>

        <h1 className="font-syne font-extrabold text-[#1A428A] leading-tight mb-4"
          style={{ fontSize: "clamp(2rem,5vw,3.25rem)" }}>
          {post.title}
        </h1>

        {post.subheading && (
          <p className="text-gray-400 font-light text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
            {post.subheading}
          </p>
        )}

        {links.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            {links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold font-poppins transition-all duration-200 hover:-translate-y-0.5 focus:outline-none
                  ${link.visibleOn === "lg" ? "hidden lg:inline-flex" : ""}
                  ${link.visibleOn === "sm" ? "inline-flex lg:hidden" : ""}`}
                style={{ border: "1.5px solid #1A428A", color: "#1A428A" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1A428A"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1A428A"; }}
                aria-label={`Open ${link.label} in a new tab`}>
                {link.label} <AiOutlineRight size={10} aria-hidden="true"/>
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero image ── */}
      <div className="width-full mb-14">
        <img src={post.image} alt={`${post.title} hero image`}
          className="w-full rounded-2xl object-cover shadow-sm"
          style={{ maxHeight: "560px", objectPosition: "center" }}/>
      </div>

      {/* ── Body: TOC + content ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 flex gap-14 items-start">

        <TableOfContents contentRef={contentRef} />

        <main className="flex-1 min-w-0" ref={contentRef}>

          {/* Project details card */}
          <section
            id="project-details"
            className="rounded-xl p-6 sm:p-8 mb-12"
            style={{ background: "#FBFAF1", border: "1px solid rgba(26,66,138,0.07)" }}
          >
            <h2 id="project-details-heading"
              className="font-poppins font-bold text-xs tracking-widest uppercase mb-6"
              style={{ color: "#bbb" }}>
              Project Details
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6">
              {[
                { label: "Project Type", value: post.projectType },
                { label: "Timeline",     value: post.timeline },
                { label: "Role",         value: post.role },
                { label: "Tools",        value: post.tools, wide: true },
                post.mandate && { label: "Mandate", value: post.mandate, wide: true },
              ].filter(Boolean).map(({ label, value, wide }) => (
                <div key={label} className={wide ? "col-span-2 sm:col-span-3" : ""}>
                  <p className="text-xs font-bold font-poppins tracking-widest uppercase mb-1.5"
                    style={{ color: "#AAAC24" }}>
                    {label}
                  </p>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Overview */}
          {post.overview && (
            <section id="overview" className="mb-12">
              <div className="flex items-center gap-3 mb-3" aria-hidden="true">
                <span className="h-px w-6 bg-[#AAAC24]"/>
                <span className="text-xs font-bold tracking-widest uppercase font-poppins" style={{ color: "#AAAC24" }}>
                  Overview
                </span>
              </div>
              <h2 id="introduction"
                className="font-syne font-bold text-xl sm:text-2xl text-[#1A428A] mb-4">
                {post.heading || "Introduction"}
              </h2>
              <p className="text-gray-600 font-light leading-[1.85] text-base mb-4">
                {post.overview}
              </p>
              {post.secOverview && (
                <p className="text-gray-600 font-light leading-[1.85] text-base">
                  {post.secOverview}
                </p>
              )}
            </section>
          )}

          {/* Project content with injected IDs via CSS */}
          <div id="project-content" className="project-content">
            {ProjectComponent && <ProjectComponent post={post} />}
          </div>

          {/* Prev / Next */}
          <nav className="flex items-center justify-between mt-20 pt-8 border-t border-gray-100"
            aria-label="Project navigation">
            <button
              onClick={() => { if (previousPost) { router.push(`/work/${previousPost.slug}`); window.scrollTo({ top: 0, behavior: "smooth" }); } }}
              disabled={!previousPost}
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 disabled:opacity-25 focus:outline-none hover:text-[#1A428A]"
              style={{ color: previousPost ? "#1A428A" : "#ccc" }}>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-x-0.5">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>
                <span className="block text-xs text-gray-400 font-poppins mb-0.5">Previous</span>
                {previousPost?.title}
              </span>
            </button>

            <button
              onClick={() => { if (nextPost) { router.push(`/work/${nextPost.slug}`); window.scrollTo({ top: 0, behavior: "smooth" }); } }}
              disabled={!nextPost}
              className="group inline-flex items-center gap-2 text-sm font-medium text-right transition-colors duration-200 disabled:opacity-25 focus:outline-none"
              style={{ color: nextPost ? "#1A428A" : "#ccc" }}>
              <span>
                <span className="block text-xs text-gray-400 font-poppins mb-0.5">Next</span>
                {nextPost?.title}
              </span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </nav>

        </main>
      </div>

      <FadeIn><Footer /></FadeIn>
    </div>
  );
}