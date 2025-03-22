import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const SliderSwitcher = () => {
  const items = [
    { image: "/images/aether/low-fi frames.jpg", alt: "low-fi wireframe" },
    { image: "/images/aether/mid-fi frames.jpg", alt: "mid-fi wireframe" },
    { image: "/images/aether/hi-fi frames.jpg", alt: "hi-fi wireframe" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  const goToPrevious = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);

  if (!items || items.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="relative">
      <img
        src={items[currentIndex].image}
        alt={items[currentIndex].alt}
        className="w-full h-[360px] rounded-2xl object-cover mb-6"
      />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#AAAC24] text-white p-2 rounded-full"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#AAAC24] text-white p-2 rounded-full"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SliderSwitcher;