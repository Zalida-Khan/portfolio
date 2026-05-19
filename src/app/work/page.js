"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "../components/all-pages/Header";
import Footer from "../components/all-pages/Footer";
import LoadingAnimation from "../components/all-pages/Loading";

const posts = [
  {
    id: 1,
    slug: 'arquitectura-organica',
    title: 'Arquitectura Organica',
    image: '/images/magazine/feature-magazine.webp',
    category: ['Magazine Design', 'Graphic Design'],
    tags: ['Print', 'Editorial', 'Typography'],
    year: '2024',
  },
  {
    id: 2,
    slug: 'sugar-magic',
    title: 'Sugar Magic',
    image: '/images/magic/feature-sugarmagic.webp',
    category: ['Packaging Design', 'Graphic Design'],
    tags: ['Packaging', 'Branding', 'Illustration'],
    year: '2024',
  },
  {
    id: 3,
    slug: 'the-waterfall',
    title: 'The Waterfall Poster',
    image: '/images/waterfall/feature-waterfall-2.webp',
    category: ['Poster Design', 'Vinyl Covers', 'Graphic Design'],
    tags: ['Poster', 'Vinyl', 'Visual Art'],
    year: '2024',
  },
  {
    id: 4,
    slug: 'the-exhibition',
    title: 'The Exhibition Poster',
    image: '/images/exhibition/feature-exhibition-poster.webp',
    category: ['Poster Design', 'Graphic Design'],
    tags: ['Poster', 'Events', 'Print'],
    year: '2024',
  },
  {
    id: 5,
    slug: 'aether',
    title: 'Aether Mobile App',
    image: '/images/aether/feature-aether.jpg',
    category: ['Case Study', 'UI/UX Design', 'Front–end Development'],
    tags: ['UX Research', 'Prototyping', 'React Native'],
    year: '2024',
    badge: "Case Study",
  },
  {
    id: 6,
    slug: 'the-yolk',
    title: 'The Yolk Menu',
    image: '/images/yolk/menu-cover.webp',
    category: ['Menu Design', 'Branding', 'Graphic Design'],
    tags: ['Branding', 'Print', 'Identity'],
    year: '2024',
  },
  {
    id: 7,
    slug: 'assemble-industries',
    title: 'Assemble Industries',
    image: '/images/assemble/hero-assemble.webp',
    category: ['Branding', 'Web Design', 'Web Development'],
    discipline: 'Branding & Dev',
    year: '2025',
    description: 'Full brand identity for a BC-based construction contractor — logo, business cards, logo animation and website.',
    tags: ['Logo', 'Branding', 'Web Dev'],
    badge: 'Real Client',
  },
  {
    id: 8,
    slug: 'khancept-projects',
    title: 'Khancept Projects',
    image: '/images/Khancept Projects/hero-Khancept Projects.webp',
    category: ['Branding', 'Web Design', 'Web Development'],
    discipline: 'Branding & Dev',
    year: '2025',
    description: 'Personal brand identity covering logo, colour palette, typography, logo animation and a full website.',
    tags: ['Personal Brand', 'Logo', 'Web Dev'],
    badge: 'Ongoing',
  },
];

const filters = ['All', 'Graphic Design', 'UI/UX Design', 'Front–end Development', 'Branding'];

function ProjectCard({ post, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      layout
    >
      <Link
        href={`/work/${post.slug}`}
        className="group block focus:outline-none focus:ring-2 focus:ring-[#1A428A] focus:ring-offset-4 rounded-xl"
        aria-label={`View ${post.title}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image — the hero of every card */}
        <div className="relative w-full overflow-hidden rounded-xl bg-gray-50"
          style={{ aspectRatio: '4/3' }}
        >
          <Image
            src={post.image}
            alt={`${post.title} project`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
            }}
            loading="lazy"
          />

          {/* Minimal overlay — just a soft vignette + arrow */}
          <div
            className="absolute inset-0 flex items-end justify-end p-4 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 50%)',
              opacity: hovered ? 1 : 0,
            }}
            aria-hidden="true"
          >
            <div
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg"
              style={{
                transition: 'transform 0.3s ease',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7.5 3l4 4-4 4" stroke="#1A428A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {post.badge && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-white/90 backdrop-blur-sm text-[#1A428A] text-xs font-bold font-poppins tracking-wide shadow-sm">
              {post.badge}
            </div>
          )}
        </div>

        {/* Minimal text below — just enough for context */}
        <div className="pt-4 pb-2 px-1">
          <div className="flex items-start justify-between gap-3">
            <h2
              className="font-syne font-bold text-lg leading-tight transition-colors duration-200"
              style={{ color: hovered ? '#1A428A' : '#111' }}
            >
              {post.title}
            </h2>
            <span className="text-xs text-gray-300 font-poppins flex-shrink-0 mt-0.5">
              {post.year}
            </span>
          </div>

          {/* Category — one line, restrained */}
          <p className="text-xs font-poppins font-medium tracking-widest uppercase mt-1 transition-colors duration-200"
            style={{ color: hovered ? '#AAAC24' : '#9ca3af' }}
          >
            {post.category[0]}
            {post.category[1] && post.category[1] !== post.category[0] && ` · ${post.category[1]}`}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [hasLoaded, setHasLoaded] = useState(false);

  const filteredPosts = filter === 'All'
    ? posts
    : posts.filter(p => p.category.some(c => c.includes(filter.split('–')[0].trim())));

  useEffect(() => { setTimeout(() => setHasLoaded(true), 250); }, []);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white text-[#1A428A] min-h-screen font-poppins pt-16">
      {!hasLoaded && <div className="loadingOverlay"><LoadingAnimation /></div>}
      <Header />

      <main className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Page header — airy, lots of breathing room */}
        <div className="pt-14 pb-10">
          <div className="flex items-center gap-3 mb-5" aria-hidden="true">
            <span className="h-px w-8 bg-[#AAAC24]" />
            <span className="text-[#AAAC24] text-xs font-bold tracking-widest uppercase">
              Selected Work
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h1 className="font-syne font-extrabold text-6xl sm:text-7xl text-[#1A428A] leading-none tracking-tight">
              Work
            </h1>

            {/* Filter — clean pill style */}
            <div
              className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-gray-50 border border-gray-100 self-start sm:self-auto"
              role="group"
              aria-label="Filter projects by discipline"
            >
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold font-poppins transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A428A]"
                  style={{
                    background: filter === f ? '#1A428A' : 'transparent',
                    color: filter === f ? '#fff' : '#9ca3af',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid — images lead, wide gutters, room to breathe */}
        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pb-24"
            layout
          >
            {filteredPosts.map((post, index) => (
              <ProjectCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
}