"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MagazineDesign from "../projects/arguitectura-organica";
import ProductDesign from "../projects/sugar-magic";
import PosterDesign from "../projects/the-waterfall";
import PosterDesignTE from "../projects/the-exhibition";
import CaseStudy from "../projects/aether";
import MenuDesign from "../projects/the-yolk";
import posts from "./posts";
import { AiOutlineRight } from "react-icons/ai";

const projectComponents = {
  "Magazine Design": MagazineDesign,
  "Logo and Product Design": ProductDesign,
  "Poster & Vinyl Design (Redesign)": PosterDesign,
  "Poster Design": PosterDesignTE,
  "Mobile App": CaseStudy,
  "Branding & Menu Design": MenuDesign,
};

function PostPage() {
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
    { label: "🔗 Digital Version", url: post.links1 },
    { label: "🔗 Blog", url: post.links2 },
    { label: "🔗 Styleguide", url: post.links3 },
    { label: "🔗 Hi-fi Prototype", url: post.links4 },
  ].filter((link) => link.url);

  const renderLinks = (links) => (
    <ul className="text-[#1A428A] cursor-hand flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 lg:col-span-2">
        {links.length > 0 && renderLinks(links)}
        </ul>
        );

  return (
    <div className="content bg-white text-[#1A428A] min-h-screen font-poppins">
      <Header />

      <h1 className="text-4xl text-[#1A428A] lg:text-5xl font-semibold text-center">{post.title}</h1>
      <p className="text-center text-black p-3 pt-2">
        {Array.isArray(post.category) ? post.category.join(" | ") : post.category}
      </p>

      <img src={post.image} alt={post.title} className="w-full h-[40dvh] object-cover md:h-[500px] md:object-cover lg:h-[600px] lg:object-cover  rounded-t-3xl  mt-8 lg:mt-8 md:mt-2 mb-4 lg:mb-8" />

      <main className="max-w-4xl mx-auto p-6 mb-20  rounded-3xl">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <ul className="space-y-5">
            <li><strong className="text-lg lg:text-xl">Project Type:</strong><br/><span className="text-[#000]">{post.projectType}</span></li>
            <li><strong className="text-lg lg:text-xl">Timeline:</strong><br/><span className="text-[#000]">{post.timeline}</span></li>
            <li><strong className="text-lg lg:text-xl">Role(s):</strong><br/><span className="text-[#000]">{post.role}</span></li>
          </ul>
          <ul className="space-y-5 lg:col-span-2">
            <li><strong className="text-lg lg:text-xl">Tools Used:</strong><br/><span className="text-[#000]">{post.tools}</span></li>
            <li><strong className="text-lg lg:text-xl">Mandate:</strong><br/><span className="text-[#000]">{post.mandate}</span></li>

            {links.length > 0 && (
  <ul className="text-[#1A428A] cursor-hand flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 lg:col-span-2">
    {links.map((link, index) => (
      <li key={index}>
        <a
          className="text-[#AAAC24] hover:text-[#1A428A] text-md flex items-center"
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
)}
          </ul>
        </div>

        <h3 className="text-[#1A428A] text-2xl lg:text-3xl font-semibold mt-8">{post.subheading}</h3>

        {ProjectComponent && <ProjectComponent post={post} />}

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => router.push(`/work/${previousPost?.slug}`)}
            disabled={!previousPost}
            className="text-black hover:text-[#AAAC24] bg-transparent disabled:text-gray-400 flex items-center gap-2"
          >
            &#8592; {previousPost?.title || "Back"}
          </button>

          <button
            onClick={() => router.push(`/work/${nextPost?.slug}`)}
            disabled={!nextPost}
            className="text-black hover:text-[#AAAC24] bg-transparent disabled:text-gray-400 flex items-center gap-2"
          >
            {nextPost?.title || "Next"} &#8594;
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PostPage;