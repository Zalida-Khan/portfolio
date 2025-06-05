import { useState, useEffect } from "react";
import Modal from "../../components/work/Modal";
import TabsSwitcher from "../../components/work/TabsSwitcher";
import SliderSwitcher from "../../components/work/SliderSwitcher";
import posts from "../[slug]/posts";

function CaseStudy({ post }) {
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

  const tabs = [
    {
      title: "Primary Persona",
      content: (
        <div>
          <img
            src={post.gallery[0]}
            alt="Primary Persona"
            onClick={() => openModal(0)}
            title="View image"
            className={`shadow-lg w-full h-auto rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? "hover:opacity-80 cursor-pointer" : ""}`}
          />
        </div>
      ),
    },
    {
      title: "Secondary Persona",
      content: (
        <div>
          <img
            src={post.gallery[1]}
            alt="Secondary Persona"
            onClick={() => openModal(1)}
            title="View image"
            className={`shadow-lg w-full h-auto rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? "hover:opacity-80 cursor-pointer" : ""}`}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <section>
        <h3 className="text-2xl font-semibold mb-2" style={{ color: "#1A428A" }}>
          | Project Overview
        </h3>
        <p className="text-md text-black mb-4">{post.overview}</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mt-8 mb-2" style={{ color: "#1A428A" }}>
          | Problem & Solution
        </h3>
        <p className="text-md text-black ">{post.goal}</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mt-8 mb-2" style={{ color: "#1A428A" }}>
          Target Audience/ User Research
        </h3>
        <h4 className="text-xl font-semibold mb-2" style={{ color: "#AAAC24" }}>
          Personas
        </h4>
        <p className="text-md text-black mb-6">{post.purpose}</p>
        <TabsSwitcher tabs={tabs} />
      </section>

      <section>
        <section>
          <h3 className="text-2xl font-semibold mt-8 mb-2" style={{ color: "#1A428A" }}>
            | Workflow
          </h3>
          <h4 className="text-xl font-semibold mb-2" style={{ color: "#AAAC24" }}>
            User Journey Map
          </h4>
          <p className="text-md text-black mb-6">
            To make the design process smoother and the app easier to use, a customer journey map was created. It shows how caregivers move through the app, highlighting key steps and moments that matter most—helping us create a better overall experience.
          </p>
          <img
            src={post.gallery[2]}
            alt="Marketing Materials"
            onClick={() => openModal(2)}
            title="View image"
            className={`shadow-lg w-full h-auto rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? "hover:opacity-80 cursor-pointer" : ""
              }`}
          />
        </section>

        <h3 className="text-2xl font-semibold mt-8 mb-2" style={{ color: "#1A428A" }}>
          | Design Process
        </h3>
        <h4 className="text-xl font-semibold mb-2" style={{ color: "#AAAC24" }}>
          Lo-fi Wireframe | Style Guide
        </h4>
        <p className="text-md text-black mb-6">
          The Lo-fi Wireframe outlines the app’s structure with a focus on accessibility and ease of use. It maps out the key features that address user pain points, such as navigation flow and user touchpoints, especially tailored for caregivers.
          The Style Guide defines Aether’s visual language and brand personality.
          The visual system for Aether emphasizes clarity, simplicity, and guidance—core principles that shaped the app’s identity.        </p>
        <iframe
          className="shadow-lg mb-6 w-full h-[400px] sm:w-full flex justify-center lg:w-full md:w-full md:h-[600px] lg:h-[600px] rounded-3xl"
          src="https://embed.figma.com/design/7uFLSzWU4gw74WYdgnm9cW/Aether?node-id=49-10&embed-host=share"
          title="Aether Low Fidelity Prototype"
          allowFullScreen
        ></iframe>
        <h4 className="text-xl font-semibold" style={{ color: "#AAAC24" }}>
          Iterations | Usability Testing
        </h4>
        <SliderSwitcher openModal={openModal} post={posts[4]}
          className={`shadow-lg w-full h-auto p-4 rounded-2xl object-contain transition-all duration-300 ${isLgDevice ? "hover:opacity-80 cursor-pointer" : ""}`} />
      </section>

      <section>
        <h3 className="text-2xl font-semibold mt-6 mb-2" style={{ color: "#1A428A" }}>
          | Development
        </h3>
        <h4 className="text-xl font-semibold mb-2" style={{ color: "#AAAC24" }}>
          Aether Blog
        </h4>
        <p className="text-md text-black mb-6">
          This blog was built using HTML for structure, CSS for styling, and JavaScript for interactivity, such as modals and responsive layouts. The combination of Flexbox and Grid ensures a responsive design across devices, while JavaScript handles dynamic content like image viewing, dark and light mode and tab switching.
        </p>
        <iframe
          src="https://aether-blog.vercel.app/"
          className="shadow-lg mb-6 w-full h-[400px] sm:w-full flex justify-center lg:w-full md:w-full md:h-[600px] lg:h-[600px] rounded-3xl"
          style={{ border: 1 }}
          title="Aether Blog Website"
        >
        </iframe>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mt-8 mb-2" style={{ color: "#1A428A" }}>
          | Marketing Materials
        </h3>
        <h4 className="text-xl font-semibold mb-2" style={{ color: "#AAAC24" }}>
          Brochure | Business Cards | Tote Designs | Stickers
        </h4>
        <p className="text-md text-black mb-6">
          These marketing materials were created to promote our app. The tote bags and stickers were especially effective in catching people's attention and encouraging them to check out our app demo.
        </p>
        <img
          src={post.gallery[6]}
          alt="Marketing Materials"
          onClick={() => openModal(6)}
          title="View image"
          className={`shadow-lg w-full h-auto rounded-2xl object-cover transition-all duration-300 ${isLgDevice ? "hover:opacity-80 cursor-pointer" : ""
            }`}
        />
      </section>

      <section>
        <h3 className="text-2xl font-semibold mt-6 mb-4" style={{ color: "#1A428A" }}>
          | Key Takeaways
        </h3>
        <ul className="space-y-3 text-black">
          <li className="flex items-start gap-2">
            <span>&#8594;</span>
            <span><span className="font-semibold">Team Collaboration:</span> Worked well with the team, shared ideas, and helped improve the work process.</span>
          </li>
          <li className="flex items-start gap-2">
            <span>&#8594;</span>
            <span><span className="font-semibold">Time Management:</span> Learned to plan better and keep track of deadlines to stay on top of tasks.</span>
          </li>
          <li className="flex items-start gap-2">
            <span>&#8594;</span>
            <span><span className="font-semibold">Marketing Strategy:</span> Gained hands-on experience in creating marketing templates that saved time and ensured consistency.</span>
          </li>
          <li className="flex items-start gap-2">
            <span>&#8594;</span>
            <span><span className="font-semibold">User-Centered Design:</span> Applied simple design principles to make the app easy to use and enjoyable for everyone.</span>
          </li>
          <li className="flex items-start gap-2">
            <span>&#8594;</span>
            <span><span className="font-semibold">Customization & Personalization:</span> Used design flexibility to help users make the app more personal and meet their needs.</span>
          </li>
          <li className="flex items-start gap-2">
            <span>&#8594;</span>
            <span><span className="font-semibold">Technical Problem-Solving:</span> Used modern tools to fix issues and make the app faster and more efficient.</span>
          </li>
          <li className="flex items-start gap-2">
            <span>&#8594;</span>
            <span><span className="font-semibold">Mobile-First Approach:</span> Designed with mobile in mind first, ensuring smooth performance on all devices.</span>
          </li>
        </ul>
      </section>


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

      <h3 className="text-2xl font-semibold mt-6 mb-4" style={{ color: "#1A428A" }}>
        | Final Product
      </h3>
      <iframe
        className="shadow-lg w-full h-[400px] sm:w-full flex justify-center lg:w-full md:w-full md:h-[600px] lg:h-[600px] rounded-3xl"
        src="https://embed.figma.com/proto/nzhtkPCGzn1CFTVlAsZSFQ/Aether-App?node-id=2750-7065&scaling=scale-down&content-scaling=fixed&page-id=2750%3A6683&starting-point-node-id=2750%3A7345&embed-host=share"
        title="Aether High Fidelity Prototype"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default CaseStudy;