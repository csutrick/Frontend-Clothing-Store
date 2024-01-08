import React, { useState, useCallback } from "react";

import debounce from 'lodash.debounce';

import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

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
    <div className="z-40 fixed top-0 drop-shadow-lg bg-white w-full flex flex-row flex-nowrap justify-between items-center py-2 px-2">
      <div className="flex flex-row flex-novwrap">
        <div className="bg-gray-300 mr-4 h-12 w-12 text-center">
          Temp Logo
        </div>
        <ul className="flex flex-row flex-nowrap items-center">
          <li className="mr-4 px-2 text-lg font-bold border-b-2 border-gray-300 hover:border-black">Mens</li>
          <li className="mr-4 px-2 text-lg font-bold border-b-2 border-gray-300 hover:border-black">Womens</li>
          <li className="mr-4 px-2 text-lg font-bold border-b-2 border-gray-300 hover:border-black">Kids</li>
          <li className="mr-4 px-2 text-lg font-bold border-b-2 border-gray-300 hover:border-black">Other</li>
        </ul>
      </div>
      <div className="flex flex-row flex-nowrap justify-center items-center">
        <div className="bg-transparent flex flex-row flex-nowrap justify-center items-start p-1
        border-b-2 border-gray-400 hover:border-black focus-within:border-2 focus-within:text-black group">
          <button className="text-gray-400 group-hover:text-black group-focus:text-black">
            <IoIosSearch className="text-3xl"/>
          </button>
          <input 
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
          className="h-full py-1 pl-2 focus:outline-none bg-transparent text-lg align-text-bottom"
          />
        </div>
        <IoCartOutline className="ml-2 text-4xl text-gray-400 hover:text-black"/>
      </div>
    </div>
  );
};

export default Navbar;
