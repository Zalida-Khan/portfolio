import { useState } from "react";

const TabsSwitcher = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mb-8">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-1 px-4 customRounded ${activeTab === index
                ? "bg-[#AAAC24] outline outline-1 outline-[#AAAC24] text-white cursor-default"
                : "bg-transparent text-[#AAAC24] outline outline-1 outline-[#AAAC24] hover:text-[#1A428A] hover:outline hover:outline-[#1A428A] cursor-pointer"
              } transition-all duration-300`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="w-full pb-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabsSwitcher;