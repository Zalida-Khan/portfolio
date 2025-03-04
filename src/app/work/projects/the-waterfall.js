import { useState, useEffect } from "react";
import Modal from "../../components/Modal.js";

function PosterDesign({ post }) {
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

  const renderGalleryImages = (images, startIndex = 0) =>
    images.map((image, index) => (
      <img
        key={startIndex + index}
        src={image}
        alt={`Gallery image ${startIndex + index + 1}`}
        onClick={() => openModal(startIndex + index)}
        title="View image"
        style={{ cursor: isLgDevice ? "pointer" : "default" }}
        className={`w-full h-full rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
      />
    ));

  return (
    <div>
      <h2 className="mt-8 text-[#1A428A] text-2xl font-semibold">{post.heading}</h2>
      <p className="text-[#000] mt-2">{post.overview}</p>

      <h4 className="text-[#1A428A] text-xl font-semibold mt-4">Typography & Colour Palette:</h4>
      <p className="text-[#000] text-md mt-2">
        The typography is key to setting the album’s tone. The bold pink title contrasts with softer pinks for headings and a peachy pink for the body text, creating a cohesive, readable design. The dark background makes these colours stand out, enhancing the visual impact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {renderGalleryImages(post.gallery.slice(0, 2))}
      </div>

      <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Visual Inspiration & Design Assets:</h4>
      <p className="text-[#000] text-md mt-2">
        The design draws on symbolic imagery to reflect emotional vulnerability and uncertainty. Elements like the drowning figure and boat on the waterfall’s edge, alongside holographic concentric circles and 3D black birds, reinforce the artist’s personal journey. A Spotify album barcode adds a layer of authenticity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {renderGalleryImages(post.gallery.slice(2, 4), 2)}
      </div>

      <h3 className="text-[#1A428A] text-xl font-bold mt-8">Original and Redesigned Poster:</h3>
      <p className="text-[#000] mt-2">
        The first design lacked legibility, especially in the title. In the redesigned version, the font was adjusted to improve visibility, while maintaining the original imagery. Multiple iterations helped achieve a balance of readability and emotional impact.
      </p>
      <div className="grid grid-cols-1 gap-6 mt-6">
        {renderGalleryImages(post.gallery.slice(4, 5), 4)}
      </div>

      <h3 className="text-[#1A428A] text-xl font-bold mt-8">Final Product:</h3>
      <p className="text-[#000] mt-2">
        The mockups showcase how the album's cover design looks across different mediums, bringing the design concept to life in various formats.
      </p>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {renderGalleryImages(post.gallery.slice(5), 5)}
      </div>

      <div className="mt-6">
        <h3 className="text-[#1A428A] text-2xl font-bold">Project Journey 🚙</h3>
      </div>

      <div className="mt-4">
        <h4 className="text-[#1A428A] text-lg font-semibold">Challenges Faced:</h4>
        <ul className="text-[#000] mt-2">
          <li className="mt-1"><strong>Finding the right tone:</strong> Struggling to balance emotional depth and strength.</li>
          <li className="mt-1"><strong>Balancing visuals and message:</strong> Ensuring the visuals accurately represented the artist's journey.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-[#1A428A] text-lg font-semibold">What Went Well:</h4>
        <ul className="text-[#000] mt-2">
          <li className="mt-1"><strong>Finding the right visuals:</strong> The images perfectly aligned with the emotional tone of the design.</li>
          <li className="mt-1"><strong>Typography:</strong> The font combination was exactly what I wanted, enhancing the design's clarity.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-[#1A428A] text-lg font-semibold">My Thought Process & What Was Learned:</h4>
        <p className="text-[#000] mt-2">
          Throughout the design, each decision—from typography to color palette—was focused on conveying the artist’s story of resilience. Multiple iterations were necessary to ensure the title was legible and the message was clear. Instructor feedback helped me refine the legibility, ultimately resulting in a design that's easy to read and visually impactful.
        </p>
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

export default PosterDesign;