import React from "react";


export default function Marquee({ direction }: { direction: boolean }) {
    return (

        direction ? (

            <div className="text-5xl md:text-9xl uppercase relative flex overflow-x-hidden">
                <div className=" animate-marquee whitespace-nowrap">
                    <span className=" mx-4">Available Worlwide 	•</span>
                    <span className=" mx-4">Available Worlwide 	•</span>
                    <span className=" mx-4">Available Worlwide 	•</span>
                    <span className=" mx-4">Available Worlwide 	•</span>
                    <span className=" mx-4">Available Worlwide 	•</span>
                </div>

                <div className="absolute top-0  animate-marquee2 whitespace-nowrap">
                    <span className=" mx-4">Available Worlwide 	•</span>
                    <span className=" mx-4">Available Worlwide 	•</span>
                    <span className=" mx-4">Available Worlwide 	•</span>
                    <span className=" mx-4">Available Worlwide 	•</span>
                    <span className=" mx-4">Available Worlwide 	•</span>
                </div>
            </div>

        )
            : (
                <div className="text-5xl md:text-9xl uppercase relative flex overflow-hidden ">
                    <div className=" animate-marquee3 whitespace-nowrap">
                        <span className=" mx-4">Available Worlwide 	•</span>
                        <span className=" mx-4">Available Worlwide 	•</span>
                        <span className=" mx-4">Available Worlwide 	•</span>
                        <span className=" mx-4">Available Worlwide 	•</span>
                        <span className=" mx-4">Available Worlwide 	•</span>
                    </div>

                    <div className="absolute top-0  animate-marquee4 whitespace-nowrap">
                        <span className=" mx-4">Available Worlwide 	•</span>
                        <span className=" mx-4">Available Worlwide 	•</span>
                        <span className=" mx-4">Available Worlwide 	•</span>
                        <span className=" mx-4">Available Worlwide 	•</span>
                        <span className=" mx-4">Available Worlwide 	•</span>
                    </div>
                </div>
            )

    );
};


