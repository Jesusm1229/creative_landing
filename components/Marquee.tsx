import React from "react";
import { motion } from "framer-motion";



const marqueeVariants = {
    animate: {
        x: [0, -1080],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
            },
        },
    },
};

export default function Marquee() {
    return (

        <div className="text-9xl uppercase relative flex overflow-x-hidden">
            <div className=" animate-marquee whitespace-nowrap">
                <span className=" mx-4">Marquee Item 1</span>
                <span className=" mx-4">Marquee Item 2</span>
                <span className=" mx-4">Marquee Item 3</span>
                <span className=" mx-4">Marquee Item 4</span>
                <span className=" mx-4">Marquee Item 5</span>
            </div>

            <div className="absolute top-0  animate-marquee2 whitespace-nowrap">
                <span className=" mx-4">Marquee Item 1</span>
                <span className=" mx-4">Marquee Item 2</span>
                <span className=" mx-4">Marquee Item 3</span>
                <span className=" mx-4">Marquee Item 4</span>
                <span className=" mx-4">Marquee Item 5</span>
            </div>
        </div>
    );
};


