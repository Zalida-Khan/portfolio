import { useState, useEffect } from "react";
import Modal from "../../components/Modal.js";

function MenuDesign({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [isLgDevice, setIsLgDevice] = useState(window.innerWidth > 1024);

    useEffect(() => {
        const handleResize = () => setIsLgDevice(window.innerWidth > 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeModal = () => setIsModalOpen(false);
    const openModal = (index) => {
        if (isLgDevice) {
            setModalImageIndex(index);
            setIsModalOpen(true);
        }
    };

    const goToNext = () => setModalImageIndex(prev => prev + 1);
    const goToPrevious = () => setModalImageIndex(prev => prev - 1);

    const renderImages = (images, startIndex, cols = 1) => {
        const gridClass = cols === 1
            ? 'grid-cols-1'
            : `sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-${cols} grid-cols-1`;

        return (
            <div className={`grid ${gridClass} gap-6 mt-4`}>
                {images.map((image, index) => (
                    <img
                        key={startIndex + index}
                        src={image}
                        alt={`Image ${startIndex + index}`}
                        className={`w-full h-full rounded-3xl shadow-lg object-cover transition-all duration-300 ${isLgDevice ? 'cursor-pointer hover:opacity-80' : ''}`}
                        title="View image"
                        onClick={() => openModal(startIndex + index)}
                    />
                ))}
            </div>
        );
    };

    return (
        <div>
            <h2 className="mt-8 text-[#1A428A] text-2xl font-semibold">{post.heading}</h2>
            <p className="text-[#000] mt-2">{post.overview}</p>

            <h3 className="text-[#1A428A] text-xl font-bold mt-6">Colour Palettes:</h3>
            <p className="text-[#000] text-md mt-2">
                A vintage palette with mustard for items, green for prices, and red details on a sky-blue background, creating a warm, retro feel. The logo uses bright yellow and white, with darker yellow shadows for depth, reflecting warmth and the restaurant’s brunch and breakfast focus.</p>
            {renderImages(post.gallery.slice(0, 2), 0, 2)}

            <h3 className="text-[#1A428A] text-xl font-bold mt-8">Typography & Logo:</h3>
            <p className="text-[#000] text-md mt-2">
                The typography uses rounded fonts paired with clean sans-serif typefaces, giving the brand a fresh and approachable feel. The logo features bold, rounded elements, reflecting the restaurant's fun, organic, and delicious brunch and breakfast focus.
            </p>
            {renderImages(post.gallery.slice(2, 4), 2, 2)}

            <h3 className="text-[#1A428A] text-xl font-bold mt-8">Illustrations & Assets:</h3>
            <p className="text-[#000] text-md mt-2">
                The illustrations for The Yolk feature soft, rounded designs with a hand-drawn effect, giving an organic feel. Some elements are colored, while main areas are left uncolored, creating a half-outline, half-filled look. Complementing patterns and icons maintain visual consistency and reinforce the brand’s cohesive identity across all materials.</p>
            {renderImages(post.gallery.slice(4, 6), 4, 2)}

            <h3 className="text-[#1A428A] text-xl font-bold mt-8">Packaging:</h3>
            <p className="text-[#000] text-md mt-2">
                The vibrant, playful packaging design enhances the overall branding experience. Bold colors and soft illustrations tie the visual identity together, creating a memorable impression that extends beyond the restaurant itself.</p>
            {renderImages([post.gallery[6]], 6, 1)}

            <h3 className="text-[#1A428A] text-xl font-bold mt-8">Final Product:</h3>
            <p className="text-[#000] text-md mt-2">
                The menu layout is designed for easy navigation, with an emphasis on showcasing the visual appeal of each dish. The user-friendly layout enhances the dining experience, making it simple for customers to explore the offerings in a visually pleasing way.</p>
            {renderImages(post.gallery.slice(7, 10), 7, 3)}

            <div className="mt-6">
                <h3 className="text-[#1A428A] text-2xl font-bold">Project Journey 🚙</h3>

                <div className="mt-4">
                    <h4 className="text-[#1A428A] text-lg font-semibold">Challenges Faced:</h4>
                    <ul className="text-[#000] text-md mt-2">
                        <li className="mt-1"><strong>Colour Contrast:</strong> The bright yellow logo and blue background clashed, making it hard to read the text clearly.</li>
                        <li className="mt-1"><strong>Menu Layout:</strong> Fitting a large number of items into a clean, user-friendly design was challenging.</li>
                        <li className="mt-1"><strong>Interactive PDF:</strong> The navigation buttons didn’t function well initially, causing issues with user experience.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-[#1A428A] text-lg font-semibold">What Went Well:</h4>
                    <ul className="text-[#000] text-md mt-2">
                        <li className="mt-1"><strong>Font Choices:</strong> The rounded, playful fonts gave the brand a fun, cohesive feel.</li>
                        <li className="mt-1"><strong>Logo Design:</strong> The sun and cloud logo captured the fun, warm atmosphere of The Yolk.</li>
                        <li className="mt-1"><strong>Menu Differentiation:</strong> Clear design elements helped distinguish the restaurant and kids’ menu, making it easy to navigate.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="text-[#1A428A] text-lg font-semibold">Thought Process & What Was Learned:</h4>
                    <p className="text-[#000] text-md mt-2">
                        The project focused on balancing fun, organic elements with functionality. Adjusting the colour contrast and refining the layout improved the visual appeal and usability. I learned how important it is to design with the user in mind, especially when working with digital formats, and how consistent branding helps build a strong identity.
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

export default MenuDesign;