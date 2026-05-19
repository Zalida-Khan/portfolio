"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [usingMouse, setUsingMouse] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home",  link: "/" },
    { name: "Work",  link: "/work" },
    { name: "About", link: "/about" },
  ];

  // Detect mouse vs keyboard — hide focus ring on mouse click only
  React.useEffect(() => {
    const onMouseDown = () => setUsingMouse(true);
    const onKeyDown = () => setUsingMouse(false);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen]);

  // Solidify nav on scroll — Jetson-style
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  return (
    <>
      {usingMouse && (
        <style>{`* :focus { outline: none !important; box-shadow: none !important; }`}</style>
      )}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16"
        style={{
          background: scrolled
            ? "rgba(251,250,241,0.97)"
            : "rgba(251,250,241,0.82)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(26,66,138,0.07)",
          transition: "background 0.3s ease",
        }}
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto h-full px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="z-20 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#1A428A] focus:ring-offset-2 rounded"
            aria-label="Zalida Khan — home"
          >
            <img
              src="/images/Monogram-logo.png"
              alt="ZK monogram logo"
              className="h-9 w-auto"
              loading="eager"
              height={36}
            />
          </a>

          {/* Desktop centre links */}
          <ul
            className="hidden sm:flex absolute left-1/2 -translate-x-1/2 gap-1 list-none"
            role="list"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A428A] ${
                      isActive
                        ? "text-[#1A428A] font-semibold"
                        : "text-[#000] hover:text-[#1A428A]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                    {isActive && (
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-[#AAAC24] rounded-sm"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="mailto:zalidakhan13@gmail.com?subject=Let's Connect"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-xl border-2 border-[#1a428a] text-[#1a428a] font-semibold font-poppins text-sm tracking-wide backdrop-blur-sm bg-transparent transition-all duration-300 hover:border-[#1a428a] hover:bg-[#1a428a]/60 hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label="Email Zalida to connect"
          >
            Let&apos;s Talk
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden z-20 flex flex-col gap-[5px] p-1.5 bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A428A] rounded"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className="block w-[22px] h-[1.5px] bg-gray-800 rounded-xl transition-all duration-300"
              style={{ transform: isMenuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }}
            />
            <span
              className="block w-[22px] h-[1.5px] bg-gray-800 rounded-xl transition-all duration-300"
              style={{ opacity: isMenuOpen ? 0 : 1, transform: isMenuOpen ? "scaleX(0)" : "none" }}
            />
            <span
              className="block w-[22px] h-[1.5px] bg-gray-800 rounded-xl transition-all duration-300"
              style={{ transform: isMenuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
            />
          </button>

        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-10 sm:hidden"
        style={{
          background: "#FBFAF1",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "all" : "none",
          transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav aria-label="Mobile navigation">
          {menuItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.link}
                href={item.link}
                className={`group flex items-center gap-1 py-1 focus:outline-none ${
                  isActive ? "text-[#1A428A]" : "text-gray-900 hover:text-[#AAAC24]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <ArrowRight
                  className="size-10 md:size-12 -translate-x-full opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                  style={{ color: isActive ? "#1A428A" : "#AAAC24" }}
                />
                <span
                  className="font-syne font-extrabold leading-none -translate-x-6 transition-transform duration-300 ease-out group-hover:translate-x-0 md:-translate-x-12"
                  style={{ fontSize: "clamp(2.5rem,11vw,5rem)" }}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom links */}
        <div
          className="absolute bottom-8 left-10 right-10 flex justify-between items-center border-t border-[#1A428A]/10 pt-5"
        >
          <a
            href="https://linkedin.com/in/zalida-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-800 hover:text-[#1A428A] transition-colors focus:outline-none"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Zalida-Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-800 hover:text-[#1A428A] transition-colors focus:outline-none"
          >
            GitHub ↗
          </a>
          <a
            href="mailto:zalidakhan13@gmail.com"
            className="text-sm font-medium text-gray-800 hover:text-[#1A428A] transition-colors focus:outline-none"
          >
            Email ↗
          </a>
        </div>
      </div>
    </>
  );
}