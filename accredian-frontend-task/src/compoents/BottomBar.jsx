import React, { useState } from "react";

const BottomBar = () => {
  const [activeItem, setActiveItem] = useState("Refer");

  const menuItems = ["Refer", "Benefits", "FAQs", "Support"];

  return (
    <ul className="container mx-auto max-w-xl bg-blue-100 text-gray-700 text-lg font-medium flex justify-between items-center rounded-full px-4 py-3 my-5">
      {menuItems.map((item) => (
        <li
          key={item}
          className={`relative cursor-pointer px-3 py-1 ${
            activeItem === item ? "text-blue-500" : ""
          }`}
          onClick={() => setActiveItem(item)}
        >
          {item}
          {activeItem === item && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-2 bg-blue-500 rounded-full"></span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BottomBar;
