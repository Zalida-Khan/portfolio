import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" bg-[#E4E0E5] tracking-wide text-left p-8 mt-8">
      <div className="containerFooter mx-auto flex justify-center flex flex-col sm:flex-row items-center sm:items-center space-y-8 sm:space-y-0 gap-x-20">

        <div className="flex flex-col items-start sm:items-start sm:w-5/12 md:w-6/12 lg:w-6/12 ">
          <Link href="/" className="flex flex-col items-start sm:items-start sm:w-3/12 ">
            <img
              src="/images/Monogram-logo.png"
              alt="a monogram logo with the letters z and k"
              className="h-10"
            />
          </Link>
          <p className="text-align-left mt-4 text-lg lg:text-xl text-[#6C5B7B]">
            <span>Feel free to <a
              href="mailto:zalidakhan13@gmail.com?subject=Let's Connect"
              className="text-[#6C5B7B] hover:text-[#AAAC24] underline text-md">
              reach out
            </a>—I’d love to connect and talk about how we can bring your vision to life. </span>
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start lg:w-1/12 sm:w-3/12">
          <div className="flex flex-col space-y-4">
            <a target="_blank" rel="noopener noreferrer"
            title="Opens in a new tab" href="https://www.linkedin.com/in/zalida-khan" className="text-[#6C5B7B] hover:text-[#AAAC24] flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a target="_blank"  rel="noopener noreferrer"
            title="Opens in a new tab" href="https://github.com/Zalida-Khan" className="text-[#6C5B7B] hover:text-[#AAAC24] flex items-center">
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
          <a target="_blank"  rel="noopener noreferrer"
            title="Opens in a new tab" href="https://drive.google.com/file/d/1iOja2qdkEP0DKixhSmP0-0tKKys304g5/view?usp=sharing" className="mt-4 border-2 border-[#6C5B7B] text-[#6C5B7B] hover:text-white px-6 py-2 rounded-full rounded hover:bg-[#AAAC24] hover:border-[#AAAC24] hover:text-[#fff]">
            Resume
          </a>
        </div>

      </div>

      <div className="text-md text-[#6C5B7B] text-center mt-8 font-normal tracking-wide">
  <p className="text-md opacity-90">
    Developed & designed by me! &copy; <span style={{ fontFamily: 'Zally, sans-serif' }} className="text-md opacity-90">2025 Zalida Khan</span>
  </p>
</div>

    </footer>
  );
}