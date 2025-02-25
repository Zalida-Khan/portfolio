import { useState } from "react";

const SliderSwitcher = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  const goToPrevious = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);

  return (
    <div className="relative">
      <img
        src={items[currentIndex].image}
        alt={items[currentIndex].alt}
        className="w-full h-auto rounded-2xl object-cover"
      />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#AAAC24] text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#AAAC24] text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default SliderSwitcher;


// const sliderItems = [
//     {
//       image: post.gallery[0],
//       alt: "Primary Persona Image",
//     },
//     {
//       image: post.gallery[1],
//       alt: "Secondary Persona Image",
//     },
//   ];
  