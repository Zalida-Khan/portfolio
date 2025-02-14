import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" bg-[#E4E0E5] text-left p-8 mt-8">
      <div className="container-footer mx-auto flex flex-col sm:flex-row justify-center items-center sm:items-start space-y-8 sm:space-y-0 gap-x-20"> {/* Added gap-x-8 here */}

        <div className="flex flex-col items-start sm:items-start sm:w-5/12 md:w-6/12 lg:w-auto "> {/* Adjusted width here */}
          <Link href="/" className="flex flex-col items-start sm:items-start sm:w-3/12 lg:w-3/12">
            <img
              src="/images/Monogram-logo.png"
              alt="a monogram logo with the letters z and k"
              className="h-10"
            />
          </Link>
          <p className="text-align-left text-md text-[#6C5B7B]">
            <span>Feel free to <a
              href="mailto:your-email@example.com?subject=Let's Connect"
              className="text-[#6C5B7B] hover:text-[#AAAC24] underline text-md">
              reach out
            </a>—I’d love to connect and talk about how we can bring your vision to life. </span>
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:w-3/12">
          <div className="flex flex-col space-y-4">
            <a href="https://www.linkedin.com" className="text-[#6C5B7B] hover:text-[#AAAC24] flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a href="https://github.com" className="text-[#6C5B7B] hover:text-[#AAAC24] flex items-center">
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
          <a href="/resume.pdf" className="mt-4 border-2 border-[#6C5B7B] text-[#6C5B7B] hover:text-white px-6 py-2 rounded-full rounded hover:bg-[#AAAC24] hover:border-[#AAAC24] hover:text-[#fff]">
            Resume
          </a>
        </div>

      </div>

      <div className="text-xs text-[#6C5B7B] text-center mt-8">
        <p>All rights reserved &copy; 2025 Zalida Khan</p>
      </div>
    </footer>
  );
}