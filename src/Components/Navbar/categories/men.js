import React from "react";

import fetchApiData from "../../../util/fetchApiData.js";
import fetchJsonDataCategories from "../../../util/fetchJsonDataCategories.js";

const Mens = ({ setSearchResults, useAPI }) => {
    const handleItemClick = async (searchTerm) => {
        if (useAPI) { // Checks to use API or Mirage
            try {
                const data = await fetchApiData(searchTerm);
                setSearchResults(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            try {
                const data = await fetchJsonDataCategories(searchTerm);
                setSearchResults(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
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
                <li className="flex flex-col">
                    <a 
                        href="#" 
                        className="px-2 py-1 whitespace-nowrap font-bold text-lg"
                        onClick={() => handleItemClick('Mens Shirts')}
                    >
                        Shirts
                    </a>
                    <a 
                        href="#" 
                        className="px-2 py-1 whitespace-nowrap font-bold text-lg"
                        onClick={() => handleItemClick('Mens Hoodies')}
                    >
                        Hoodies
                    </a>
                    <a 
                        href="#" 
                        className="px-2 py-1 whitespace-nowrap font-bold text-lg"
                        onClick={() => handleItemClick('Mens Pants')}
                    >
                        Pants
                    </a>
                    <a 
                        href="#" 
                        className="px-2 py-1 whitespace-nowrap font-bold text-lg"
                        onClick={() => handleItemClick('Mens Shorts')}
                    >
                        Shorts
                    </a>
                    <a 
                        href="#" 
                        className="px-2 py-1 whitespace-nowrap font-bold text-lg"
                        onClick={() => handleItemClick('Mens Underwear')}
                    >
                        Underwear
                    </a>
                </li>
            </ul>
        </div>
  );
};

export default Mens;