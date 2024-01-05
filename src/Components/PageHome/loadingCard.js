import React from "react";

const LoadingCard = () => {
    return (
        <div className="flex flex-col p-2 h-auto transition-all duration-100 ease-in
        rounded-lg font-bold bg-gray-200 hover:bg-gray-300
        drop-shadow-lg hover:drop-shadow-xl hover:scale-105">
            <div className="w-full h-52 flex justify-center items-center bg-gray-400 rounded-md">
                <h2 className="text-white font-bold text-sm animate-pulse">Loading Image...</h2>
            </div>
            <h2 className="mt-2 p-2 bg-gray-400 animate-pulse rounded-md"></h2>
            <h2 className='mt-2 p-2 bg-gray-400 animate-pulse rounded-md'></h2>
        </div>
    )
};

export default LoadingCard;