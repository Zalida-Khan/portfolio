import { useState, useEffect } from "react";
import Modal from "../../components/work/Modal";

function PosterDesign({ post }) {
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
        <h3 id="typography-colour" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Typography and Colour Palette
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base">
          Typography plays a central role in setting the album's tone. A bold pink title sits against softer pinks for headings and a peachy pink for body text, building a palette that feels cohesive and readable. The dark background makes all of these colours pop and adds to the overall emotional weight of the design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {post.gallery.slice(0, 2).map((img, i) => (
            <img key={i} src={img} alt={`Typography and colour ${i + 1}`} title="View image"
              className={imgClass} onClick={() => openModal(i)} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 id="visual-inspiration" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Visual Inspiration and Design Assets
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base">
          The visuals are built around symbolic imagery that reflects emotional vulnerability and uncertainty. A drowning figure and a boat on the edge of a waterfall speak to feeling overwhelmed, while concentric circles made holographic through Photoshop blending modes give the piece a surreal quality. Three-dimensional black birds represent change and the artist stepping out on their own. A Spotify barcode from the original album ties the design back to the real release.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {post.gallery.slice(2, 4).map((img, i) => (
            <img key={i} src={img} alt={`Design asset ${i + 1}`} title="View image"
              className={imgClass} onClick={() => openModal(2 + i)} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 id="original-redesigned" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Original and Redesigned Poster
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
          The first version struggled with legibility, particularly in the title. The redesign addressed this by adjusting the font while keeping the original imagery intact. Several rounds of iteration were needed to find the right balance between readability and emotional impact.
        </p>
        <img src={post.gallery[4]} alt="Original vs redesigned poster" title="View image"
          className={`w-full rounded-xl object-cover ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
          onClick={() => openModal(4)} />
      </section>

      <section className="mb-10">
        <h3 id="final-product" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Final Product
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
          The mockups show how the album cover translates across both vinyl and poster formats, bringing the concept to life in physical and printed media.
        </p>
        {/* Portrait posters — equal height, show from top */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="rounded-xl overflow-hidden" style={{ height: "500px" }}>
            <img src={post.gallery[5]} alt="Album poster design" title="View image"
              className={`w-full h-full object-fill object-top transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
              onClick={() => openModal(5)} />
          </div>
          <div className="rounded-xl overflow-hidden" style={{ height: "500px" }}>
            <img src={post.gallery[6]} alt="Bi-fold poster design" title="View image"
              className={`w-full h-full object-cover object-top transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
              onClick={() => openModal(6)} />
          </div>
        </div>
        {/* Landscape vinyl mockups */}
        <div className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-xl" style={{ height: "260px" }}>
            <img src={post.gallery[7]} alt="Vinyl record design" title="View image"
              className={`w-full h-full object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
              onClick={() => openModal(7)} />
          </div>
          <div className="overflow-hidden rounded-xl" style={{ height: "260px" }}>
            <img src={post.gallery[8]} alt="Vinyl mockup" title="View image"
              className={`w-full h-full object-cover transition-all duration-300 ${isLgDevice ? "cursor-pointer hover:opacity-80" : ""}`}
              onClick={() => openModal(8)} />
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
              ["Finding the Right Tone", "Getting the balance between emotional depth and visual strength was difficult. People interpreted the design in different ways, which made it hard to know if the intended meaning was coming through."],
              ["Visuals and Message Alignment", "Making sure the imagery accurately reflected the artist's personal journey took a lot of thought and revision."],
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
              ["Imagery Selection", "The symbols and photographs aligned well with the emotional tone and added depth to the overall concept."],
              ["Typography", "The final font pairing landed well, especially compared to the earlier version where the title was hard to read."],
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
            Every decision in this project, from the typography to the colour palette, was made with the artist's story in mind. Keeping that thread consistent across multiple iterations was the main challenge, and instructor feedback helped sharpen the legibility without losing the emotional tone.
          </p>
          <p className="text-[#000] font-light leading-[1.85] text-base">
            The biggest takeaway was how much a design changes when you see it through someone else's eyes. Staying open to that kind of feedback and being willing to revise is what got the design to a place that felt both clear and meaningful.
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

export default PosterDesign;