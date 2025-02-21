import React from 'react';

function Modal({ image, onClose, onNext, onPrevious, disableNext, disablePrevious }) {
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#efefef] p-6 pr-16 pl-16 rounded-3xl mr-10 ml-10 w-full max-w-6xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-[#AAAC24] border-2 border-[#AAAC24] pr-4 pl-4 rounded-full hover:bg-[#1A428A] hover:text-white transition-all duration-300"
        >
          &#x2715;
        </button>

        <img src={image} alt="Modal View" className="w-full max-h-[75vh] object-contain rounded-3xl shadow-lg" />

        <button
          onClick={onPrevious}
          disabled={disablePrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#1A428A] outline outline-2 outline-[#1A428A] bg-[#1A428A] bg-opacity-10 p-2 rounded-full hover:bg-[#1A428A] hover:text-white disabled:bg-[#AAAC24] disabled:bg-opacity-60 disabled:outline-[#AAAC24] disabled:outline-opacity-10 disabled:text-[#fff] disabled:text-opacity-40 transition-all duration-300"
        >
          Prev
        </button>

        <button
          onClick={onNext}
          disabled={disableNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1A428A] outline outline-2 outline-[#1A428A] bg-[#1A428A] bg-opacity-10 p-2 rounded-full hover:bg-[#1A428A] hover:text-white disabled:bg-[#AAAC24] disabled:bg-opacity-60 disabled:outline-[#AAAC24] disabled:outline-opacity-10 disabled:text-[#fff] disabled:text-opacity-40 transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Modal;