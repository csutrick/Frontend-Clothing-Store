import React from "react";

import LeftSideNavbar from "./leftSideNavbar";
import RightSideNavbar from "./rightPartNavbar";

const Navbar = ({ setSearchResults }) => {
  return (
    // Navbar Container
    <div className="z-40 fixed top-0 drop-shadow-lg bg-white w-full flex flex-row flex-nowrap justify-between items-start py-2 px-2">
      {/* logo and categories */}
      <LeftSideNavbar 
        setSearchResults={setSearchResults}
      />
      {/* search bar and shopping bag */}
      <RightSideNavbar />
    </div>
  );
};

export default Navbar;
