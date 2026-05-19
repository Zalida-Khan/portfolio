import { useState, useEffect } from "react";
import Modal from "../../components/work/Modal";

function PosterDesignTE({ post }) {
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

    const imgClass = `w-full h-auto rounded-xl object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`;

    return (
        <div>
            <section className="mb-10">
                <h3 id="colour-typography" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Colour Palette and Typography
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base">
                    The design uses two shades of burnt orange, deep henna and a light stone background with a green circle for contrast. White text keeps things readable against the warm tones. For typography, Western American Cowboy fonts were selected: Wausau for titles, Kiln Serif Regular for event dates and Kiln Sans Spiked for body text, with a drop cap in Kiln Serif Spiked to add a stylistic detail.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    {post.gallery.slice(0, 2).map((img, i) => (
                        <img key={i} src={img} alt={i === 0 ? "Colour palette" : "Typography choices"} title="View image"
                            className={imgClass} onClick={() => openModal(i)} />
                    ))}
                </div>
            </section>

            <section className="mb-10">
                <h3 id="portrait-landscape" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Portrait and Landscape Layouts
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
                    Both portrait and landscape versions of the poster were designed to show how the layout adapts across different formats. The two variations stay consistent in their use of colour, type and graphic elements, so the design holds together regardless of how it is displayed.
                </p>
                <img src={post.gallery[2]} alt="Portrait and landscape poster variations" title="View image"
                    className={imgClass} onClick={() => openModal(2)} />
            </section>

            <section className="mb-10">
                <h3 id="final-product" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
                    Final Product
                </h3>
                <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
                    The mockups show how the poster design translates into real environments, from bus stops to billboards, demonstrating how the concept works across different scales and contexts.
                </p>
                {/* Portrait row — both same height, cropped from bottom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="rounded-xl overflow-hidden h-[300px] md:h-[500px]">
                        <img src={post.gallery[3]} alt="Exhibition banner on building" title="View image"
                            className={`w-full h-full object-cover object-top transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                            onClick={() => openModal(3)} />
                    </div>
                    <div className="rounded-xl overflow-hidden h-[300px] md:h-[500px]">
                        <img src={post.gallery[6]} alt="Exhibition brochure mockup" title="View image"
                            className={`w-full h-full object-cover object-top transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                            onClick={() => openModal(6)} />
                    </div>
                </div>
                {/* Landscape row — both same height */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl overflow-hidden" style={{ height: "280px" }}>
                        <img src={post.gallery[4]} alt="Exhibition bus stop mockup" title="View image"
                            className={`w-full h-full object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                            onClick={() => openModal(4)} />
                    </div>
                    <div className="rounded-xl overflow-hidden" style={{ height: "280px" }}>
                        <img src={post.gallery[5]} alt="Exhibition billboard mockup" title="View image"
                            className={`w-full h-full object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
                            onClick={() => openModal(5)} />
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
                            ["Typography Selection", "Finding fonts that matched the Western theme without compromising legibility took several rounds of testing."],
                            ["Colour Balance", "Getting the burnt orange tones to work with the light stone background without overpowering the layout was a recurring adjustment."],
                            ["Cross-Format Consistency", "Maintaining a consistent look between the portrait and landscape versions required careful spacing and alignment work."],
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
                            ["Typography", "The chosen fonts reinforced the Western American feel while staying easy to read across both formats."],
                            ["Visual Clarity", "The contrast between background and text kept the design clear and readable even at larger display sizes."],
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
                        The design was inspired by a current artist's 1970s cowboy aesthetic and aimed to blend vintage Western references with a more contemporary layout. Getting the typography and colour combination right was central to making that balance work.
                    </p>
                    <p className="text-[#000] font-light leading-[1.85] text-base">
                        The main thing this project reinforced was the importance of adapting a design to different mediums while keeping it functional and visually effective throughout. Working across formats sharpened my eye for consistency.
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

export default PosterDesignTE;