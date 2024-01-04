import React from "react";

import Hero from "../Components/PageHome/hero.js";
import ItemContainer from "../Components/PageHome/itemContainer.js";

const Home = ({ searchResults }) => {
    return (
        <div className="w-full flex flex-col">
            <Hero />
            <ItemContainer searchResults={searchResults}/>
        </div>
    )
};

export default Home;