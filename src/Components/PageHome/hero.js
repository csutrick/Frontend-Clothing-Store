import React, { useState, useEffect } from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const divs = [
        { color: "bg-red-300", title: "Image 1" },
        { color: "bg-blue-300", title: "Image 2" },
        { color: "bg-green-300", title: "Image 3" },
        { color: "bg-orange-300", title: "Image 4" },
        { color: "bg-yellow-300", title: "Image 5" },
    ];

    const nextDiv = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === divs.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevDiv = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? divs.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextDiv();
        }, 8000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    });

    return (
        <div className={`relative w-full mt-16 flex justify-center items-center h-96 ${divs[currentIndex].color}`}>
            <h2 className="text-white text-3xl">{divs[currentIndex].title}</h2>

            <FaArrowAltCircleLeft onClick={prevDiv}
            className="absolute left-8 text-5xl text-gray-500/50 hover:text-gray-500"/>
            <FaArrowAltCircleRight onClick={nextDiv}
            className="absolute right-8 text-5xl text-gray-500/50 hover:text-gray-500"/>
        </div>
    )
};

export default Hero;