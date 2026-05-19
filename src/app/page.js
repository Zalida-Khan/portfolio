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
    const timer = setTimeout(() => setIsLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    // removed pt-20 — header is fixed so page content should start at top
    <div className="bg-white text-[#1A428A] min-h-screen font-poppins">
      <div className="relative">
        <Header />

        <div id="main-content">
          {/* Hero gets its own top padding to clear the fixed header (80px) */}
          <Gradient />
          <FadeIn>
            <ProjectsSection />
          </FadeIn>
        </div>

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