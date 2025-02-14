"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Sugar Magic",
        category: "Can Design – Product Design",
        image: "/images/sugarmagic-animated.mp4",
        link: "/work/sugar-magic",
    },
    {
        title: "Arquitectura Organica",
        category: "Magazine Design – Product Design",
        image: "/images/feature-magazine.jpg",
        link: "/work/arquitectura-organica",
    },
    {
        title: "The Exhibition",
        category: "Poster Design – Graphic Design",
        image: "/images/feature-exhibition-poster.jpg",
        link: "/work/the-exhibition",
    },
    {
        title: "The Yolk",
        category: "Menu Design – Product Design",
        image: "/images/feature-theyolk-menu.jpg",
        link: "/work/the-yolk",
    },
];

export default function ProjectsSection() {
    const [inViewButtons, setInViewButtons] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        setIsClient(true);

        if (isClient) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    const button = entry.target;
                    const buttonIndex = button.dataset.index;
                    
                    const isScrollingDown = window.scrollY > lastScrollY.current;
                    lastScrollY.current = window.scrollY;

                    if (entry.isIntersecting && isScrollingDown) {
                        setInViewButtons((prev) => [...prev, buttonIndex]);
                    } else {
                        setInViewButtons((prev) => prev.filter((index) => index !== buttonIndex));
                    }
                },
                { threshold: 0.2 }
            );

            const projectButtons = document.querySelectorAll(".project-button");
            projectButtons.forEach((btn, index) => {
                btn.setAttribute('data-index', index);
                observer.observe(btn);
            });

            return () => {
                projectButtons.forEach((btn) => observer.unobserve(btn));
            };
        }
    }, [isClient]);

    return (
        <section className="relative container mx-auto py-4 px-4 md:px-6 lg:pl-20 lg:pr-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="lg:col-span-1 lg:pr-6 flex flex-col justify-right">
                    <h2 className="mt-8 text-4xl font-bold text-[#1A3A7A]">Projects</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                        Ranging from brand design, product design to frontend development and web design.
                    </p>
                    <div className="mt-4 text-right">
                        <Link href="/work" className="relative text-[#1A428A] text-lg font-semibold">
                            <span className="relative z-10">View All &gt;</span>
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#AAAC24] transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out mt-1"></span>
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-1 grid grid-cols-1 gap-14 lg:gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="p-0 lg:pb-10 relative rounded-3xl overflow-hidden">
                            <div className="relative w-full h-72 lg:h-96 rounded-3xl overflow-hidden">
                                {project.image.endsWith(".mp4") ? (
                                    <video autoPlay loop muted className="w-full h-full object-cover">
                                        <source src={project.image} type="video/mp4" />
                                    </video>
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{ objectFit: "cover", loading: "lazy" }}
                                    />
                                )}
                            </div>

                            <p className="mt-4 text-black font-medium">{project.category}</p>
                            <div className="flex justify-between items-center mt-3">
                                <h3 className="text-3xl font-semibold text-[#1A3A7A]">{project.title}</h3>
                                <Link href={project.link}>
                                    <button
                                        className={`project-button px-6 py-3 lg:px-7 lg:py-2 lg:font-light lg:text-lg text-white bg-[#AAAC24] rounded-3xl text-sm font-semibold hover:bg-[#1A428A] hover:text-white transition-all duration-300 ease-in-out ${inViewButtons.includes(String(index)) ? "animate-fadeIn" : ""}`}
                                        data-index={index} 
                                        style={{
                                            animationDelay: `${index * 0.0}s`, 
                                        }}
                                    >
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}