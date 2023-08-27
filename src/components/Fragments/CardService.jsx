import { useState } from "react";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    console.log(tabIndex);
  };

  return (
    <div className="w-full mx-auto mt-8 p-4 border rounded-lg shadow">
      <div className="flex border-b mb-4">
        <button
          className={`mr-2 py-2 px-4 focus:outline-none ${
            activeTab === 1 ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`py-2 px-4 focus:outline-none ${
            activeTab === 2 ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
      </div>
      <div className="px-2">
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
      </div>
    </div>
  );
};

const CardService = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    console.log(tabIndex);
  };

  const {
    index,
    title,
    description,
    subheading,
    service,
    IconTab,
    listExample,
  } = props;
  return (
    <>
      {/* Button Tab Content */}
      <button
        className={`flex flex-col items-center gap-2 w-1/4 hover:bg-tertiary transition duration-100 p-4 ${
          activeTab === index ? "text-secondary" : ""
        }`}
        onClick={() => handleTabClick(index)}
      >
        <IconTab className="w-4" />
        <h4 className="font-semibold">{title} </h4>
      </button>
    </>
  );
};

export default CardService;
