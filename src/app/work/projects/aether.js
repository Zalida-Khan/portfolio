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
        <h3 className="text-2xl font-semibold mt-8 mb-2" style={{ color: '#1A428A' }}>User Personas</h3>
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
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#1A428A' }}>{step.step}</h4>
              <p className="text-md text-black mb-2">{step.description}</p>
              <img
                src={step.image}
                alt={`${step.step} image`}
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
    </div>
  );
}

export default CaseStudy;