import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Navbar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchTerm(inputValue); 
  };

  return (
    <div className="w-full flex justify-center items-center py-2">
      <div className="relative group drop-shadow-lg">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-full py-2 px-4 
          border border-gray-300 bg-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="absolute right-0 top-0 h-full p-2
          bg-blue-500 text-white rounded-full
          hover:scale-105 active:scale-110" 
          onClick={handleSearch}
        >
          <IoIosSearch className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;