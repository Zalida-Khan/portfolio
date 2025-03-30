import React from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

function MenuAnimation({ menuItems }) {
  return (
    <div className="flex min-w-fit flex-col gap-10 overflow-hidden mt-4">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.link} passHref>
          <div className="group flex items-center gap-1">
            <ArrowRight className="size-6 -translate-x-full text-black opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:text-[#aaac24] group-hover:opacity-100 md:size-12" />
            <h1 className="z-10 -translate-x-6 font-poppins font-normal text-black text-2xl transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:text-[#aaac24] dark:text-black md:-translate-x-12 md:text-6xl md:group-hover:translate-x-0">
              {item.name}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/work" },
    { name: "About", link: "/about" },
  ];

  React.useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed bg-white/50 backdrop-blur-lg top-0 left-0 w-full z-50">
      <div className="flex items-center pl-5 pr-5 sm:pl-5 sm:pr-5 justify-between w-full">
        <div className="pt-5 pb-5 z-20 bg-transparent">
          <a href="/" className="focus:outline-none focus:ring-0">
            <img
              src="/images/Monogram-logo.png"
              alt="a monogram logo with the letters z and k"
              className="h-10"
              loading="lazy"
              height={40}
            />
          </a>
        </div>

        <div className="pt-5 pb-5 hidden sm:flex gap-8 justify-end w-full">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <div key={index} className="relative">
                <Link href={item.link} passHref>
                  <div
                    className={`relative px-2 py-2 text-lg focus:outline-none focus:ring-0 ${isActive
                        ? "text-[#aaac24] font-normal cursor-default"
                        : "text-black group cursor-pointer"
                      }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-2 left-1/2 w-0 h-1 bg-[#aaac24] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 ${isActive ? "w-0" : "group-hover:w-4/5"
                        }`}
                    ></span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="sm:hidden z-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg focus:outline-none focus:ring-0 hamMenu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`pt-24 absolute top-0 left-0 w-full h-screen bg-white z-10 shadow-lg p-8 transition-all duration-300 ease-in-out transform flex flex-col ${isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none hidden"
          }`}
      >
        <MenuAnimation menuItems={menuItems} />
      </div>
    </nav>
  );
}