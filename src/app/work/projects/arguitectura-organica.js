import { useState } from "react";

function MagazineDesign({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const openModal = (index) => {
        setModalImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const goToNext = () => {
        if (modalImageIndex < post.gallery.length - 1) {
            setModalImageIndex(modalImageIndex + 1);
        }
    };

    const goToPrevious = () => {
        if (modalImageIndex > 0) {
            setModalImageIndex(modalImageIndex - 1);
        }
    };

    return (
        <div>
            <div className="mt-8">
                <img src={post.gallery[0]}
                    alt={`Gallery image 1`}
                    className="w-full h-auto rounded-lg object-cover cursor-pointer"
                    onClick={() => openModal(0)} />
            </div>
            <h2 className="mt-8 text-[#1A428A] text-2xl font-semibold">{post.heading}</h2>
            <p className="text-[#000] text-md mt-2">{post.overview}</p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {post.gallery.slice(1).map((image, index) => (
                    <div key={index}
                        className={`relative ${index === 0 ? "lg:col-span-2" : ""}`}>
                        <img src={image}
                            alt={`Gallery image ${index + 2}`}
                            className="w-full h-auto lg:h-full rounded-lg object-cover cursor-pointer"
                            onClick={() => openModal(index + 1)} />
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#efefef] p-6 pr-16 pl-16 rounded-3xl w-full max-w-4xl relative">
                        <button onClick={closeModal}
                            className="absolute top-3 right-3 text-white bg-[#AAAC24] border-2 border-[#AAAC24] pr-4 pl-4 rounded-full hover:bg-[#1A428A] hover:text-white transition-all duration-300"
                        >X</button>

                        <img src={post.gallery[modalImageIndex]}
                            alt="Modal view"
                            className="max-w-full h-auto object-contain rounded-3xl"
                        />

                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                            <button onClick={goToPrevious}
                                disabled={modalImageIndex === 0}
                                className="text-[#1A428A] outline outline-2 outline-[#1A428A] bg-[#1A428A] bg-opacity-10 p-2 rounded-full hover:bg-[#1A428A] hover:text-white disabled:bg-[#AAAC24] disabled:bg-opacity-60 disabled:outline-[#AAAC24] disabled:outline-opacity-10 disabled:text-[#fff] disabled:text-opacity-40 transition-all duration-300"
                            >Prev</button>
                        </div>

                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <button onClick={goToNext}
                                disabled={modalImageIndex === post.gallery.length - 1}
                                className="text-[#1A428A] outline outline-2 outline-[#1A428A] bg-[#1A428A] bg-opacity-10 p-2 rounded-full hover:bg-[#1A428A] hover:text-white disabled:bg-[#AAAC24] disabled:bg-opacity-60 disabled:outline-[#AAAC24] disabled:outline-opacity-10 disabled:text-[#fff] disabled:text-opacity-40 transition-all duration-300"
                            >Next</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MagazineDesign;
