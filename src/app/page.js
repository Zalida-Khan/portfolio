"use client";

import FadeIn from "./components/fadeIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GradientComponent from "./components/gradient";
import ProjectsSection from "./components/projects";

export default function Home() {
  return (
    <div className="bg-white text-[#1A428A] min-h-screen pt-20 font-poppins">
      <div className="header-gradient relative">
        <Header />
        <div className="mesh-gradient absolute left-0 right-0 bottom-0 z-0"></div>
        <GradientComponent />
        <FadeIn>

          <ProjectsSection/>

        </FadeIn>

      </div>
      <Footer />
    </div>
  );
}