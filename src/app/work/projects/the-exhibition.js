import { useState, useEffect } from "react";
import Modal from "../../components/Modal.js";

function PosterDesignTE({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [isLgDevice, setIsLgDevice] = useState(window.innerWidth > 1024);

    useEffect(() => {
        const handleResize = () => setIsLgDevice(window.innerWidth > 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openModal = (index) => {
        if (isLgDevice) {
            setModalImageIndex(index);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => setIsModalOpen(false);
    const goToNext = () => setModalImageIndex((prev) => prev + 1);
    const goToPrevious = () => setModalImageIndex((prev) => prev - 1);

    const renderGalleryImages = (startIndex, endIndex) => {
        return post.gallery.slice(startIndex, endIndex).map((image, index) => (
            <div className="flex flex-col gap-6 " key={index}>
                <img
                    src={image}
                    alt={`Gallery Image ${index + startIndex}`}
                    className={`w-full h-[400px] lg:md:h-[400px] md:h-[500px] sm:h-[300px] rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? 'cursor-pointer hover:opacity-80' : ''}`}
                    title="View image"
                    onClick={() => openModal(index + startIndex)}
                />
            </div>
        ));
    };

    const imageStyle = `w-full h-auto rounded-2xl shadow-lg object-cover transition-all duration-300 ${isLgDevice ? 'cursor-pointer hover:opacity-80' : ''}`;

    return (
        <div>
            <div className="mt-8">
                <h3 className="text-[#1A428A] text-2xl font-bold">Introduction 🌅</h3>
                <p className="text-[#000] mt-2">{post.overview}</p>
            </div>
            <h4 className="text-[#1A428A] text-xl font-semibold mt-4">Colour Palette & Typography:</h4>
            <p className="text-[#000] text-md mt-2">
                The design uses two shades of burnt orange, deep henna, and a light stone background, with a green circle for contrast and white text for readability. The typography includes Wausau for titles, Kiln Serif Regular for event dates, and Kiln Sans Spiked for body text, with a drop cap in Kiln Serif Spiked.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {post.gallery.slice(0, 2).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={index === 0 ? "Colours for poster" : "Typography for poster"}
                        className={imageStyle}
                        title="View image"
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Portrait & Landscape Design:</h4>
            <p className="text-[#000] text-md mt-2">
                The design showcases both portrait and landscape poster variations, clearly demonstrating how each adapts seamlessly to different formats. Both layouts maintain consistency in design elements, ensuring a cohesive look across various presentation styles.
            </p>
            <div className="mt-6 flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-8 mt-6">
                    {post.gallery.slice(2, 3).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={index === 0 ? "Colours for poster" : "Typography for poster"}
                            className={imageStyle}
                            title="View image"
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>            </div>

            <div className="mt-8">
                <h3 className="text-[#1A428A] text-xl font-bold">Final Product:</h3>
                <p className="text-[#000] mt-2">These mockups showcase how the exhibition's concept can be translated into various formats, demonstrating how the design adapts across different environments.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {renderGalleryImages(3, 5)}
                {renderGalleryImages(5, 7)}
            </div>
            <div className="mt-6">
                <h3 className="text-[#1A428A] text-2xl font-bold">Project Journey 🚙</h3>
            </div>

            <div className="mt-4">
                <h4 className="text-[#1A428A] text-lg font-semibold">Challenges Faced:</h4>
                <ul className="text-[#000] mt-2 text-md">
                    <li className="mt-1"><strong>Typography Selection:</strong> Choosing fonts that matched the Western theme while ensuring legibility was challenging.</li>
                    <li className="mt-1"><strong>Colour Balance:</strong> Ensuring the burnt orange tones worked well with the light stone background without overpowering the design.</li>
                    <li className="mt-1"><strong>Design Consistency:</strong> Maintaining a consistent look across both portrait and landscape formats required careful adjustments.</li>
                </ul>
            </div>

            <div className="mt-4">
                <h4 className="text-[#1A428A] text-lg font-semibold">What Worked Well:</h4>
                <ul className="text-[#000] mt-2 text-md">
                    <li className="mt-1"><strong>Typography:</strong> The fonts used reinforced the Western style while still being easy to read.</li>
                    <li className="mt-1"><strong>Visual Clarity:</strong> The contrast between the background and text made the design clear and impactful.</li>
                </ul>
            </div>

            <div className="mt-4">
                <h4 className="text-[#1A428A] mt-2 text-lg font-semibold">Thought Process & What Was Learned:</h4>
                <p className="text-[#000] text-md">
                    Inspired by a current artist's 1970s cowboy style, the design combined vintage Western elements with modern touches. The key takeaway was selecting readable typography, balancing colours for contrast, and maintaining consistency across formats. This process improved my ability to adapt designs for different mediums while ensuring they remain functional and visually effective.
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

export default PosterDesignTE;