import React, { useState, useCallback } from "react";
import debounce from 'lodash.debounce';

import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const RightSideNavbar = ({ setSearchTerm }) => {
    const [inputValue, setInputValue] = useState('');

    const debouncedSetSearchTerm = useCallback(
      debounce(setSearchTerm, 300),
      []
    );

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        debouncedSetSearchTerm(event.target.value);
    };

    return (
    <div className="bg-blue-300 flex flex-row flex-nowrap mt-1 border-black border-b-2">
        {/* search bar */}
        <div className="flex flex-row flex-nowrap">
            <IoIosSearch 
                className="bg-red-300 text-4xl text-center align-text-bottom"/>
            <input 
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={handleInputChange}
                className="pt-2 text-lg bg-transparent focus:outline-none pl-2"
            />
        </div>
        {/* shopping cart */}
        <IoCartOutline className="bg-red-300 text-4xl text-black"/>
    </div>
  );
};

export default RightSideNavbar;
