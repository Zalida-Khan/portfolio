function CaseStudy({ post }) {

    return (
        <div>
            <h2 >{post.heading}</h2>
            <p>{post.overview}</p>
            <ul className="text-[#1A428A] cursor-hand flex flex-row space-x-4 lg:col-span-2">
                {post.links1 && (
                    <li>
                        <a
                            className="text-[#AAAC24] hover:text-[#1A428A] text-md flex items-center"
                            href={post.links1}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Blog <AiOutlineRight />
                        </a>
                    </li>
                )}
                {post.links2 && (
                    <li>
                        <a
                            className="text-[#AAAC24] hover:text-[#1A428A] text-md flex items-center"
                            href={post.links2}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Styleguide <AiOutlineRight />
                        </a>
                    </li>
                )}
                {post.links3 && (
                    <li>
                        <a
                            className="text-[#AAAC24] hover:text-[#1A428A] text-md flex items-center"
                            href={post.links3}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hi-fi Prototype <AiOutlineRight />
                        </a>
                    </li>
                )}
            </ul>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {post.gallery.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                ))}
            </div>
        </div>
    );
}

export default CaseStudy;
