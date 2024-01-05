import React from "react";

const ItemCard = ({ item }) => {
    return (
        <div className="bg-gray-300 flex flex-col p-2
        rounded-lg font-bold">
            <img src={item.image} alt={item.title}
            className="rounded-md"/>
            <h2 className="mt-2 text-left">{item.price}</h2>
            <h2 className='text-left'>{item.title}</h2>
        </div>
    )
};

export default ItemCard;