import { useState, useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  duration = 100,
  className,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), duration);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [duration]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-${duration} ease-out ${
        isVisible ? "opacity-100 translate-y-5" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}