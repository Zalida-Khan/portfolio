"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Typewriter } from "react-simple-typewriter";

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
const NeatGradient = dynamic(() => import("@firecms/neat").then(mod => mod.NeatGradient), { ssr: false });

export default function Gradient() {
  const gradientRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  const gradientConfig = {
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
      new NeatGradient({
        ref: gradientRef.current,
        ...gradientConfig,
      });
    }
  }, []);

  useEffect(() => {
    fetch('/Scene.json')
    .then(response => response.json())
    .then(setAnimationData)
    .catch(console.error);
}, []);

  return (
    <div className="relative h-[calc(700px)] md:h-[calc(650px)]">
      <div ref={gradientRef} className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" />
      <main className="containerGradients px-4 sm:px-8 lg:px-16 py-10 md:py-12 lg:py-20 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:pt-12">
          <div className="lg:col-span-3 flex flex-col justify-center md:pl-0 lg:pl-10 items-start">
            <h1 className="text-[#000] text-3xl sm:text-4xl lg:text-[2.4rem] font-light font-poppins mt-4 lg:mt-20">
              Hello there! I'm
            </h1>
            <p className="myRoles lg:text-[3.6rem] mt-1 md:mt-4 lg:mt-4 md:text-4xl font-semibold mb-4">
              <span className="text-[#000] font-semibold leading-none">
                <Typewriter
                  words={["Zalida Khan.", "a multi-disciplinary designer!", "a front-end developer!"]}
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

          <div className="lg:col-span-1 flex justify-center items-center lg:mt-10 lg:pt-14 mb-4 pointer-events-none cursor-default">
            <Lottie options={{ animationData, loop: true, autoplay: true, rendererSettings: { preserveAspectRatio: "xMidYMid slice" } }} style={{ width: 200, height: 150 }} />
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center items-start md:pl-0 lg:pl-10 pr-10 lg:pr-10 lg:mt-12 lg:pt-10">
            <h2 className="text-xl lg:text-2xl font-bold font-syne text-[#000] mb-4">Designing and coding with clarity!</h2>
            <p className="text-md text-left font-poppins font-light text-[#000] mb-4">
              I work across branding, logos, and UI/UX, and I also build websites with front-end development. I make sure my designs are simple and practical.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
