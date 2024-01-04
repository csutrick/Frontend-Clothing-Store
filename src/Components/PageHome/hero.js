import React from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="bg-green-300 relative w-full flex flex-row justify-center items-center h-96">
            <h1 className="text-4xl font-bold text-black tracking-widest">HERO Images</h1>

            <div className='absolute bottom-4 flex flex-row'>
                <div className='w-4 h-4 rounded-full bg-gray-200/50 mx-1'></div>
                <div className='w-4 h-4 rounded-full bg-gray-200 mx-1'></div>
                <div className='w-4 h-4 rounded-full bg-gray-200 mx-1'></div>
                <div className='w-4 h-4 rounded-full bg-gray-200 mx-1'></div>
                <div className='w-4 h-4 rounded-full bg-gray-200 mx-1'></div>
            </div>

            <FaArrowAltCircleLeft 
            className="absolute left-8 text-5xl text-gray-500/50 hover:text-gray-500"/>
            <FaArrowAltCircleRight 
            className="absolute right-8 text-5xl text-gray-500/50 hover:text-gray-500"/>
        </div>
    )
};

export default Hero;