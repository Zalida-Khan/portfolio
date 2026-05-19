import { useState, useEffect } from "react";
import Modal from "../../components/work/Modal";
import TabsSwitcher from "../../components/work/TabsSwitcher";
import SliderSwitcher from "../../components/work/SliderSwitcher";
import posts from "../[slug]/posts";

function CaseStudy({ post }) {
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

  const imgClass = `shadow-sm w-full h-auto rounded-xl object-cover transition-all duration-300 ${isLgDevice ? "hover:opacity-80 cursor-pointer" : ""}`;

  const tabs = [
    {
      title: "Primary Persona",
      content: (
        <img src={post.gallery[0]} alt="Primary user persona" onClick={() => openModal(0)}
          title="View image" className={imgClass} />
      ),
    },
    {
      title: "Secondary Persona",
      content: (
        <img src={post.gallery[1]} alt="Secondary user persona" onClick={() => openModal(1)}
          title="View image" className={imgClass} />
      ),
    },
  ];

  return (
    <div>

      <section className="mb-10">
        <h3 id="problem-solution" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Problem and Solution
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base">
          {post.goal}
        </p>
      </section>

      <section className="mb-10">
        <h3 id="target-audience" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Target Audience
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-6">
          The app was designed with four main user groups in mind: family caregivers, friends stepping in to help, professional caregivers managing multiple clients, and long-distance caregivers who need to stay informed remotely. Understanding these groups shaped every design and development decision.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {post.targetAudience.map(({ group, description }) => (
            <div key={group} className="p-4 rounded-xl"
              style={{ background: "#FBFAF1", border: "1px solid rgba(26,66,138,0.07)" }}>
              <p className="font-syne font-semibold text-sm text-[#1A428A] mb-1.5">{group}</p>
              <p className="text-[#000] font-light text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 id="user-research" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          User Research and Personas
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-6">
          {post.purpose}
        </p>
        <TabsSwitcher tabs={tabs} />
      </section>

      <section className="mb-10">
        <h3 id="user-journey" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          User Journey Map
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-6">
          A customer journey map was created to trace how caregivers move through the app from start to finish. It helped identify the key steps and moments that mattered most to users, which directly informed design decisions throughout the project.
        </p>
        <img src={post.gallery[2]} alt="User journey map" onClick={() => openModal(2)}
          title="View image" className={imgClass} />
      </section>

      <section className="mb-10">
        <h3 id="design-process" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Design Process
        </h3>

        <div className="mb-8">
          <h4 id="lofi-styleguide" className="font-syne font-semibold text-base text-[#1A428A] mb-3">
            Lo-fi Wireframe and Style Guide
          </h4>
          <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
            The lo-fi wireframes laid out the app's structure with a focus on accessibility and ease of use from the start. Navigation flow and key user touchpoints were mapped out to address the needs of caregivers who may not be comfortable with technology. The style guide defines the visual language for the app, built around clarity, simplicity and guidance.
          </p>
          <iframe
            className="shadow-sm mb-6 w-full h-[400px] md:h-[600px] rounded-xl"
            src="https://embed.figma.com/design/7uFLSzWU4gw74WYdgnm9cW/Aether?node-id=49-10&embed-host=share"
            title="Aether Low Fidelity Prototype"
            allowFullScreen
          />
        </div>

        <div>
          <h4 id="iterations-testing" className="font-syne font-semibold text-base text-[#1A428A] mb-3">
            Iterations and Usability Testing
          </h4>
          <SliderSwitcher openModal={openModal} post={posts[4]}
            className={`shadow-sm w-full h-auto p-4 rounded-xl object-contain transition-all duration-300 ${isLgDevice ? "hover:opacity-80 cursor-pointer" : ""}`} />
        </div>
      </section>

      <section className="mb-10">
        <h3 id="development" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Development
        </h3>
        <h4 id="aether-blog" className="font-syne font-semibold text-base text-[#1A428A] mb-3">
          Aether Blog
        </h4>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
          The blog was built using HTML for structure, CSS for styling and JavaScript for interactive features including modals, dark and light mode and tab switching. Flexbox and Grid handle the responsive layout across screen sizes. It serves as a resource for caregivers to learn about the app and find practical tips.
        </p>
        <iframe
          src="https://aether-blog.vercel.app/"
          className="shadow-sm mb-6 w-full h-[400px] md:h-[600px] rounded-xl"
          style={{ border: 0 }}
          title="Aether Blog Website"
        />
      </section>

      <section className="mb-10">
        <h3 id="marketing-materials" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Marketing Materials
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
          Physical and printed materials were developed to support the app launch. Brochures, business cards, tote bags and stickers were all produced. The tote bags and stickers were particularly effective at drawing people in and getting them to engage with the app demo at events.
        </p>
        <img src={post.gallery[6]} alt="Marketing materials including brochure, cards, totes and stickers"
          onClick={() => openModal(6)} title="View image" className={imgClass} />
      </section>

      <section className="mb-10">
        <h3 id="key-takeaways" className="font-syne font-bold text-xl text-[#1A428A] mb-4">
          Key Takeaways
        </h3>
        <ul className="space-y-3">
          {[
            ["Team Collaboration", "Worked closely with teammates to share ideas and keep the work moving forward. Regular check-ins helped us catch issues early and stay aligned."],
            ["Time Management", "Balancing the design and development workload across a semester taught me to plan more carefully and build in time for iteration."],
            ["Marketing Strategy", "Creating reusable marketing templates early saved time and kept the visual identity consistent across all materials."],
            ["User-Centred Design", "Every design decision was checked against the needs of caregivers, which kept the interface grounded in real use cases rather than assumptions."],
            ["Technical Problem Solving", "Working across Figma, React Native and Expo Go required troubleshooting across different environments, which sharpened my ability to debug across tools."],
            ["Mobile-First Approach", "Designing for mobile from the start meant fewer adjustments later and a smoother experience across devices."],
          ].map(([title, desc]) => (
            <li key={title} className="flex items-start gap-3">
              <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-xl bg-[#AAAC24]" aria-hidden="true" />
              <p className="text-[#000] font-light leading-relaxed text-sm">
                <span className="font-semibold text-gray-800">{title}: </span>{desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h3 id="final-product" className="font-syne font-bold text-xl text-[#1A428A] mb-3">
          Final Product
        </h3>
        <p className="text-[#000] font-light leading-[1.85] text-base mb-5">
          The high-fidelity prototype brings together all the research, iteration and feedback from the project into a complete, interactive representation of the Aether app.
        </p>
        <iframe
          className="shadow-sm w-full h-[400px] md:h-[600px] rounded-xl"
          src="https://embed.figma.com/proto/nzhtkPCGzn1CFTVlAsZSFQ/Aether-App?node-id=2750-7065&scaling=scale-down&content-scaling=fixed&page-id=2750%3A6683&starting-point-node-id=2750%3A7345&embed-host=share"
          title="Aether High Fidelity Prototype"
          allowFullScreen
        />
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

export default CaseStudy;