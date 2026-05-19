"use client";
import React, { useEffect, useCallback } from "react";

function Modal({ image, onClose, onNext, onPrevious, disableNext, disablePrevious }) {

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight" && !disableNext) onNext();
    if (e.key === "ArrowLeft" && !disablePrevious) onPrevious();
  }, [onClose, onNext, onPrevious, disableNext, disablePrevious]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{ background: "rgba(245,243,239,0.98)" }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-[#1A428A]/5 focus:outline-none"
        style={{ border: "1px solid rgba(26,66,138,0.2)", color: "#1A428A" }}
        aria-label="Close image viewer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Prev button */}
      <button
        onClick={onPrevious}
        disabled={disablePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#1A428A]/5"
        style={{ border: "1px solid rgba(26,66,138,0.2)", color: "#1A428A" }}
        aria-label="Previous image"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Image */}
      <div className="w-full max-w-5xl mx-16 flex items-center justify-center">
        <img
          src={image}
          alt="Full size view"
          className="max-h-[88vh] max-w-full rounded-xl shadow-2xl object-contain"
          style={{ userSelect: "none" }}
        />
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        disabled={disableNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[#1A428A]/5"
        style={{ border: "1px solid rgba(26,66,138,0.2)", color: "#1A428A" }}
        aria-label="Next image"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Keyboard hint */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-poppins"
        style={{ color: "rgba(26,66,138,0.35)" }}
        aria-hidden="true"
      >
        ← → to navigate · Esc to close
      </div>
    </div>
  );
}

export default Modal;