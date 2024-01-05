import React, { useState, useCallback } from "react";
import { IoIosSearch } from "react-icons/io";
import debounce from 'lodash.debounce';

const Navbar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  // Debounced function to handle searchTerm updates
  const debouncedSearchTerm = useCallback(
    debounce((searchTerm) => {
      setSearchTerm(searchTerm);
    }, 750), // delay to send request
    []
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    debouncedSearchTerm(e.target.value);
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
          onChange={handleInputChange}
        />
        <button
          className="absolute right-0 top-0 h-full p-2
          bg-blue-500 text-white rounded-full
          hover:scale-105 active:scale-110"
          onClick={() => setSearchTerm(inputValue)}
        >
          <IoIosSearch className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
