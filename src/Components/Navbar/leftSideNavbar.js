import React from "react";

import Men from "./categories/men.js";

const LeftSideNavbar = ({ setSearchResults }) => {
  return (
    <div className="bg-transparent flex flex-row items-start">
        {/* temp image for logo */}
        <div className="w-12 h-12 bg-gray-300 text-center mr-4">
            Temp Logo
        </div>
        {/* navigation categories */}
        <Men 
          setSearchResults={setSearchResults}
        />
    </div>
  );
};

export default LeftSideNavbar;
