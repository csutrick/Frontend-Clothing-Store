import React from "react";

import Hero from "../Components/Home/hero.js";
import ItemContainer from "../Components/Home/itemContainer.js";

const Home = () => {
    return (
        <div className="bg-green-300 w-full flex flex-col">
            <Hero />
            <ItemContainer />
        </div>
    )
};

export default Home;