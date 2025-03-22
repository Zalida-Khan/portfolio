"use client";

import { useState, useEffect } from 'react';
import FadeIn from "../components/all-pages/fadeIn";
import Header from "../components/all-pages/Header";
import Footer from "../components/all-pages/Footer";
import LoadingAnimation from "../components/all-pages/Loading";
// import Journal from "../components/flipBook";

const SkillItem = ({ imgSrc, altText, skillName }) => (
    <div className="skillItem text-center">
        <img src={imgSrc} alt={altText} className="w-15 h-14 mx-auto" />
        <p className="text-gray-600">{skillName}</p>
    </div>
);

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setHasLoaded(true);
        }, 250);
    }, []);

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
                 <main className="w-full max-w-5xl px-6 sm:px-8 md:px-6 lg:px-14 flex flex-col items-center mb-20">
                        <h1 className="text-[#1A428A] text-3xl lg:text-5xl md:text-4xl font-semibold text-center font-[Syne] mt-10">
                            Get to Know Me Better!
                        </h1>

                    <section className="text-left sm:p-5 pb-5 md:p-6 md:pb-2 lg:pb-5 lg:p-10 pt-0">
                            <div className="flex mt-4 md:mt-2 lg:mt-2 flex-col items-center">
                                <img
                                    src="/images/about/me2.png"
                                    alt="A photo of me"
                                    className="object-cover mb-4 rounded-3xl"
                                />
                            </div>

                            <div className="flex flex-col items-start max-w-5xl mx-auto">
                             <div className="mt-4 flex flex-col items-start max-w-5xl mx-auto sm:p-5 md:pt-6 md:p-0 lg:p-6 lg:pt-0 rounded-2xl">
                                    <h3 className="text-2xl md:text-3xl text-left text-[#1A428A] font-semibold">
                                        Hey there, I'm Zalida! 👋
                                    </h3>
                                    <p className="mt-3 text-md md:text-lg leading-relaxed text-gray-800">
                                        I’m a design student at the British Columbia Institute of Technology, with a passion for creating user-focused digital experiences. My areas of expertise include <strong>graphic design, UI/UX design, and front-end development</strong>.
                                    </p>
                            </div>
                            </div>
                        </section>
                        {/* <section className='flex flex-col mt-2 mb-5 lg:mt-0 md:mt-0 sm:mt-2'> */}
                            {/* <h3 className="text-2xl text-center md:text-3xl font-semibold text-[#1A428A] flex flex-col mb-6">Learn More About Me!</h3> */}
                            {/* <Journal /> */}
                        {/* </section> */}

                        <section className="skillSection py-8 w-full max-w-5xl pt-4 p-6 mb-6">
                            <h2 className="text-3xl text-center text-[#1A428A] font-semibold mb-6">
                                My Skills & Technologies
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <SkillItem imgSrc="/images/about/html.png" altText="HTML" skillName="HTML5" />
                                <SkillItem imgSrc="/images/about/css.png" altText="CSS" skillName="CSS3" />
                                <SkillItem imgSrc="/images/about/js.webp" altText="JavaScript" skillName="JavaScript" />
                                <SkillItem imgSrc="/images/about/react.png" altText="React" skillName="React" />
                                <SkillItem imgSrc="/images/about/next-js.svg" altText="Next.js" skillName="Next.JS" />
                                <SkillItem imgSrc="/images/about/vite.png" altText="Vite" skillName="Vite" />
                                <SkillItem imgSrc="/images/about/tailwindcss.png" altText="TailwindCSS" skillName="TailwindCSS" />
                                <SkillItem imgSrc="/images/about/npm.webp" altText="NPM" skillName="NPM" />
                                <SkillItem imgSrc="/images/about/github.png" altText="GitHub" skillName="GitHub" />
                                <SkillItem imgSrc="/images/about/git.png" altText="Git" skillName="Git" />
                                <SkillItem imgSrc="/images/about/vercel.svg" altText="Vercel" skillName="Vercel" />
                                <SkillItem imgSrc="/images/about/wordpress.png" altText="WordPress" skillName="WordPress" />
                                <SkillItem imgSrc="/images/about/google-cloud.png" altText="Google Cloud" skillName="Google Cloud" />
                                <SkillItem imgSrc="/images/about/google-maps.png" altText="Google Maps API" skillName="Google Maps API" />
                                <SkillItem imgSrc="/images/about/figma.png" altText="Figma" skillName="Figma" />
                                <SkillItem imgSrc="/images/about/adobe-creative.png" altText="Adobe Creative Cloud" skillName="Creative Cloud" />
                                <SkillItem imgSrc="/images/about/indesign.png" altText="Adobe InDesign" skillName="InDesign" />
                                <SkillItem imgSrc="/images/about/illustrator.png" altText="Adobe Illustrator" skillName="Illustrator" />
                                <SkillItem imgSrc="/images/about/photoshop.png" altText="Adobe Photoshop" skillName="Photoshop" />
                                <SkillItem imgSrc="/images/about/adobe-express.png" altText="Adobe Express" skillName="Express" />
                            </div>
                        </section>

                        <section className="text-center py-8 max-w-5xl mx-auto pt-4 p-6 mb-8">
                            <p className="text-2xl mb-6 lg:text-3xl">Got a project in mind? Or just want to say hello? Let’s connect!</p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/zalida-khan"
                                className="px-6 py-4 text-md rounded-full mt-4 inline-block bg-[#AAAC24] text-white font-normal hover:bg-[#1A428A] hover:text-[#ffffff] transition-all duration-300 ease-in-out"
                            >
                                Let's Connect!
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