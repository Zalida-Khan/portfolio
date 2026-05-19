import { useState, useEffect } from "react";
import Modal from "../../components/work/Modal";

function MagazineDesign({ post }) {
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

    const grid2 = (images, start) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {images.map((img, i) => (
                <img key={i} src={img} alt={`Gallery image ${start + i + 1}`} title="View image"
                    className={`w-full h-auto rounded-xl object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                    onClick={() => openModal(start + i)} />
            ))}
        </div>
    );

    return (
        <div>
            <section className="mb-10">
                <h3 id="design-elements" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Design Elements
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base">
                    {post.logoAndTypography}
                </p>
                {grid2(post.gallery.slice(0, 2), 0)}
            </section>

            <section className="mb-10">
                <h3 id="colour-palette" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Colour Palette and Usage
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base">
                    The palette uses blue, green, yellow, red and orange in bright but muted tones. Yellow is mainly used for the logo and applied to headings for emphasis. Black covers the body text, while the remaining colours are used for headings, subheadings and captions to keep a consistent visual identity throughout.
                </p>
                {grid2(post.gallery.slice(2, 4), 2)}
            </section>

            <section className="mb-10">
                <h3 id="final-product" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Final Product
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
                    The magazine mockups were created in Photoshop and show the cover, inside spreads and back cover. Each one highlights a different aspect of the layout and design.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {post.gallery.slice(4).map((img, index) => (
                        <div key={index} className={`relative ${index === 0 ? "lg:col-span-2" : ""}`}>
                            <img src={img} alt={`Magazine spread ${index + 1}`} title="View image"
                                className={`w-full h-full rounded-xl object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                                onClick={() => openModal(index + 4)} />
                        </div>
                    ))}
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
                            ["Font Selection", "Finding a font that worked well for both print and digital formats while staying readable was harder than expected."],
                            ["Font Size for Print", "Getting the body copy size right for print took several rounds of testing to get the clarity right."],
                            ["Image Placement", "Balancing text and images, especially with a lot of visuals, required a lot of iteration to get right."],
                            ["Layout Consistency", "Keeping the layout consistent across print and digital, including orientation changes, was a recurring challenge throughout the project."],
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
                            ["Colour and Image Pairing", "The colour palette worked well with the imagery and added to the overall design."],
                            ["Image Conversions", "Converting images to CMYK in Photoshop for print and adjusting PPI went smoothly."],
                            ["Print Accuracy", "The printed version closely matched the digital design in terms of colour, font and layout."],
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
                        This project was a good introduction to designing for both print and digital at the same time. Keeping the layouts consistent across formats took more planning than expected, and it pushed me to think more carefully about how design decisions play out in different contexts.
                    </p>
                    <p className="text-[#000] font-light leading-[1.85] text-base">
                        Working with CMYK colour settings and print-ready image sizes in Photoshop was a practical skill I picked up through this process. It also gave me a better understanding of how sustainable design principles can be woven into editorial work in a meaningful way.
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

export default MagazineDesign;