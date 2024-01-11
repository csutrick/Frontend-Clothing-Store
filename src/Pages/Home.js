import React from "react";

import Hero from "../Components/PageHome/hero.js";

const Home = ({ searchResults }) => {
    return (
        <div className="w-full flex flex-col">
            <Hero />
        </div>
    )
};

export default Home;