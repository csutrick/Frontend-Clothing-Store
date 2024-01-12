import React from "react";

import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuFileJson } from "react-icons/lu";
import { FaServer } from "react-icons/fa6";

const RightSideNavbar = ({ setUseAPI, useAPI }) => {
    return (
    <div className="bg-blue-300 flex flex-row flex-nowrap mt-1 border-black border-b-2">
        {/* search bar */}
        <div className="flex flex-row flex-nowrap">
            <IoIosSearch 
                className="bg-red-300 text-4xl text-center align-text-bottom"/>
            <input 
                type="text"
                placeholder="Search..."
                className="pt-2 text-lg bg-transparent focus:outline-none pl-2"
            />
        </div>
        {/* shopping cart */}
        <IoCartOutline className="bg-red-300 text-4xl text-black"/>
        {/* toggle API */}
        <div onClick={() => setUseAPI(!useAPI)}
        className="flex items-center justify-center mx-1">
            {
                useAPI ? (
                    <FaServer className="text-3xl text-black"/>
                ) : (
                    <LuFileJson className="text-3xl text-black"/>
                )
            }
        </div>
    </div>
  );
};

export default RightSideNavbar;
