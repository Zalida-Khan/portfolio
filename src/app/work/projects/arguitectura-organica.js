import { useState, useEffect } from "react";
import Modal from "../../components/Modal";

function MagazineDesign({ post }) {
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

            <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Design Elements:</h4>
            <p className="text-[#000] text-sm md:text-md lg:text-md mt-4">{post.logoAndTypography}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <img
                    src={post.gallery[0]}
                    alt="image with logos"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(0)}
                />
                <img
                    src={post.gallery[1]}
                    alt="image with typography usage on magazine"
                    title="View image"
                    style={{
                        cursor: isLgDevice ? "pointer" : "default",
                      }}
                      className={`w-full h-auto rounded-3xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                    onClick={() => openModal(1)}
                />
            </div>

            <div className="mt-8">
                <h3 className="text-[#1A428A] text-2xl font-bold">Project Journey 🚙</h3>

                <div className="mt-4">
                    <h4 className="text-[#1A428A] text-lg font-semibold">What Worked Well:</h4>
                    <ul className="text-[#000] text-md">
                        <li><strong>Clear Focus:</strong> Sustainability is a popular topic and easy to relate to.</li>
                        <li><strong>Organized Content:</strong> Each section builds on the last, keeping things simple to follow.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-[#1A428A] text-lg font-semibold">Room for Improvement:</h4>
                    <ul className="text-[#000] text-md">
                        <li><strong>More Visuals:</strong> Some images and diagrams would add depth.</li>
                        <li><strong>Variety:</strong> Include more projects to show different perspectives.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-[#1A428A] text-lg font-semibold">My Thought Process:</h4>
                    <p className="text-[#000] text-md">
                        I focused on how architecture connects with nature and sustainability, hoping to spark interest and inspire change in the way we think about buildings.
                    </p>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {post.gallery.slice(2).map((image, index) => (
                    <div key={index} className={`relative ${index === 0 ? "lg:col-span-2" : ""}`}>
                        <img
                            src={image}
                            alt={`Gallery image ${index + 2}`}
                            title="View image"
                            style={{
                                cursor: isLgDevice ? "pointer" : "default",
                              }}
                              className={`w-full h-auto lg:h-full rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? 'hover:opacity-80' : ''}`}
                            onClick={() => openModal(index + 2)}
                        />                       
                    </div>
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

export default MagazineDesign;