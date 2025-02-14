function MenuDesign({ post }) {
    return (
        <div>
            <h2 className="mt-8 text-[#1A428A] text-3xl font-semibold">{post.heading}</h2>
            <p className="text-[#000] mt-4">{post.overview}</p>
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

export default MenuDesign;
