"use client";

import { useState, useEffect } from 'react';
import FadeIn from '../components/fadeIn';
// import { motion } from 'framer-motion';
// import styles from './About.module.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHasLoaded(true);
        }, 800);
    }, []);

    return (
        <div className="bg-white text-[#1A428A] min-h-screen font-poppins pt-16">
            <div className="font-poppins flex flex-col items-center">
                <Header />

                <FadeIn>
                    <main className="w-full max-w-4xl px-6 sm:px-8 md:px-12 flex flex-col items-center">
                        <h1 className="text-[#1A428A] text-5xl md:text-6xl font-semibold text-center font-[Syne] my-6">About Me</h1>

                        <section className=" text-center py-8 p-10  mb-8">
                            <div className="mt-6 flex flex-col items-center">
                                <img
                                    src="/images/me2.png"
                                    alt="Melissa"
                                    className=" object-cover mb-4 rounded-3xl"

                                />
                                <p className="mt-4 text-lg max-w-3xl mx-auto">
                                    Hi, I'm Zalida, a design student passionate about creating user-centered digital experiences.
                                    I specialize in UI/UX design, typography, and digital tools for improved functionality. In my free time,
                                    I love experimenting with new design concepts and learning more about emerging technologies.
                                </p>
                            </div>
                        </section>

                        <section className="skills-section py-8 w-full max-w-4xl p-10 mb-8">
                            <h2 className="text-3xl text-center text-[#1A428A] font-semibold mb-4">Skills & Technologies</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                <div className="skill-item text-center">
                                    <img src="/images/github.png" alt="Github" className="pt-3 w-13 h-14 mx-auto" />
                                    <p className="text-gray-600 mt-2">GitHub</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/html.png" alt="HTML" className=" pt-2 w-14 h-15 mx-auto" />
                                    <p className="text-gray-600 mt-1">HTML</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/css.png" alt="CSS" className=" pt-1 w-14 h-15 mx-auto" />
                                    <p className="text-gray-600 mt-1">CSS</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/js.webp" alt="JavaScript" className="w-16 h-16 mx-auto" />
                                    <p className="text-gray-600 mt-0">JavaScript</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/vite.png" alt="React" className="pt-1 w-13 h-14 mx-auto" />
                                    <p className="text-gray-600 mt-2">Vite</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/tailwindcss.png" alt="TailwindCSS" className=" pt-1 w-14 h-16 mx-auto" />
                                    <p className="text-gray-600 mt-1">TailwindCSS</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/google-cloud.png" alt="Google Cloud" className="w-15 h-14 mx-auto" />
                                    <p className="text-gray-600 mt-0">Google Cloud</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/wordpress.png" alt="Wordpress" className="w-14 h-14 mx-auto" />
                                    <p className="text-gray-600 mt-0">Wordpress</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/figma.png" alt="Figma" className="w-12 h-12 mx-auto" />
                                    <p className="text-gray-600 mt-2">Figma</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/indesign.png" alt="Indesign" className="w-12 h-12 mx-auto" />
                                    <p className="text-gray-600 mt-2">Indesign</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/illustrator.png" alt="Illustrator" className="w-12 h-12 mx-auto" />
                                    <p className="text-gray-600 mt-2">Illustrator</p>
                                </div>
                                <div className="skill-item text-center">
                                    <img src="/images/photoshop.png" alt="Photoshop" className="w-12 h-12 mx-auto" />
                                    <p className="text-gray-600 mt-2">Photoshop</p>
                                </div>
                            </div>
                        </section>

                        <section className=" text-center py-8 p-10 mb-8">
                            <p className="mt-4 lg:mr-10 lg:ml-10 md:mr-10 md:ml-10  text-2xl">Have a project in mind? Or you want to say hello, get in touch with me.</p>
                            <a
                                href="mailto:your-email@example.com"
                                className="px-6 py-2 rounded-full mt-4 inline-block bg-[#AAAC24] text-white hover:bg-[#1A428A] hover:text-[#ffffff]"
                            >
                                Contact Me
                            </a>
                        </section>
                    </main>
                </FadeIn>
            </div>

            <FadeIn>
                <Footer />
            </FadeIn>
        </div>
    );
}
