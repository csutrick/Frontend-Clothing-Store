import React from "react";

const ItemContainer = () => {
    const numOfFakeDivs = 12; //REMOVE fake divs

    return (
        <div className="bg-red-300 p-8 grid grid-cols-4 gap-8">
            {Array.from({ length: numOfFakeDivs }, (_, index) => (
                <div key={index} className="flex flex-col items-center justify-start p-2
                rounded-lg bg-gray-200">
                    <div className="bg-gray-400 w-full h-40 rounded-t-md flex justify-center items-center">
                        <h3 className="font-bold text-white">Item Image</h3>
                    </div>
                    <h3 className="my-2 text-lg font-bold">Item {index + 1}</h3>
                    <p className="min-h-28">Short description describing item</p>
                </div>
            ))}
        </div>
    )
};

export default ItemContainer;