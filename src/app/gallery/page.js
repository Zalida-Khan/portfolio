// "use client";

// import { useState, useEffect } from "react";
// import "img-comparison-slider/dist/styles.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// export default function Gallery() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     useEffect(() => {
//         import("img-comparison-slider").then((module) => {
//             if (!customElements.get("img-comparison-slider")) {
//                 customElements.define("img-comparison-slider", module.default);
//             }
//         });
//     }, []);

//     return (
//         <div>
//             <div className="bg-white text-[#1A428A] min-h-screen font-poppins pt-16 flex flex-col items-center">
//                 <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//                 <main className="w-full max-w-4xl p-4 flex flex-col items-center">
//                     <h1 className="text-[#1A428A] text-6xl font-semibold text-center font-[Syne] my-6">
//                         Gallery
//                     </h1>

//                     {/* Image Comparison Section */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 w-full px-4 mb-20">

//                         {/* Camera Comparison */}
//                         <div className="w-full flex justify-center relative">
//                             <img-comparison-slider className="w-full max-w-[600px] rounded-3xl border-2 border-gray-300">
//                                 <img
//                                     slot="first"
//                                     src="/images/gallery/Original-Camera.webp"
//                                     alt="Original Camera"
//                                     className="w-full md:mt-10 md:h-[400px] object-cover rounded-3xl"
//                                 />
//                                 <img
//                                     slot="second"
//                                     src="/images/gallery/Hyper_Realist-Camera.webp"
//                                     alt="Hyper Realist Camera"
//                                     className="w-full md:mt-10 md:h-[400px] object-cover rounded-3xl"
//                                 />
//                             </img-comparison-slider>
//                             {/* Text over the image */}
//                             <div className="absolute bottom-2 left-5 text-[#AAAC24] font-bold text-lg z-20">
//                                 Original
//                             </div>
//                             <div className="absolute bottom-2 right-5 text-[#AAAC24] font-bold text-lg z-20">
//                                 My Recreation
//                             </div>
//                         </div>

//                         {/* Painting Comparison */}
//                         <div className="w-full flex justify-center relative">
//                             <img-comparison-slider className="w-full rounded-3xl border-2 border-gray-300 overflow-hidden">
//                                 <img
//                                     slot="first"
//                                     src="/images/gallery/Original-Painting.webp"
//                                     alt="Original Painting"
//                                     className="w-full h-[600px] md:h-[500px] object-center rounded-3xl overflow-hidden"
//                                 />
//                                 <img
//                                     slot="second"
//                                     src="/images/gallery/My-Painting.webp"
//                                     alt="My Painting"
//                                     className="w-full h-[600px] md:h-[500px] object-center rounded-3xl overflow-hidden"
//                                 />
//                             </img-comparison-slider>
//                             {/* Text over the image */}
//                             <div className="absolute bottom-2 left-5 text-[#AAAC24] font-bold text-lg z-20">
//                                 Original
//                             </div>
//                             <div className="absolute bottom-2 right-5 text-[#AAAC24] font-bold text-lg z-20">
//                                 My Recreation
//                             </div>
//                         </div>

//                     </div>
//                 </main>
//             </div>
//             <Footer />
//         </div>
//     );
// }
