"use client";

import { useEffect, useState } from "react";
import FadeIn from "./components/fadeIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GradientComponent from "./components/gradient";
import ProjectsSection from "./components/projects";
import LoadingSpinner from "./components/Loading";

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

        <GradientComponent />
        <FadeIn>
          <ProjectsSection />
        </FadeIn>

        <Footer />

        {!isLoaded && (
          <div className="loadingOverlay">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
}
