import React from "react";

const ItemContainer = ({ searchResults }) => {
    return (
        <div className="p-8 grid grid-cols-4 gap-8">
            {searchResults.map((item) => (
                <div key={item.id} 
                className="bg-gray-300 flex flex-col p-2
                rounded-lg font-bold">
                    <img src={item.image} alt={item.title}
                    className="rounded-md"/>
                    <h2 className="mt-2 text-left">{item.price}</h2>
                    <h2 className='text-left'>{item.title}</h2>
                </div>
            ))}
        </div>
    )
};

export default ItemContainer;