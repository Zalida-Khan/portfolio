"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/work" },
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
    <Navbar isBordered className="fixed bg-white/50 backdrop-blur-lg top-0 left-0 w-full z-50">
      <NavbarContent className="flex items-center justify-between w-full">
        <NavbarBrand className="pt-5 pb-5 z-20 bg-transparent">
          <Link href="/" className="focus:outline-none focus:ring-0">
            <img
              src="/images/Monogram-logo.png"
              alt="a monogram logo with the letters z and k"
              className="h-10"
            />
          </Link>
        </NavbarBrand>

        <NavbarContent className="pt-5 pb-5 hidden sm:flex gap-6 justify-end w-full">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <NavbarItem key={index}>
                <Link
                  href={item.link}
                  onPress={() => { }}
                  className={`relative px-3 py-2 focus:outline-none focus:ring-0 ${isActive
                    ? "text-[#AAAC24] font-normal"
                    : "text-gray-800 hover:text-black group"
                    }`}
                >
                  {item.name}
                  {!isActive && (
                    <span className="absolute bottom-1 left-1/2 w-0 h-1 bg-[#AAAC24] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-3/4"></span>
                  )}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>

        <NavbarContent className="sm:hidden z-20 " justify="end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamMenu p-2 rounded-lg focus:outline-none focus:ring-0"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </NavbarContent>
      </NavbarContent>

      <div
        className={`pt-20 absolute top-0 left-0 w-full h-screen bg-white z-10 shadow-lg p-6 transition-all duration-300 ease-in-out transform flex flex-col ${isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none hidden"
          }`}
      >
        {menuItems.map((item, index) => {
          const isActive = pathname === item.link;
          return (
            <NavbarMenuItem
              key={index}
              className="list-none mobile-menu-item"
            >
              <Link
                href={item.link}
                onPress={() => setIsMenuOpen(false)}
                className={`block py-6 text-lg focus:outline-none focus:ring-0 ${isActive
                  ? "text-[#AAAC24] font-regular"
                  : "text-gray-800 hover:text-[#AAAC24]"
                  }`}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </div>

    </Navbar>
  );
}