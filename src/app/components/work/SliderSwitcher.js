import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SliderSwitcher({ openModal, post }) {
  if (!post?.gallery?.length) return <div>No images available</div>;

  const items = post.gallery.slice(3, 6).map((image, index) => ({ image, index }));
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative">
      <img
        src={items[currentIndex].image}
        onClick={() => openModal(items[currentIndex].index + 3)}
        className="shadow-lg w-full h-[250px] md:h-[400px] lg:h-[450px] rounded-2xl object-contain md:object-cover lg:object-cover transition-all duration-300 cursor-default md:cursor-pointer"
      />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-1 md:left-1 lg:left-3 transform -translate-y-1/2 bg-[#AAAC24] text-white p-2 rounded-full hover:bg-[#1A428A] transition-all duration-200"
      >
        <FaChevronLeft className="h-4 w-3 lg:h-6 lg:w-6 md:h-5 md:w-5 md:pr-1 lg:pr-1 lg:p-1" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-1 md:right-1 lg:right-3 transform -translate-y-1/2 bg-[#AAAC24] text-white p-2 rounded-full hover:bg-[#1A428A] transition-all duration-200"
      >
        <FaChevronRight className="h-4 w-3 lg:h-6 lg:w-6 md:h-5 md:w-5 md:pl-1 lg:pl-1 lg:p-1" />
      </button>
    </div>
  );
}