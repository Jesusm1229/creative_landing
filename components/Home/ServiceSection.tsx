import Blog from '@components/Blog';
import Project from '@components/Project';
import { BlogCardAnimation, FadeContainer, opacityVariant } from '@content/FramerMotionVariants';
import { FrontMatter } from '@lib/types';
import { animate, motion } from 'framer-motion';
import Link from 'next/link';
import { HomeHeading } from 'pages'
import React from 'react'

//Here we bring all the 
export default function ServiceSection() {



    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={FadeContainer}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden h-full  lg:px-6 bg-[color:var(--color-text-alt)] grid grid-cols-2 gap-6 min-h-screen py-20 place-content-stretch"
        >

            <div className="relative w-full h-screen   gap-4 mx-auto my-10">
                <div className="relative h-full flex flex-col items-start justify-center w-full gap-10 mx-auto">
                    {/* <div className="bg-sky-500 flex  w-full gap-3 p-5 text-center select-none ">
                        <div className="flex  gap-1">
                            <motion.h1
                                variants={opacityVariant}
                                className="section__title text-2xl text-white  font-kudryashev text-[clamp(2rem,17vw,12.5rem)] leading-[0.9] normal-case mt-[5vh] mb-[6vh] mx-0"
                            >
                                AQUÍ VA OTRA COSA<br /> LaRue
                            </motion.h1>
                            <motion.p
                                variants={opacityVariant}
                                className="font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
                            >
                                I’M A FREELANCE MAKE-UP ARTIST BASED IN PARIS WORKING FOR FASHION AND BEAUTY BRANDS
                            </motion.p>
                        </div>

                        <motion.p
                            variants={opacityVariant}
                            className=" text-[#474747] dark:text-gray-300 font-medium text-sm md:text-base text-center"
                        >

                        </motion.p>
                    </div> */}

                    <div className=' text-start select-none relative flex flex-col w-full  justify-center items-start gap-3'>
                        <motion.h2

                            className="w-full text-5xl text-white m-auto"
                        >
                            Im' an expert in<br />
                        </motion.h2>
                    </div>
                    <ol className='max-w-md text-white list-decimal  list-inside     space-y-10'>
                        <li className="border-b-2 border-b-indigo-50 w-full flex items-center align-center before:content-['1.'] before:mr-6 ">
                            <div className='flex flex-row gap-2 my-auto content-center justify-center items-center '>
                                <span className="font-semibold text-3xl text-white">Bonnie Green</span> with <span className="font-semibold text-white">70</span> points
                            </div>
                        </li>
                        <li className="w-full flex items-center align-center before:content-['2.'] before:mr-6 ">
                            <div className='flex flex-row gap-2 my-auto content-center justify-center items-center '>
                                <span className="font-semibold text-3xl text-white">Bonnie Green</span> with <span className="font-semibold text-white">70</span> points
                            </div>
                        </li>
                        <li className="w-full flex items-center align-center before:content-['2.'] before:mr-6 ">
                            <div className='flex flex-row gap-2 my-auto content-center justify-center items-center '>
                                <span className="font-semibold text-3xl text-white">Bonnie Green</span> with <span className="font-semibold text-white">70</span> points
                            </div>
                        </li>
                    </ol>

                </div>


            </div>
            <div className="relative w-full h-screen bg-sky-200  gap-4 mx-auto my-10">
                <div className="bg-sky-800 relative h-full flex flex-col items-center w-full gap-10 mx-auto">
                    {/* <div className="bg-sky-500 flex  w-full gap-3 p-5 text-center select-none ">
                        <div className="flex  gap-1">
                            <motion.h1
                                variants={opacityVariant}
                                className="section__title text-2xl text-white  font-kudryashev text-[clamp(2rem,17vw,12.5rem)] leading-[0.9] normal-case mt-[5vh] mb-[6vh] mx-0"
                            >
                                AQUÍ VA OTRA COSA<br /> LaRue
                            </motion.h1>
                            <motion.p
                                variants={opacityVariant}
                                className="font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
                            >
                                I’M A FREELANCE MAKE-UP ARTIST BASED IN PARIS WORKING FOR FASHION AND BEAUTY BRANDS
                            </motion.p>
                        </div>

                        <motion.p
                            variants={opacityVariant}
                            className=" text-[#474747] dark:text-gray-300 font-medium text-sm md:text-base text-center"
                        >

                        </motion.p>
                    </div> */}
                </div>


            </div>
        </motion.section>
    )
}

