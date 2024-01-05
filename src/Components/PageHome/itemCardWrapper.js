import React, { useState, useEffect } from 'react';

import LoadingCard from './loadingCard';
import ItemCard from './itemCard';

const ItemCardWrapper = ({ item }) => {
    const [isLoading, setIsLoading] = useState(true);

    const enableEffect = true; // For dev purposes REMOVE
    useEffect(() => {
        if (!enableEffect) return; // For dev purposes REMOVE

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer); // Clear timer when component unmounts
    }, []);

    if (isLoading) {
        return <LoadingCard />;
    } else {
        return <ItemCard item={item} />;
    }
};

export default ItemCardWrapper;