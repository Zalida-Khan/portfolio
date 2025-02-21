import { useState, useEffect } from "react";
import Modal from "../../components/Modal.js";

function PosterDesignTE({ post }) {
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
            <h2 className="mt-8 text-[#1A428A] text-3xl font-semibold">{post.title}</h2>

            <div className="mt-8">
                <h3 className="text-[#1A428A] text-2xl font-bold">Introduction 🌅</h3>
                <p className="text-[#000] mt-4">{post.overview}</p>
            </div>

            <div className="mt-8">
                <h3 className="text-[#1A428A] text-2xl font-bold">Mockups:</h3>
                <p className="text-[#000] mt-4">These mockups showcase how the exhibition's concept can be translated into various formats, emphasizing how streetwear and cowboy culture intersect. The mockups include both portrait and landscape formats for better visualization.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Masonry Layout for images */}
                <div className="flex flex-col gap-8">
                    <img
                        src={post.gallery[0]}
                        alt="Gallery Image 1"
                        className="w-full h-[420px] object-cover rounded-3xl shadow-md"
                        style={{ cursor: isLgDevice ? "pointer" : "default" }} 
                        onClick={() => openModal(0)}
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <img
                        src={post.gallery[1]}
                        alt="Gallery Image 2"
                        className="w-full h-[410px] object-cover rounded-3xl shadow-md"
                        style={{ cursor: isLgDevice ? "pointer" : "default" }} 
                        onClick={() => openModal(1)}
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <img
                        src={post.gallery[2]}
                        alt="Gallery Image 3"
                        className="w-full h-[300px] object-cover rounded-3xl shadow-md"
                        style={{ cursor: isLgDevice ? "pointer" : "default" }} 
                        onClick={() => openModal(2)}
                    />
                </div>
                <div className="flex flex-col gap-8">
                    <img
                        src={post.gallery[3]}
                        alt="Gallery Image 4"
                        className="w-full h-[300px] object-cover rounded-3xl shadow-md"
                        style={{ cursor: isLgDevice ? "pointer" : "default" }} 
                        onClick={() => openModal(3)}
                    />
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-[#1A428A] text-2xl font-bold">Project Journey 🚙</h3>
                <p className="text-[#000] mt-4">{post.projectJourney}</p>
            </div>

            <div className="mt-8">
                <h4 className="text-[#1A428A] text-lg font-semibold">What Worked Well:</h4>
                <ul className="text-[#000] text-md">
                    <li><strong>Clear Focus:</strong> Cowboy culture influenced 1970s streetwear in a meaningful way.</li>
                    <li><strong>Organized Content:</strong> Each segment of the exhibition seamlessly connects to the next.</li>
                </ul>
            </div>

            <div className="mt-8">
                <h4 className="text-[#1A428A] text-lg font-semibold">Room for Improvement:</h4>
                <ul className="text-[#000] text-md">
                    <li><strong>More Visuals:</strong> Including more graphics of the era would strengthen the connection.</li>
                    <li><strong>Variety:</strong> Broader styles could be explored to broaden the scope of the cultural influence.</li>
                </ul>
            </div>

            <div className="mt-8">
                <h4 className="text-[#1A428A] text-lg font-semibold">My Thought Process:</h4>
                <p className="text-[#000] text-md">I explored how fashion from the 1970s adapted cowboy themes, showcasing how cultural elements evolve through modern interpretations of fashion.</p>
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

export default PosterDesignTE;