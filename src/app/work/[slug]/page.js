"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../../components/all-pages/Header";
import Footer from "../../components/all-pages/Footer";
import MagazineDesign from "../projects/arguitectura-organica";
import ProductDesign from "../projects/sugar-magic";
import PosterDesign from "../projects/the-waterfall";
import PosterDesignTE from "../projects/the-exhibition";
import CaseStudy from "../projects/aether";
import MenuDesign from "../projects/the-yolk";
import posts from "./posts";
import { AiOutlineRight } from "react-icons/ai";
import FadeIn from "../../components/all-pages/fadeIn";

const projectComponents = {
  "Magazine Design": MagazineDesign,
  "Logo and Product Design": ProductDesign,
  "Poster & Vinyl Design (Redesign)": PosterDesign,
  "Poster Design": PosterDesignTE,
  "Mobile App": CaseStudy,
  "Branding & Menu Design": MenuDesign,
};

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setPost(posts.find((p) => p.slug === slug) || null);
  }, [slug]);

  if (!post) return <div>Post not found.</div>;

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = posts[currentIndex + 1];
  const previousPost = posts[currentIndex - 1];

  const ProjectComponent = projectComponents[post.projectType] || null;

  const links = [
    { label: "🔗 Digital Version", url: post.links, visibleOn: "sm" },
    { label: "🔗 Digital Version", url: post.links1, visibleOn: "lg" },
    { label: "🔗 Blog", url: post.links2 },
    { label: "🔗 Styleguide", url: post.links3 },
    { label: "🔗 Hi-fi Prototype", url: post.links4 },
  ].filter((link) => link.url);

  const renderLinks = (links) => (
    <ul className="text-[#1A428A] cursor-pointer flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:gap-x-4 lg:col-span-2">
      {links.map((link, index) => (
        <li key={index} className={`${link.visibleOn === "lg" ? "hidden lg:block" : ""} ${link.visibleOn === "sm" ? "block sm:block lg:hidden" : ""}`}>
          <a
            className="text-[#AAAC24] hover:text-[#1A428A] text-md flex items-center transition-transform duration-200 hover:-translate-y-1"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Opens in a new tab"
            aria-label={`Open ${link.label} in a new tab`}
          >
            {link.label} <AiOutlineRight />
          </a>
        </li>
      ))}
    </ul>
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="containerWork bg-white text-[#1A428A] min-h-screen font-poppins">
      <div className="w-full max-w-4xl mx-auto mt-6 px-4 mb-4">
        <button
          onClick={() => {
            router.push('/work');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-black hover:text-[#AAAC24] bg-transparent flex items-center gap-2 transition-transform duration-200 hover:-translate-y-1 focus:outline-none active:translate-y-0.5"
        >
          &#8592; <span className="text-base sm:text-lg">Back to Work</span>
        </button>
      </div>
      <Header />
      <h1 className="text-4xl text-[#1A428A] lg:text-5xl font-semibold text-center">{post.title}</h1>
      <p className="text-center text-black p-3 pt-2">
        {Array.isArray(post.category) ? post.category.join(" | ") : post.category}
      </p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[40dvh] object-cover md:h-[500px] md:object-cover lg:h-[600px] lg:object-cover rounded-t-3xl mt-8 lg:mt-8 md:mt-2 mb-4 lg:mb-8"
      />

      <main className="max-w-4xl mx-auto p-6  mb-20 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <ul className="space-y-5">
            <li><strong className="text-lg lg:text-xl">Project Type:</strong><br /><span className="text-[#000]">{post.projectType}</span></li>
            <li><strong className="text-lg lg:text-xl">Timeline:</strong><br /><span className="text-[#000]">{post.timeline}</span></li>
            <li><strong className="text-lg lg:text-xl">Role(s):</strong><br /><span className="text-[#000]">{post.role}</span></li>
          </ul>
          <ul className="space-y-5 lg:col-span-2">
            <li><strong className="text-lg lg:text-xl">Tools Used:</strong><br /><span className="text-[#000]">{post.tools}</span></li>
            <li><strong className="text-lg lg:text-xl">Mandate:</strong><br /><span className="text-[#000]">{post.mandate}</span></li>
            {links.length > 0 && renderLinks(links)}
          </ul>
        </div>

        <h3 className="text-[#1A428A] text-2xl lg:text-3xl font-semibold mt-8">{post.subheading}</h3>
        {ProjectComponent && <ProjectComponent post={post} />}
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={() => {
              if (previousPost) {
                router.push(`/work/${previousPost.slug}`);
                scrollToTop();
              }
            }}
            disabled={!previousPost}
            className={`text-black bg-transparent flex items-center gap-2 disabled:text-gray-400 focus:outline-none active:translate-y-0.5 ${previousPost ? 'hover:text-[#AAAC24] transform transition-transform duration-200 hover:-translate-y-1' : ''
              }`}
          >
            &#8592; {previousPost?.title || "Back"}
          </button>
          <button
            onClick={() => {
              if (nextPost) {
                router.push(`/work/${nextPost.slug}`);
                scrollToTop();
              }
            }}
            disabled={!nextPost}
            className={`text-black bg-transparent flex items-center gap-2 disabled:text-gray-400 focus:outline-none active:translate-y-0.5 ${nextPost ? 'hover:text-[#AAAC24] transform transition-transform duration-200 hover:-translate-y-1' : ''
              }`}
          >
            {nextPost?.title || "Next"} &#8594;
          </button>
        </div>
      </main>

      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
}