"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FadeIn from '../components/fadeIn';
import { motion } from 'framer-motion';
import styles from './Work.module.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Work() {
    const [filter, setFilter] = useState('All');
    const [menuOpen, setMenuOpen] = useState(false);
    const [visiblePosts, setVisiblePosts] = useState([]);
    const [animationKey, setAnimationKey] = useState(0);
    const [hasLoaded, setHasLoaded] = useState(false);

    const posts = [
        { id: 1, slug: 'arquitectura-organica', title: 'Arquitectura Organica', image: '/images/feature-magazine.jpg', category: ['Graphic Design', 'Magazine Design'] },
        { id: 2, slug: 'sugar-magic', title: 'Sugar Magic', video: '/images/sugarmagic-animated.mp4', category: ['Graphic Design', 'Product Design'] },
        { id: 3, slug: 'the-waterfall', title: 'The Waterfall', image: '/images/feature-bi-poster.jpg', category: ['Graphic Design', 'Poster Design'] },
        { id: 4, slug: 'the-exhibition', title: 'The Exhibition', image: '/images/feature-exhibition-poster.jpg', category: ['Graphic Design', 'Poster Design'] },
        { id: 5, slug: 'aether', title: 'Aether App', image: '/images/feature-aether.jpg', category: ['UI/UX Design', 'Front–end Development', 'Mobile App'] },
        { id: 6, slug: 'the-yolk', title: 'The Yolk', image: '/images/feature-theyolk-menu.jpg', category: ['Graphic Design', 'Menu Design', 'Branding'] },
    ];

    const filteredPosts = filter === 'All' ? posts : posts.filter(post => post.category.includes(filter));

    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
        setVisiblePosts(filteredPosts);
    }, [filter]);

    useEffect(() => {
        setTimeout(() => {
            setHasLoaded(true);
        }, 800);
    }, []);

    return (
        <div className="bg-white text-[#1A428A] min-h-screen font-poppins pt-16">
            <div className="font-poppins flex flex-col items-center">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                <FadeIn>
                    <main className="w-full max-w-4xl p-4 flex flex-col items-center">
                        <h1 className="text-[#1A428A] text-6xl lg:text-7xl md:text-6xl font-semibold text-center font-[Syne] my-6">Work</h1>

                        <div className="container-cat flex flex-wrap justify-center gap-2 mt-4 p-3 bg-gray-200 rounded-3xl">
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full px-2">
                            {visiblePosts.length ? (
                                visiblePosts.map((post, index) => (
                                    <Link href={`/work/${post.slug}`} key={post.id}>
                                        <motion.div
                                            className={`${styles['post-card']} relative w-full rounded-3xl overflow-hidden shadow-lg`}
                                            initial={hasLoaded ? { opacity: 0, scale: 0 } : false}
                                            animate={hasLoaded ? { opacity: 1, scale: 1 } : false}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                                ease: 'easeOut',
                                            }}
                                            key={`${post.id}-${animationKey}`}
                                        >
                                            {post.video ? (
                                                <video
                                                className="w-full h-64 object-cover"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                preload="auto"
                                                src={post.video}
                                                alt={post.title}
                                                controls={false}
                                                />
                                            ) : (
                                                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" loading="lazy" />
                                            )}

                                            <motion.div
                                                className="absolute inset-0 bg-[#AAAC24] bg-opacity-100 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity post-content"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <span className="font-[Syne] text-white text-2xl font-bold post-title">{post.title}</span>

                                                <div className="text-white text-md post-category p-12 pt-0 text-center">
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