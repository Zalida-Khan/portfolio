"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Typewriter } from "react-simple-typewriter";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Gradient() {
  const gradientRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  const gradientConfig = {
    colors: [
      { color: "#1A428A", enabled: true },
      { color: "#AAAC24", enabled: true },
      { color: "#3B82F6", enabled: true },
      { color: "#d7de8e", enabled: true },
      { color: "#f5e1e5", enabled: false },
    ],
    speed: 3,
    horizontalPressure: 4,
    verticalPressure: 5,
    waveFrequencyX: 2,
    waveFrequencyY: 3,
    waveAmplitude: 5,
    shadows: 0,
    highlights: 2,
    saturation: 5,
    wireframe: false,
    colorBlending: 6,
    backgroundColor: "rgba(251,250,241,0.97)",
    backgroundAlpha: 1,
  };

  useEffect(() => {
    if (!gradientRef.current) return;
    let instance;
    import("@firecms/neat").then(({ NeatGradient }) => {
      instance = new NeatGradient({ ref: gradientRef.current, ...gradientConfig });
    });
    return () => {
      if (instance?.destroy) instance.destroy();
    };
  }, []);

  useEffect(() => {
    fetch("/Scene.json")
      .then((r) => r.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="relative flex items-center"
      style={{
        background: "rgba(251,250,241,0.97)",
        minHeight: "calc(100vh - 80px)",
        paddingTop: "80px",
      }}
    >
      {/* Gradient canvas */}
      <canvas
        ref={gradientRef}
        className="absolute inset-0 w-full h-full opacity-90"
        aria-hidden="true"
      />

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT: Text */}
          <div className="lg:col-span-8 flex flex-col items-start">

            {/* Badge */}
            <div
              className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
              aria-label="Currently available for projects"
            >
              <span className="w-2 h-2 rounded-sm bg-[#AAAC24] animate-pulse" aria-hidden="true" />
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase font-poppins">
                Available for projects
              </span>
            </div>

            <p className="text-white/65 text-lg sm:text-xl font-light font-poppins mb-1">
              Hello there! I&apos;m
            </p>

            {/* Typewriter */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold font-syne text-white leading-tight mb-4"
              style={{ minHeight: "1.2em" }}
              aria-label="Zalida Khan — multi-disciplinary designer and front-end developer"
            >
              <Typewriter
                words={["Zalida Khan.", "a multi-disciplinary designer!", "a front-end developer!"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={45}
                delaySpeed={1800}
              />
            </h1>

            <h2 className="text-base sm:text-lg font-bold font-syne text-white mb-2">
              Designing and coding with clarity!
            </h2>

            <p className="text-white/80 text-sm sm:text-base font-light font-poppins max-w-xl leading-relaxed mb-6">
              I work across branding, logos, and UI/UX, and build websites with
              front-end development — keeping everything simple, intentional, and practical.
            </p>

            {/* CTAs — always above fold */}
            <div className="flex flex-wrap gap-3" role="group" aria-label="Call to action links">
              <a
                  href="/work"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-[#99A51A] bg-[#99A51A] text-white font-semibold font-poppins text-sm tracking-wide shadow-md transition-all duration-300 hover:border-white hover:bg-white/60 hover:text-[#1A428A] hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#AAAC24] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  aria-label="View my work portfolio"
                >
                View My Work
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="mailto:zalidakhan13@gmail.com?subject=Let's Connect"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-[#1a428a] text-[#1a428a] font-semibold font-poppins text-sm tracking-wide backdrop-blur-sm bg-white/5 transition-all duration-300 hover:border-[#1a428a] hover:bg-[#1a428a]/60 hover:text-white hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label="Send Zalida an email"
              >
                Get in Touch
              </a>
            </div>

            {/* spacer for layout on mobile */}
            <div className="block lg:hidden" aria-hidden="true" />
          </div>

          {/* RIGHT: Lottie face (own column) */}
          <div className="lg:col-span-4 flex justify-center items-center mt-6 lg:mt-0" aria-hidden="true">
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-xl blur-3xl opacity-20 scale-75 transition-all duration-700 group-hover:scale-90 group-hover:opacity-30"
                style={{ background: "radial-gradient(circle, rgba(26,66,138,0.25) 0%, transparent 70%)" }}
              />
              {animationData && (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: 300, height: 300 }}
                />
              )}
            </div>
          </div>
          </div>
</main>
    </section>
  );
}