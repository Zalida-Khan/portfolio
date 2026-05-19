import { useState, useEffect } from "react";
import Modal from "../../components/work/Modal";

function ProductDesign({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isLgDevice, setIsLgDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLgDevice(window.innerWidth > 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (index) => isLgDevice && (setModalImageIndex(index), setIsModalOpen(true));
  const closeModal = () => setIsModalOpen(false);
  const goToNext = () => setModalImageIndex((prev) => prev + 1);
  const goToPrevious = () => setModalImageIndex((prev) => prev - 1);

  const grid = (images, start, cols = 2) => (
    <div className={`grid grid-cols-1 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4 mt-5`}>
      {images.map((img, i) => (
        <img key={i} src={img} alt={`Gallery image ${start + i + 1}`} title="View image"
          className={`w-full h-auto rounded-xl object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
          onClick={() => openModal(start + i)} />
      ))}
    </div>
  );

  return (
    <div>
      <section className="mb-10">
        <h3 id="colour-palette-typography" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Colour Palette and Typography
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base">
          The colour palette takes inspiration from the three flavours: cherry red, lemon yellow and blueberry purple. Sharkbit Display is used for headings to give the brand a youthful and energetic feel, while Nunito handles body text with its rounded edges that keep things readable and consistent.
        </p>
        {grid(post.gallery.slice(0, 2), 0)}
      </section>

      <section className="mb-10">
        <h3 id="logo-symbols" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Logo Design and Symbols
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base">
          {post.logoAndIllustrations}
        </p>
        {grid(post.gallery.slice(2, 4), 2)}
      </section>

      <section className="mb-10">
        <h3 id="illustrations" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Illustrations
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base">
          Each flavour has its own illustration on the front of the can. Cherry Bliss features cherries with chia seeds, Zesty Lemon uses lemon and zest, and Blueberry Breeze highlights blueberries with a hint of lavender. The illustrations help customers quickly identify each flavour while keeping the design playful and cohesive.
        </p>
        {grid(post.gallery.slice(4, 6), 4)}
      </section>

      <section className="mb-10">
        <h3 id="packaging-dielines" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Packaging Design and Dielines
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
          {post.packagingDesign}
        </p>
        {grid(post.gallery.slice(6, 9), 6, 3)}
      </section>

      <section className="mb-10">
        <h3 id="final-product" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Final Product
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
          The mockups show all three cans from the front and back, along with individual can close-ups. These work well for advertising, merchandise and any promotional material for Sugar Magic.
        </p>
        {grid(post.gallery.slice(9, 11), 9)}
        {grid(post.gallery.slice(11, 14), 11, 3)}
      </section>

      <section className="mb-10">
        <h3 id="project-journey" className="font-syne font-bold text-xl text-[#1A428A] mb-6">
          Project Journey
        </h3>

        <div className="mb-6">
          <h4 id="challenges" className="font-syne font-semibold text-base text-[#1A428A] mb-3">
            Challenges Faced
          </h4>
          <ul className="space-y-3">
            {[
              ["Brand Name", "Sugar Magic initially came across as unhealthy. The challenge was keeping the fun, playful feel while making it clear the product was actually a low-calorie, health-conscious drink."],
              ["Illustration Consistency", "The different shapes of the fruits made it tricky to create a layout that felt balanced and consistent across all three can designs."],
            ].map(([title, desc]) => (
              <li key={title} className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-xl bg-[#AAAC24]" aria-hidden="true" />
                <p className="text-[#000] font-light leading-relaxed text-sm">
                  <span className="font-semibold text-gray-800">{title}: </span>{desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 id="what-went-well" className="font-syne font-semibold text-base text-[#1A428A] mb-3">
            What Went Well
          </h4>
          <ul className="space-y-3">
            {[
              ["Slogan and Messaging", "The slogan and the 50-calorie symbol did a good job of communicating the product's healthier angle without losing the fun tone."],
              ["Colours and Illustrations", "Refining the colour palette and illustrations so they worked together across all three designs came together well."],
            ].map(([title, desc]) => (
              <li key={title} className="flex items-start gap-3">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-xl bg-[#AAAC24]" aria-hidden="true" />
                <p className="text-[#000] font-light leading-relaxed text-sm">
                  <span className="font-semibold text-gray-800">{title}: </span>{desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 id="thought-process" className="font-syne font-semibold text-base text-[#1A428A] mb-3">
            Thought Process and What Was Learned
          </h4>
          <p className="text-[#000] font-light leading-[1.85] text-base mb-3">
            The goal was to create a brand that felt fresh and appealing to a younger, health-conscious audience. Feedback from my instructor and peers was useful in pointing out the disconnect between the name and the product message, which pushed me to rethink how the design communicated the brand story.
          </p>
          <p className="text-[#000] font-light leading-[1.85] text-base">
            This was also my first time working with dielines, which was a practical skill to gain. Getting familiar with the structure of packaging templates made the final result feel more polished and professional.
          </p>
        </div>
      </section>

      {isModalOpen && (
        <Modal image={post.gallery[modalImageIndex]} onClose={closeModal}
          onNext={goToNext} onPrevious={goToPrevious}
          disableNext={modalImageIndex === post.gallery.length - 1}
          disablePrevious={modalImageIndex === 0}
          ariaLabel="Modal dialog displaying image" role="dialog" />
      )}
    </div>
  );
}

export default ProductDesign;