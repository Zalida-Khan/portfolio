"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { EyeIcon } from "@heroicons/react/24/outline";

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
    <div className="relative h-[calc(75vh)]">
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
      <main className="container lg:pt-20 sm:pb-5 lg:pr-0 p-22 sm:pt-16 p-4 md:p-0 md:pt-0 text-left md:pl-10 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
          <div className="lg:col-span-3">
            <h1 className="text-[#000] text-3xl md:text-4xl lg:text-4xl lg:pt-20 md:text-3xl md:pt-20 md:pl-20 font-light font-poppins">
              Hello there! I'm
            </h1>
            <p className="p-roles lg:text-5xl mt-4 md:text-3xl md:pl-20 md:text-5xl md:text-3xl">
              <span className="text-[#000] font-semibold">
                <Typewriter
                  words={[
                    "a Graphic Designer!",
                    "a UI/UX Designer!",
                    "a Frontend Developer!",
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

          <div className="lg:col-span-1 md:pl-20  flex justify-start items-center">
            <Image
              src="/images/giphy.gif"
              alt="GIF"
              width={200}
              height={200}
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority unoptimized
            />
          </div>

          <div className="lg:col-span-2  pl-0 pr-0 lg:pt-20 md:pl-20 md:pr-20 md:pb-20 md:pt-6 lg:pr-0 lg:pt-10 pt-10 flex flex-col items-left">
            <div className="mb-4 flex justify-center">
              <EyeIcon className="w-10 h-10 text-black mr-10" />
            </div>
            <h2 className="text-xl font-bold font-syne text-[#000] mb-2">With a sharp eye for detail!</h2>
            <p className="text-md text-left font-poppins font-light text-[#000] mb-4">
              Bringing creative designs to life, crafting intuitive UX/UI, and building seamless front-end experiences.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}