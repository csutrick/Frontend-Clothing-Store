import React from "react";

import fetchData from "../../../util/fetchData.js";

const Mens = ({ setSearchResults }) => {
    const handleItemClick = async (searchTerm) => {
        try {
            const data = await fetchData(searchTerm);
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div
        className="relative bg-transparent group">
            <button 
            className="px-2 py-2 text-2xl">
                Men
            </button>
            <ul className="hidden group-hover:block">
                <li className="block">
                    <a 
                        href="#" 
                        className="px-4 py-2 whitespace-nowrap font-bold mb-2 text-lg"
                        onClick={() => handleItemClick('Shirts')}
                    >
                        Shirts
                    </a>
                </li>
            </ul>
        </div>
  );
};

export default Mens;