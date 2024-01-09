import React from "react";

const Women = () => {
    return (
        <div
        className="relative bg-transparent group">
            <button 
            className="px-2 py-2 text-2xl">
                Women
            </button>
            <ul className="hidden group-hover:block">
                <li className="block"><a href="#" className="px-4 py-2 whitespace-nowrap font-bold mb-2 text-lg">Option 1</a></li>
                <li className="block"><a href="#" className="px-4 py-2 whitespace-nowrap font-bold mb-2 text-lg">Option 2</a></li>
                <li className="block"><a href="#" className="px-4 py-2 whitespace-nowrap font-bold mb-0 text-lg">Option 3</a></li>
            </ul>
        </div>
  );
};

export default Women;