import React from "react";

import ItemCardWrapper from "./itemCardWrapper";

const ItemContainer = ({ searchResults }) => {
    // Check if searchResults is not null and has items
    const hasResults = searchResults && searchResults.length > 0;

    return (
        <div className="p-8 grid grid-cols-4 gap-8">
            {hasResults ? (
                // Render the products if there are search results
                searchResults.map((item) => (
                    <ItemCardWrapper
                        key={item.id}
                        item={item}
                    />
                ))
            ) : (
                // Render a loading message if no results
                <div className="col-span-4 text-center font-bold">
                    <p>Loading products...</p>
                </div>
            )}
        </div>
    )
};

export default ItemContainer;