import React from "react";

import Men from "./categories/men.js"
import Women from "./categories/women.js"
import Kids from "./categories/kids.js"
import Deals from "./categories/deals.js"
import Other from "./categories/other.js"

const LeftSideNavbar = () => {
  return (
    <div className="bg-transparent flex flex-row items-start">
        {/* temp image for logo */}
        <div className="w-12 h-12 bg-gray-300 text-center mr-4">
            Temp Logo
        </div>
        {/* navigation categories */}
        <Men />
        <Women />
        <Kids />
        <Deals />
        <Other />
    </div>
  );
};

export default LeftSideNavbar;
