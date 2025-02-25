"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

const NeatGradient = dynamic(() => import("@firecms/neat").then(mod => mod.NeatGradient), { ssr: false });

export default function GradientComponent() {
  const gradientRef = useRef(null);

  const config = {
    colors: [
      { color: "#FF5373", enabled: true },
      { color: "#FFC858", enabled: true },
      { color: "#17E7FF", enabled: true },
      { color: "#6D3BFF", enabled: true },
      { color: "#f5e1e5", enabled: false },
    ],
    speed: 4,
    horizontalPressure: 4,
    verticalPressure: 5,
    waveFrequencyX: 2,
    waveFrequencyY: 3,
    waveAmplitude: 5,
    shadows: 0,
    highlights: 2,
    saturation: 7,
    wireframe: false,
    colorBlending: 6,
    backgroundColor: "#003FFF",
    backgroundAlpha: 1,
  };

  useEffect(() => {
    if (gradientRef.current) {
      const neat = new NeatGradient({
        ref: gradientRef.current,
        ...config,
      });

      return () => {
        gradientRef.current = null;
      };
    }
  }, []);

  return (
    <div className="relative h-[calc(80dvh)]">
      <div
        ref={gradientRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      <main className="container px-4 sm:px-8 lg:px-16 py-10 md:py-12 lg:py-20 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:pt-10">
          <div className="lg:col-span-3 flex flex-col justify-center  md:pl-10 lg:pl-20 items-start">
            <h1 className="text-[#000] text-3xl sm:text-4xl lg:text-4xl font-light font-poppins mt-4 lg:mt-14">
              Hello there! I'm
            </h1>
            <p className="p-roles lg:text-5xl mt-1 md:mt-4 lg:mt-4 md:text-4xl font-semibold">
              <span className="text-[#000] font-semibold">
                <Typewriter
                  words={[
                    "Zalida Khan.",
                    "a graphic designer!",
                    "a UI/UX designer!",
                    "a front-end developer!",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>

          <div className="lg:col-span-1 flex justify-center items-center">
            <Image
              src="/images/giphy.gif"
              alt="GIF"
              width={200}
              height={200}
              className="rounded-lg"
              sizes="(max-width: 768px) 80vw, 40vw"
              priority
              unoptimized
            />
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center items-start md:pl-10 lg:pl-10 pr-10 lg:pr-0 lg:pt-10 pt-10">
            <h2 className="text-xl lg:text-2xl font-bold font-syne text-[#000] mb-4">
              With a sharp eye for detail!
            </h2>
            <p className="text-md text-left font-poppins font-light text-[#000] mb-4">
              Bringing creative designs to life, creating user-centered UI/UX, and building seamless front-end experiences.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
