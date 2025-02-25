import { useState, useEffect } from "react";
import Modal from "../../components/Modal";

function ProductDesign({ post }) {
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

            <h2 className="mt-8 text-[#1A428A] text-2xl font-semibold">{post.heading}</h2>
            <p className="text-[#000] text-md mt-2">{post.overview}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <img
                    src={post.gallery[0]}
                    alt="Colour Palette"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-full rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(0)}                />
                <img
                    src={post.gallery[1]}
                    alt="Typography"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(1)}                />
            </div>

            <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Design Elements:</h4>
            <p className="text-[#000] text-md mt-4">{post.logoAndIllustrations}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <img
                    src={post.gallery[2]}
                    alt="Logo Design"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-full rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(2)}                />
                <img
                    src={post.gallery[3]}
                    alt="Symbols and Label"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(3)}                />
            </div>

            <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Illustrations:</h4>
            <p className="text-[#000] text-md mt-4">The illustrations are bold with soft, rounded features that give them a plump, playful look. Their thick outlines and exaggerated shapes add character, making the visuals stand out in a fun and approachable way.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <img
                    src={post.gallery[4]}
                    alt="Illustration on front of cans"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(4)}                />
                <img
                    src={post.gallery[5]}
                    alt="Illustration on back of cans"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(5)}                />
            </div>

            <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Packaging Design & Dielines:</h4>
            <p className="text-[#000] text-md mt-4">{post.packagingDesign}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <img
                    src={post.gallery[6]}
                    alt="Cherry Dieline"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(6)}
                />
                <img
                    src={post.gallery[7]}
                    alt="Lemon Dieline"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(7)}
                />
                <img
                    src={post.gallery[8]}
                    alt="Blueberry Dieline"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(8)}
                />
            </div>
            <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Final Product:</h4>
            <p className="text-[#000] text-md mt-4">Mockups include all cans (front and back) as well as individual can designs, perfect for advertising and merchandise featuring Sugar Magic. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <img
                    src={post.gallery[9]}
                    alt="Cans Mockup Front"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(9)}
                />
                <img
                    src={post.gallery[10]}
                    alt="Cans Mockup Back"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(10)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 ">
                <img
                    src={post.gallery[11]}
                    alt="Cherry Flavour"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(11)}
                />
                <img
                    src={post.gallery[12]}
                    alt="Blueberry Flavour"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(12)}
                />
                <img
                    src={post.gallery[13]}
                    alt="Lemon Flavour"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(13)}
                />
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

export default ProductDesign;