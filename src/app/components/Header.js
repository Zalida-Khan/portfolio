"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/work" },
    // { name: "Gallery", link: "/gallery" },
    { name: "About", link: "/about" },
  ];

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed bg-white/50 backdrop-blur-lg top-0 left-0 w-full z-50">
      <div className="flex items-center pl-5 pr-5 justify-between w-full">
        <div className="pt-5 pb-5 z-20 bg-transparent">
          <a href="/" className="focus:outline-none focus:ring-0">
            <img
              src="/images/Monogram-logo.png"
              alt="a monogram logo with the letters z and k"
              className="h-10"
            />
          </a>
        </div>

        <div className="pt-5 pb-5 hidden sm:flex gap-6 justify-end w-full">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <div key={index} className="relative">
                <a
                  href={item.link}
                  className={`relative px-3 py-2 text-md font-syne focus:outline-none focus:ring-0 ${
                    isActive
                      ? "text-[#AAAC24] font-normal"
                      : "text-gray-800 hover:text-black group"
                  }`}
                >
                  {item.name}
                  {!isActive && (
                    <span className="absolute bottom-1 left-1/2 w-0 h-1 bg-[#AAAC24] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-3/4"></span>
                  )}
                </a>
              </div>
            );
          })}
        </div>

        <div className="sm:hidden z-20" justify="end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg focus:outline-none focus:ring-0 hamMenu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`pt-20 absolute top-0 left-0 w-full h-screen bg-white z-10 shadow-lg p-6 transition-all duration-300 ease-in-out transform flex flex-col ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none hidden"
        }`}
      >
        {menuItems.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <div key={index} className="mt-5 list-none mobileMenuItem">
              <a
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-4 text-xl font-medium font-syne focus:outline-none focus:ring-0 ${
                  isActive
                    ? "text-[#AAAC24] text-xl "
                    : "text-gray-900 hover:text-[#AAAC24]"
                }`}
              >
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
