export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-[#AAAC24] text-white rounded-md hover:bg-[#1A428A] transition ${className}`}
    >
      {children}
    </button>
  );
}