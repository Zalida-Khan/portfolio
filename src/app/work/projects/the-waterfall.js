import { useState, useEffect } from "react";
import Modal from "../../components/Modal.js";

function PosterDesign({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isLgDevice, setIsLgDevice] = useState(false);

  const openModal = (index) => {
    if (isLgDevice) {
      setModalImageIndex(index);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);
  const goToNext = () => setModalImageIndex((prev) => prev + 1);
  const goToPrevious = () => setModalImageIndex((prev) => prev - 1);

  useEffect(() => {
    const handleResize = () => setIsLgDevice(window.innerWidth > 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <div>
            <h2 className="mt-8 text-[#1A428A] text-3xl font-semibold">{post.heading}</h2>
            <p className="text-[#000] mt-4">{post.overview}</p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {post.gallery.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full rounded-3xl shadow-md cursor-pointer"
                        onClick={() => openModal(index)}
                        style={{ cursor: isLgDevice ? "pointer" : "default" }} 
                    />
                ))}
            </div>

          
      {isModalOpen && (
        <Modal
          image={post.gallery[modalImageIndex]}
          onClose={closeModal}
          onNext={goToNext}
          onPrevious={goToPrevious}
          disableNext={modalImageIndex === post.gallery.length - 1}
          disablePrevious={modalImageIndex === 0}
        />
      )}
        </div>
    );
}

export default PosterDesign;