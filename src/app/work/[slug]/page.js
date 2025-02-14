"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MagazineDesign from "../projects/arguitectura-organica";
import ProductDesign from "../projects/sugar-magic";
import PosterDesign from "../projects/the-waterfall";
import PosterDesignTE from "../projects/the-exhibition";
import CaseStudy from "../projects/aether";
import MenuDesign from "../projects/the-yolk";
import posts from "./posts";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function PostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const foundPost = posts.find((p) => p.slug === slug);
        setPost(foundPost || null);
    }, [slug]);

    if (!post) {
        return <div>Post not found.</div>;
    }

    const openModal = (index) => {
        setModalImageIndex(index);
        setIsModalOpen(true);
    };

    const goToNext = () => {
        const currentIndex = posts.findIndex((p) => p.slug === slug);
        if (currentIndex < posts.length - 1) {
            router.push(`/work/${posts[currentIndex + 1].slug}`);
        }
    };

    const goToPrevious = () => {
        const currentIndex = posts.findIndex((p) => p.slug === slug);
        if (currentIndex > 0) {
            router.push(`/work/${posts[currentIndex - 1].slug}`);
        }
    };

    const renderProject = (post) => {
        switch (post.projectType) {
            case 'Magazine Design':
                return <MagazineDesign post={post} openModal={openModal} />;
            case 'Product Design':
                return <ProductDesign post={post} openModal={openModal} />;
            case 'Poster Design':
                return <PosterDesign post={post} openModal={openModal} />;
            case 'Poster Design':
                return <PosterDesignTE post={post} openModal={openModal} />;
            case 'Case Study':
                return <CaseStudy post={post} openModal={openModal} />;
            case 'Menu Design':
                return <MenuDesign post={post} openModal={openModal} />;
            default:
                return null;
        }
    };

    const currentIndex = posts.findIndex((p) => p.slug === slug);
    const nextPost = posts[currentIndex + 1];
    const previousPost = posts[currentIndex - 1];

    return (
        <div className="bg-white text-[#1A428A] min-h-screen font-poppins mt-40">
            <Header />
            <h1 className="text-4xl lg:text-5xl font-semibold text-[#1A428A] text-center">{post.title}</h1>
            <p className="text-center text-[#000] p-3 pb-10 pt-2 text-center">
                {Array.isArray(post.category)
                    ? post.category.map((category, idx) => (
                        <span key={idx}>
                            {category}
                            {idx < post.category.length - 1 && ' | '}
                        </span>
                    ))
                    : <span>{post.category}</span>
                }
            </p>

            <main className="max-w-4xl mx-auto p-6 bg-[#efefef] rounded-3xl shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <ul className="text-[#1A428A] flex flex-col space-y-5">
                        <li className="text-[#1A428A] font-normal "><strong className="text-lg md:text-xl font-normal">Project Type: </strong><br /><span className="text-[#000] text-sm md:text-md">{post.projectType}</span></li>
                        <li className="text-[#1A428A] font-normal"><strong className="text-lg md:text-xl font-normal" >Timeline: </strong><br /><span className="text-[#000] text-sm md:text-md">{post.timeline}</span></li>
                        <li className="text-[#1A428A] font-normal"><strong className="text-lg md:text-xl font-normal">Role(s): </strong><br /><span className="text-[#000] text-sm md:text-md">{post.role}</span></li>
                    </ul>
                    <ul className="text-[#1A428A] flex flex-col space-y-5  lg:col-span-2">
                        <li className="text-[#1A428A] font-normal"><strong className="text-lg md:text-xl font-normal">Tools Used: </strong><br /><span className="text-[#000] text-sm md:text-md">{post.tools}</span></li>
                        <li className="text-[#1A428A] font-normal"><strong className="text-lg md:text-xl font-normal">Mandate: </strong><br /><span className="text-[#000] text-sm md:text-md">{post.mandate}</span></li>
                        <ul className="text-[#1A428A] cursor-hand flex flex-row space-x-4 lg:col-span-2">
                            {post.links && (
                                <li>
                                    <a
                                        className="text-[#AAAC24] hover:text-[#1A428A] text-md flex items-center"
                                        href={post.links}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        🔗 Digital Version <AiOutlineRight />
                                    </a>
                                </li>
                            )}
                            {post.links1 && (
                                <li>
                                    <a
                                        className="text-[#AAAC24] hover:text-[#1A428A] text-md flex items-center"
                                        href={post.links1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Blog <AiOutlineRight />
                                    </a>
                                </li>
                            )}
                            {post.links2 && (
                                <li>
                                    <a
                                        className="text-[#AAAC24] hover:text-[#1A428A] text-md flex items-center"
                                        href={post.links2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Styleguide <AiOutlineRight />
                                    </a>
                                </li>
                            )}
                            {post.links3 && (
                                <li>
                                    <a
                                        className="text-[#AAAC24] hover:text-[#1A428A] text-md flex items-center"
                                        href={post.links3}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Hi-fi Prototype <AiOutlineRight />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </ul>
                </div>
                <img src={post.image} alt={post.title} className="w-full h-auto rounded-xl shadow-lg mt-8" />
                <h2 className="mt-8 text-[#1A428A] text-2xl font-semibold">{post.heading}</h2>
                <p className="text-[#000] text-md mt-2">{post.overview}</p>

                {renderProject(post)}
                <div className="flex justify-between items-center mt-6">
                    <button
                        onClick={goToPrevious}
                        disabled={currentIndex === 0}
                        className="text-black hover:text-[#AAAC24] bg-transparent disabled:text-gray-400 flex items-center gap-2"
                    >
                        <AiOutlineLeft />
                        {previousPost ? `Back: ${previousPost.title}` : 'Back'}
                    </button>

                    <button
                        onClick={goToNext}
                        disabled={currentIndex === posts.length - 1}
                        className="text-black hover:text-[#AAAC24] bg-transparent disabled:text-gray-400 flex items-center gap-2"
                    >
                        {nextPost ? `Next: ${nextPost.title}` : 'Next'}
                        <AiOutlineRight />
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default PostPage;