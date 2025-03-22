import { useState, useEffect } from "react";
import Modal from "../../components/work/Modal";

function ProductDesign({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isLgDevice, setIsLgDevice] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setIsLgDevice(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (index) => isLgDevice && (setModalImageIndex(index), setIsModalOpen(true));
  const closeModal = () => setIsModalOpen(false);
  const goToNext = () => setModalImageIndex((prev) => prev + 1);
  const goToPrevious = () => setModalImageIndex((prev) => prev - 1);

  const renderGalleryImages = (images, startIndex) => {
    return images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Gallery Image ${startIndex + index}`}
        title="View image"
        className={`w-full h-auto rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? 'cursor-pointer hover:opacity-80' : ''}`}
        onClick={() => openModal(startIndex + index)}
      />
    ));
  };

  return (
    <div>
      <h2 className="mt-8 text-[#1A428A] text-2xl font-semibold">{post.heading}</h2>
      <p className="text-[#000] text-md mt-2">{post.overview}</p>

      <h4 className="text-[#1A428A] text-xl font-semibold mt-4">Colour Palette & Typography:</h4>
      <p className="text-[#000] text-md mt-2">
        The colour palette draws inspiration from vibrant fruits: cherry red, lemon yellow, and blueberry’s purplish-blue. The typography uses Sharkbit Display for headings, offering a youthful, energetic vibe, and Nunito for the body text, ensuring readability and consistency with their rounded sans-serif edges.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {renderGalleryImages(post.gallery.slice(0, 2), 0)}
      </div>

      <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Logo Design & Symbols:</h4>
      <p className="text-[#000] text-md mt-2">{post.logoAndIllustrations}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {renderGalleryImages(post.gallery.slice(2, 4), 2)}
      </div>

      <div className="mt-8">
        <h4 className="text-[#1A428A] text-lg font-semibold">Illustrations:</h4>
        <p className="text-[#000] text-md mt-2">
          The illustrations feature cherries, lemons, and blueberries on the front, highlighting the key ingredients with the following illustrations. 🍒 Cherry Bliss – Cherry juice, chia seeds & sparkling water. 🍋 Zesty Lemon – Lemon juice, lemon zest & sparkling water. 🫐 Blueberry Breeze – Blueberry juice, lavender & sparkling water.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {renderGalleryImages(post.gallery.slice(4, 6), 4)}
      </div>

      <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Packaging Design & Dielines:</h4>
      <p className="text-[#000] text-md mt-2">{post.packagingDesign}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {renderGalleryImages(post.gallery.slice(6, 9), 6)}
      </div>

      <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Final Product:</h4>
      <p className="text-[#000] text-md mt-2">Mockups include all cans (front and back) as well as individual can designs, perfect for advertising and merchandise featuring Sugar Magic.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {renderGalleryImages(post.gallery.slice(9, 11), 9)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {renderGalleryImages(post.gallery.slice(11, 14), 11)}
      </div>

      <div className="mt-6">
        <h3 className="text-[#1A428A] text-2xl font-bold">Project Journey 🚙</h3>

        <div className="mt-4">
          <h4 className="text-[#1A428A] text-lg font-semibold">Challenges Faced:</h4>
          <ul className="text-[#000] text-md mt-2">
            <li className="mt-1"><strong>Name choice:</strong> “Sugar Magic” initially sounded unhealthy. The challenge was to balance the fun vibe while marketing it as a healthy drink.</li>
            <li className="mt-1"><strong>Illustration & layout:</strong> The different shapes of fruits (lemon, cherry, blueberry) posed a challenge in creating a consistent and balanced design across the packaging.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="text-[#1A428A] text-lg font-semibold">What Went Well:</h4>
          <ul className="text-[#000] text-md mt-2">
            <li className="mt-1"><strong>Slogan & messaging:</strong> The slogan “Taste you’ve never tasted before, all without sugar” and the 50-calorie symbol effectively communicated the product’s healthy angle.</li>
            <li className="mt-1"><strong>Colours & illustrations:</strong> Refining the colours and illustrations ensured they complemented each other and worked harmoniously across all three drink designs.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="text-[#1A428A] text-lg font-semibold">Thought Process & What Was Learned:</h4>
          <p className="text-[#000] text-md mt-2">
            The project aimed to create healthy, appealing drinks with packaging for a young, health-conscious audience. Feedback from my instructor and peers highlighted the need to align the brand name with the product’s message and maintain design consistency. This experience also marked my first time working with dielines, resulting in a cleaner, more professional outcome that will be valuable for future projects.
          </p>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          image={post.gallery[modalImageIndex]}
          onClose={closeModal}
          onNext={goToNext}
          onPrevious={goToPrevious}
          disableNext={modalImageIndex === post.gallery.length - 1}
          disablePrevious={modalImageIndex === 0}
          ariaLabel="Modal dialog displaying image"
          role="dialog"
        />
      )}
    </div>
  );
}

export default ProductDesign;