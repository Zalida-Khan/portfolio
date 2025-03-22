import { useState, useEffect } from "react";
import Modal from "../../components/work/Modal";

function MagazineDesign({ post }) {
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

    const renderGalleryImages = (images, startIndex = 0) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {images.map((image, index) => (
                <img
                    key={startIndex + index}
                    src={image}
                    alt={`Gallery image ${startIndex + index}`}
                    title="View image"
                    className={`w-full h-auto rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? 'cursor-pointer hover:opacity-80' : ''}`}
                    onClick={() => openModal(startIndex + index)}
                />
            ))}
        </div>
    );

    return (
        <div>
            <h2 className="mt-8 text-[#1A428A] text-2xl font-semibold">{post.heading}</h2>
            <p className="text-[#000] text-md mt-2">{post.overview}</p>

            <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Design Elements:</h4>
            <p className="text-[#000] text-md mt-2">{post.logoAndTypography}</p>
            {renderGalleryImages(post.gallery.slice(0, 2))}

            <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Colour Palette & Usage:</h4>
            <p className="text-[#000] text-md mt-2">
                The palette consists of blue, green, yellow, red, and orange in a bright yet muted tone. Yellow is designated for the logo, black for body text, while the remaining colours are applied to headings, subheadings, and captions to maintain a cohesive visual identity.
            </p>
            {renderGalleryImages(post.gallery.slice(2, 4), 2)}

            <h4 className="text-[#1A428A] text-xl font-semibold mt-8">Final Product:</h4>
            <p className="text-[#000] text-md mt-2">
                The magazine mockups were created using Photoshop, showcasing the cover, inside spreads, and back cover. Each mockup highlights different aspects of the magazine's layout and design.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {post.gallery.slice(4).map((image, index) => (
                    <div key={index} className={`relative ${index === 0 ? "lg:col-span-2" : ""}`}>
                        <img
                            src={image}
                            alt={`Gallery image ${index + 4}`}
                            title="View image"
                            className={`w-full h-full rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? 'cursor-pointer hover:opacity-80' : ''}`}
                            onClick={() => openModal(index + 4)}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <h3 className="text-[#1A428A] text-2xl font-bold">Project Journey 🚙</h3>

                <div className="mt-4">
                    <h4 className="text-[#1A428A] text-lg font-semibold">Challenges Faced:</h4>
                    <ul className="text-[#000] mt-2 text-md">
                        <li className="mt-1"><strong>Font Selection:</strong> Selecting a font that worked effectively for both print and digital formats while ensuring readability caused a challenge.</li>
                        <li className="mt-1"><strong>Font Size for Print:</strong> Determining the optimal font size for body copy was essential for clarity and readability in the print version.</li>
                        <li className="mt-1"><strong>Image Placement:</strong> Keeping a balance between text and image placement, particularly with numerous visuals, was difficult.</li>
                        <li className="mt-1"><strong>Layout Consistency:</strong> Ensuring the layout maintained consistency across both print and digital formats, especially with orientation changes, was a challenge.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-[#1A428A] text-lg font-semibold">What Went Well:</h4>
                    <ul className="text-[#000] mt-2 text-md">
                        <li className="mt-1"><strong>Good Use of Colour and Images:</strong> The colour palette complemented the images, enhancing the overall design.</li>
                        <li className="mt-1"><strong>Image Conversions:</strong>In both print and digital formats, There needed to be sme changes made to the images. Using Photoshop to convert images to cymk for print version and fixing the ppi  </li>

                        <li className="mt-1"><strong>Print Accuracy:</strong> The final printed magazine accurately reflected the digital design, with consistent colours, fonts, and layout.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-[#1A428A] text-lg font-semibold">Thought Process & What Was Learned:</h4>
                    <p className="text-[#000] mt-1 text-md">
                        This project explored the intersection of architecture and sustainability, drawing inspiration from Javier Senosiain's organic architecture. Key lessons included balancing design elements for both print and digital formats, selecting legible fonts, and maintaining layout consistency across various mediums. Additionally, a deeper understanding of sustainable design principles was gained, which can be benefifical for future projects.
                        {/* Working with Photoshop to convert colour settings/image mode to cymk for print version so it could be printed. As well as using Image size in Photoshop to better meet the requirements of printing.   */}
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

export default MagazineDesign;