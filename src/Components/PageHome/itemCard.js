import React from 'react';

const ItemCard = ({ item }) => {
    return (
        <div className="flex flex-col p-2 h-auto transition-all duration-100 ease-in
        rounded-lg font-bold bg-gray-200 hover:bg-gray-300
        drop-shadow-lg hover:drop-shadow-xl hover:scale-105">
            <img src={item.image} alt={item.title}
            className="rounded-md"/>
            <h2 className="mt-2 text-left">{item.price}</h2>
            <h2 className='mt-2 text-left'>{item.title}</h2>
        </div>
    )
};

export default ItemCard;