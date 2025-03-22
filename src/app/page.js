"use client";

import { useEffect, useState } from "react";
import FadeIn from "./components/all-pages/fadeIn";
import Header from "./components/all-pages/Header";
import Footer from "./components/all-pages/Footer";
import Gradient from "./components/home/Gradient";
import ProjectsSection from "./components/home/Projects";
import LoadingAnimation from "./components/all-pages/Loading";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-[#1A428A] min-h-screen pt-20 font-poppins">
      <div className="relative">
        <Header />
        <div className="meshGradient absolute left-0 right-0 bottom-0 z-0"></div>

        <Gradient />
        <FadeIn>
          <ProjectsSection />
        </FadeIn>

        <Footer />

        {!isLoaded && (
          <div className="loadingOverlay">
            <LoadingAnimation />
          </div>
        )}
      </div>
    </div>
  );
}