"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Sugar Magic",
    category: "Packaging Design",
    discipline: "Graphic Design",
    image: "/images/magic/sugarmagic-animated.mp4",
    isVideo: true,
    link: "/work/sugar-magic",
    number: "01",
  },
  {
    title: "Arquitectura Organica",
    category: "Magazine Design",
    discipline: "Graphic Design",
    image: "/images/magazine/feature-magazine.webp",
    isVideo: false,
    link: "/work/arquitectura-organica",
    number: "02",
  },
  {
    title: "Aether Mobile App",
    category: "Case Study",
    discipline: "UI/UX & Front-end",
    image: "/images/aether/feature-aether.webp",
    isVideo: false,
    link: "/work/aether",
    number: "03",
  },
  {
    title: "The Yolk",
    category: "Branding Design",
    discipline: "Graphic Design",
    image: "/images/yolk/menu-cover.webp",
    isVideo: false,
    link: "/work/the-yolk",
    number: "04",
  },
];

function ProjectRow({ project, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 80);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <li
      ref={rowRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
      }}
    >
      <Link
        href={project.link}
        className="group flex items-center gap-4 sm:gap-6 py-5 sm:py-6 border-b border-gray-200 relative pr-2"
        style={{
          paddingLeft: isHovered ? "0.75rem" : "0",
          transition: "padding-left 0.3s ease",
        }}
        aria-label={`View ${project.title} — ${project.category}`}
      >
        {/* Hover background wash */}
        <div
          className="absolute inset-0 bg-[#1A428A] pointer-events-none"
          style={{
            opacity: isHovered ? 0.03 : 0,
            transition: "opacity 0.3s ease",
          }}
          aria-hidden="true"
        />

        {/* Number */}
        <span
          className="font-syne font-bold text-sm text-[#1A428A] w-8 flex-shrink-0 select-none"
          style={{ opacity: isHovered ? 1 : 0.25, transition: "opacity 0.3s ease" }}
          aria-hidden="true"
        >
          {project.number}
        </span>

        {/* Title + category */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight truncate"
            style={{
              color: isHovered ? "#1A428A" : "#111",
              transition: "color 0.25s ease",
            }}
          >
            {project.title}
          </h3>
          <p
            className="font-poppins text-xs sm:text-sm font-semibold tracking-widest uppercase mt-0.5"
            style={{
              color: isHovered ? "#AAAC24" : "#9ca3af",
              transition: "color 0.25s ease",
            }}
          >
            {project.category} — {project.discipline}
          </p>
        </div>

        {/* Thumbnail — slides in on hover */}
        <div
          className="relative flex-shrink-0 rounded-xl overflow-hidden bg-gray-100"
          style={{
            width: isHovered ? "100px" : "0px",
            height: "68px",
            opacity: isHovered ? 1 : 0,
            transition: "width 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
          }}
          aria-hidden="true"
        >
          {project.isVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project.image} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={project.image}
              alt=""
              fill
              sizes="100px"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        {/* Arrow */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-300"
          style={{
            borderColor: "#1A428A",
            background: isHovered ? "rgb(26, 66, 138, 0.7)" : "#1A428A",
            color: "#fff",
            transform: isHovered ? "translateX(2px)" : "translateX(0)",
          }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Link>
    </li>
  );
}

export default function ProjectsSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 mb-16"
      aria-labelledby="projects-heading"
    >
      {/* Section header */}
      <div
        ref={headerRef}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-2"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div>
          <div className="flex items-center gap-3 mb-3" aria-hidden="true">
            <span className="h-px w-10 bg-[#AAAC24]" />
            <span className="text-[#AAAC24] text-xs font-bold font-poppins tracking-widest uppercase">
              Selected Work
            </span>
          </div>
          <h2
            id="projects-heading"
            className="text-4xl sm:text-5xl font-extrabold font-syne text-[#1A428A] leading-tight"
          >
            Projects
          </h2>
          <p className="mt-2 text-sm text-gray-400 font-poppins max-w-sm">
            Hover each project to preview it.
          </p>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-[#1a428a] text-[#1a428a] font-semibold font-poppins text-sm tracking-wide backdrop-blur-sm bg-white/5 transition-all duration-300 hover:border-[#1a428a] hover:bg-[#1a428a]/70 hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent self-start sm:self-auto"
          aria-label="View all projects"
        >
          View All
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M3 7.5h9M8 4l4 3.5L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Top border rule */}
      <div
        className="h-px bg-[#1A428A] mb-0"
        style={{
          opacity: headerVisible ? 1 : 0,
          transition: "opacity 0.8s ease 0.2s",
        }}
        aria-hidden="true"
      />

      {/* Project rows */}
      <ol aria-label="Portfolio projects">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </ol>
    </section>
  );
}