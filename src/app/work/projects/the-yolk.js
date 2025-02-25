import { useState, useEffect } from "react";
import Modal from "../../components/Modal.js";

function MenuDesign({ post }) {
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
            <p className="text-[#000] mt-4">{post.overview}</p>
            <h3 className="text-[#1A428A] text-xl font-bold mt-8">Typography and Logo:</h3>
            <p className="text-[#000] text-md mt-4">
                The Yolk’s typography combines playful, rounded fonts with clean modern sans-serifs to reflect the brand’s fresh and organic approach. The logo features bold, rounded elements that evoke a playful and approachable feel, aligned with the brand’s ethos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <img
                    src={post.gallery[0]}
                    alt="Typography sample for The Yolk menu"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-full rounded-3xl shadow-lg object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    title="View image"
                    onClick={() => openModal(0)}

                />
                <img
                    src={post.gallery[1]}
                    alt="Logo design for The Yolk branding"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-full rounded-3xl shadow-lg object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}                    
                      title="View image"
                    onClick={() => openModal(1)}
                />
            </div>

            <h3 className="text-[#1A428A] text-xl font-bold mt-8">Illustrations and Assets:</h3>
            <p className="text-[#000] text-md mt-4">
                The illustrations are bold with soft, rounded features that give them a playful and approachable feel. Supporting assets such as icons and patterns are used to maintain visual consistency throughout the branding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <img
                    src={post.gallery[2]}
                    alt="Illustration for The Yolk menu"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-full rounded-3xl shadow-lg object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}                    
                      title="View image"
                    onClick={() => openModal(2)}

                />
                <img
                    src={post.gallery[3]}
                    alt="Assets for The Yolk branding"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-full rounded-3xl shadow-lg object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}                    
                      title="View image"
                    onClick={() => openModal(3)}

                />
            </div>

            <h3 className="text-[#1A428A] text-xl font-bold mt-8">Packaging:</h3>
            <p className="text-[#000] text-md mt-4 mb-4">
                The packaging design complements the branding with vibrant colors and playful illustrations to create a cohesive experience.
            </p>
            <img
                src={post.gallery[4]}
                alt="Packaging design for The Yolk"
                                style={{
                    cursor: isLgDevice ? "pointer" : "default",
                  }}
                  className={`w-full h-full rounded-3xl shadow-lg object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}                
                  title="View image"
                onClick={() => openModal(4)}

            />

            <h3 className="text-[#1A428A] text-xl font-bold mt-8">Menu Pages:</h3>
            <p className="text-[#000] text-md mt-4">
                The menu pages are designed to highlight each dish’s visual appeal, with an easy-to-navigate layout.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {post.gallery.slice(5, 8).map((image, index) => (
                    <img
                        key={index + 5}
                        src={image}
                        alt={`Menu page ${index + 1} for The Yolk`}
                        onClick={() => openModal(index + 5)}
                        title="View image"
                        style={{
                            cursor: isLgDevice ? "pointer" : "default",
                          }}
                          className={`w-full h-full rounded-3xl shadow-lg object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
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

export default MenuDesign;