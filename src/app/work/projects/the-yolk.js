import { useState, useEffect } from "react";
import Modal from "../../components/work/Modal";

function MenuDesign({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [isLgDevice, setIsLgDevice] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsLgDevice(window.innerWidth > 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openModal = (index) => isLgDevice && (setModalImageIndex(index), setIsModalOpen(true));
    const closeModal = () => setIsModalOpen(false);
    const goToNext = () => setModalImageIndex((prev) => prev + 1);
    const goToPrevious = () => setModalImageIndex((prev) => prev - 1);

    const grid = (images, start, cols = 2) => (
        <div className={`grid grid-cols-1 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4 mt-5`}>
            {images.map((img, i) => (
                <img key={i} src={img} alt={`Gallery image ${start + i + 1}`} title="View image"
                    className={`w-full h-full rounded-xl object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                    onClick={() => openModal(start + i)} />
            ))}
        </div>
    );

    return (
        <div>
            <section className="mb-10">
                <h3 id="colour-palettes" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Colour Palettes
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base">
                    A vintage-inspired palette was chosen with mustard yellow for menu items, green for prices and red as an accent detail, all sitting on a sky-blue background. The combination gives the brand a warm, retro feel. The logo itself uses bright yellow and white with darker yellow shadows to add depth, which ties back to the restaurant's focus on warmth and brunch culture.
                </p>
                {grid(post.gallery.slice(0, 2), 0)}
            </section>

            <section className="mb-10">
                <h3 id="typography-logo" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Typography and Logo
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base">
                    The typography pairs bold, chunky display fonts with clean sans-serif typefaces. The combination gives the brand a fresh and approachable character. The logo uses bold, rounded lettering that reflects the restaurant's fun and organic identity, while still feeling polished.
                </p>
                {grid(post.gallery.slice(2, 4), 2)}
            </section>

            <section className="mb-10">
                <h3 id="illustrations-assets" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Illustrations and Assets
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base">
                    The illustrations use soft, rounded shapes with a hand-drawn quality that keeps things feeling organic. Some elements are fully coloured while others are left as outlines, giving the designs a layered, half-finished look that adds personality. Supporting patterns and icons maintain visual consistency across all branded materials.
                </p>
                {grid(post.gallery.slice(4, 6), 4)}
            </section>

            <section className="mb-10">
                <h3 id="packaging" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Packaging
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
                    The packaging keeps things simple with the secondary logo on a white background, echoing the sun-on-cloud imagery. It connects the packaging back to the broader visual identity without overcomplicating the design.
                </p>
                <img src={post.gallery[6]} alt="Packaging mockup" title="View image"
                    className={`w-full rounded-xl object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                    onClick={() => openModal(6)} />
            </section>

            <section className="mb-10">
                <h3 id="final-product" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Final Product
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
                    The menu layout prioritises easy navigation and visual appeal. Items are organised clearly, and the design makes it straightforward for customers to browse without feeling overwhelmed.
                </p>
                {/* Bento grid — first image full width, two below equal */}
                <div className="flex gap-6">
                    <div className="overflow-hidden rounded-xl" style={{ height: "400px" }}>
                        <img src={post.gallery[7]} alt="Menu design final" title="View image"
                            className={`w-full h-full object-fill transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                            onClick={() => openModal(7)} />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="overflow-hidden rounded-xl" style={{ height: "400px" }}>
                            <img src={post.gallery[8]} alt="Menu spread page 2" title="View image"
                                className={`w-full h-full object-fill transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                                onClick={() => openModal(8)} />
                        </div>
                        <div className="overflow-hidden rounded-xl" style={{ height: "400px" }}>
                            <img src={post.gallery[9]} alt="Menu spread page 3" title="View image"
                                className={`w-full h-full object-fill transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                                onClick={() => openModal(9)} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-10">
                <h3 id="project-journey" className="font-syne font-bold text-xl text-[#1A428A] mb-6">
                    Project Journey
                </h3>

                <div className="mb-6">
                    <h4 id="challenges" className="font-syne font-semibold text-base text-[#1A428A] mb-3">
                        Challenges Faced
                    </h4>
                    <ul className="space-y-3">
                        {[
                            ["Colour Contrast", "The bright yellow logo and blue background initially clashed, making the text hard to read. Several rounds of adjustment were needed to find a combination that worked."],
                            ["Menu Layout", "Fitting a large number of menu items into a clean and easy-to-navigate layout took careful planning."],
                            ["Interactive PDF", "Getting the navigation buttons to work correctly in the interactive PDF version required troubleshooting and rebuilding some of the functionality."],
                        ].map(([title, desc]) => (
                            <li key={title} className="flex items-start gap-3">
                                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-xl bg-[#AAAC24]" aria-hidden="true" />
                                <p className="text-[#000] font-light leading-relaxed text-sm">
                                    <span className="font-semibold text-gray-800">{title}: </span>{desc}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h4 id="what-went-well" className="font-syne font-semibold text-base text-[#1A428A] mb-3">
                        What Went Well
                    </h4>
                    <ul className="space-y-3">
                        {[
                            ["Font Choices", "The bold, playful typefaces gave the brand a fun and cohesive personality that carried through all the materials."],
                            ["Logo Design", "The sun and cloud logo felt like a natural fit for the restaurant's warm, welcoming tone."],
                            ["Menu Differentiation", "Using clear design cues to separate the main menu from the kids menu made the overall experience easier to navigate."],
                        ].map(([title, desc]) => (
                            <li key={title} className="flex items-start gap-3">
                                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-xl bg-[#AAAC24]" aria-hidden="true" />
                                <p className="text-[#000] font-light leading-relaxed text-sm">
                                    <span className="font-semibold text-gray-800">{title}: </span>{desc}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 id="thought-process" className="font-syne font-semibold text-base text-[#1A428A] mb-3">
                        Thought Process and What Was Learned
                    </h4>
                    <p className="text-[#000] font-light leading-[1.85] text-base mb-3">
                        The goal throughout was to balance a fun, organic visual style with something that was still functional and easy to use. Fixing the colour contrast and refining the layout were the main areas that improved the design the most.
                    </p>
                    <p className="text-[#000] font-light leading-[1.85] text-base">
                        This project was a good reminder of how important it is to design with the end user in mind, particularly when working across digital and print formats. Getting the font sizes right for print specifically took more time than expected, but it was a useful lesson in how small details affect the overall experience.
                    </p>
                </div>
            </section>

            {isModalOpen && (
                <Modal image={post.gallery[modalImageIndex]} onClose={closeModal}
                    onNext={goToNext} onPrevious={goToPrevious}
                    disableNext={modalImageIndex === post.gallery.length - 1}
                    disablePrevious={modalImageIndex === 0}
                    ariaLabel="Modal dialog displaying image" role="dialog" />
            )}
        </div>
    );
}

export default MenuDesign;