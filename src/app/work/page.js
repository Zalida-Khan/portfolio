"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FadeIn from '../components/all-pages/fadeIn';
import { motion } from 'framer-motion';
import styles from './Work.module.css';
import Header from "../components/all-pages/Header";
import Footer from "../components/all-pages/Footer";
import LoadingAnimation from "../components/all-pages/Loading";

export default function Work() {
    const [filter, setFilter] = useState('All');
    const [menuOpen, setMenuOpen] = useState(false);
    const [visiblePosts, setVisiblePosts] = useState([]);
    const [animationKey, setAnimationKey] = useState(0);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const posts = [
        { id: 1, slug: 'arquitectura-organica', title: 'Arquitectura Organica', image: '/images/magazine/feature-magazine.webp', category: ['Magazine Design', 'Graphic Design'] },
        { id: 2, slug: 'sugar-magic', title: 'Sugar Magic', image: '/images/magic/feature-sugarmagic.webp', category: ['Product Design', 'Graphic Design'] },
        { id: 3, slug: 'the-waterfall', title: 'The Waterfall Poster', image: '/images/waterfall/feature-waterfall-2.webp', category: ['Poster Design', 'Vinyl Covers', 'Graphic Design'] },
        { id: 4, slug: 'the-exhibition', title: 'The Exhibition Poster', image: '/images/exhibition/feature-exhibition-poster.webp', category: ['Poster Design', 'Graphic Design'] },
        { id: 5, slug: 'aether', title: 'Aether Mobile App', image: '/images/aether/feature-aether.jpg', category: ['Case Study', 'UI/UX Design', 'Front–end Development'] },
        { id: 6, slug: 'the-yolk', title: 'The Yolk Menu', image: '/images/yolk/menu-cover.webp', category: ['Menu Design', 'Branding', 'Graphic Design'] },
    ];

    const filteredPosts = filter === 'All' ? posts : posts.filter(post => post.category.includes(filter));

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
        setVisiblePosts(filteredPosts);
    }, [filter]);

    useEffect(() => {
        setTimeout(() => {
            setHasLoaded(true);
        }, 250);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="bg-white text-[#1A428A] min-h-screen font-poppins pt-16">
            <div className="font-poppins flex flex-col items-center justify-center">
                {!hasLoaded && (
                    <div className="loadingOverlay">
                        <LoadingAnimation />
                    </div>
                )}
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                <FadeIn>
                    <main className="w-full max-w-4xl p-4 flex flex-col items-center">
                        <h1 className="text-[#1A428A] text-6xl lg:text-7xl md:text-6xl font-semibold text-center font-[Syne] my-6">Work</h1>

                        <div className="bg-[#E4E0E5] text-lg flex flex-wrap justify-center gap-2 mt-4 p-3 rounded-3xl">
                            {['All', 'Graphic Design', 'UI/UX Design', 'Front–end Development'].map((category) => (
                                <button
                                    key={category}
                                    className={`${styles.filterButton} ${filter === category ? styles.active : styles.inactive}`}
                                    onClick={() => setFilter(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full px-2 mb-20">
                            {visiblePosts.length ? (
                                visiblePosts.map((post, index) => (
                                    <Link href={`/work/${post.slug}`} key={post.id}>
                                        <motion.div
                                            className={`${styles['postCard']} relative w-full overflow-hidden shadow-lg`}
                                            initial={hasLoaded ? { opacity: 0, scale: 0 } : false}
                                            animate={hasLoaded ? { opacity: 1, scale: 1 } : false}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                                ease: 'easeOut',
                                            }}
                                            key={`${post.id}-${animationKey}`}
                                        >
                                            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" loading="lazy" quality={80} />

                                            <motion.div
                                                className="postContent absolute inset-0 bg-[#AAAC24] bg-opacity-100 pt-6 flex flex-col items-center justify-center opacity-0 hover:opacity-100 sm:opacity-0 sm:display-none transition-opacity"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <span className="font-[Syne] text-white text-2xl font-bold post-title">{post.title}</span>

                                                <div className="text-white text-md postCategory p-12 pt-0 text-center">
                                                    {Array.isArray(post.category)
                                                        ? post.category.map((category, idx) => (
                                                            <span key={idx}>
                                                                {category}
                                                                {idx < post.category.length - 1 && ' | '}
                                                            </span>
                                                        ))
                                                        : <span>{post.category}</span>
                                                    }
                                                </div>
                                            </motion.div>
                                        </motion.div>

                                        <div className="postTextContainer sm:hidden p-0 pb-4">
                                            <h2 className="text-[#1A428A] text-2xl font-semibold">{post.title}</h2>
                                            <div className="text-[#1A428A] text-md ">
                                                {post.category.join(' | ')}
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-gray-500">No items found.</p>
                            )}
                        </div>
                    </main>
                </FadeIn>
            </div>

            <FadeIn>
                <Footer />
            </FadeIn>
        </div>
    );
}