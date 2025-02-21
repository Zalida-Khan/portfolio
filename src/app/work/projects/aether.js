import { useState, useEffect } from "react";
import Modal from "../../components/Modal.js";

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

  return (
    <div className="max-w-4xl mx-auto">
      <section>
        <h3 className="text-2xl font-semibold mb-2" style={{ color: '#1A428A' }}>Project Overview</h3>
        <p className="text-md text-black mb-6">{post.mandate}</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mt-8 mb-2" style={{ color: '#1A428A' }}>Problem & Solution</h3>
        <p className="text-md text-black mb-6">{post.goal}</p>
      </section>

      <section>
        <div className="w-full pb-4">
          <h4 className="text-xl font-semibold mb-2" style={{ color: '#AAAC24' }}>| Primary Persona</h4>
          <img
            src={post.gallery[0]}
            alt="Primary Persona"
            className="w-full h-auto rounded-2xl object-cover"
            onClick={() => openModal(0)}
            title="View image"
            style={{ cursor: isLgDevice ? "pointer" : "default" }}
          />
        </div>
        <div className="w-full">
          <h4 className="text-xl font-semibold mb-2" style={{ color: '#AAAC24' }}>| Secondary Persona</h4>
          <img
            src={post.gallery[1]}
            alt="Secondary Persona"
            className="w-full h-auto rounded-2xl object-cover"
            title="View image"
            onClick={() => openModal(1)}
            style={{ cursor: isLgDevice ? "pointer" : "default" }}
          />
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mt-8 mb-2" style={{ color: '#1A428A' }}>Design Process</h3>
        <div className="mt-4 grid grid-cols-1 gap-8">
          {post.process.map((step, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2" style={{ color: '#AAAC24' }}>| {step.step}</h4>
              <p className="text-md text-black mb-2">{step.description}</p>
              <img
                src={step.image}
                alt= "placeholder image"
                className="w-full h-auto mt-2 rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mt-8 mb-2" style={{ color: '#1A428A' }}>Key Takeaways</h3>
        <p className="text-md text-black mb-6">{post.outcomes}</p>
      </section>

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
      <h4 className="text-xl font-semibold mb-2" style={{ color: '#AAAC24' }}>| Final Product</h4>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        className="w-full h-[667px] sm:w-[375px] sm:h-[667px] lg:w-full md:h-[667px]"
        src="https://embed.figma.com/proto/nzhtkPCGzn1CFTVlAsZSFQ/Aether-App?node-id=2750-7065&scaling=scale-down&content-scaling=fixed&page-id=2750%3A6683&starting-point-node-id=2750%3A7345&embed-host=share"
        allowFullScreen
        title="Aether High Fidelity Prototype"
      ></iframe>
    </div>
  );
}

export default CaseStudy;