import { FadeContainer } from '@content/FramerMotionVariants';
import { motion, useInView } from 'framer-motion';
import React from 'react'
import { useRef } from "react";

//Here we bring all the 
export default function ServiceSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true });






    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={FadeContainer}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden md:h-full  lg:px-6 bg-[color:var(--color-text-alt)] grid md:grid-cols-2 gap-6 md:min-h-screen py-4 place-content-stretch"
        >

            <div className=" relative w-5/6 md:h-screen gap-4 mx-auto my-10">
                <div className="relative h-full flex flex-col items-start justify-center w-full gap-10 mx-auto">
                    <div className=' text-start select-none relative flex flex-col w-full justify-center items-start gap-3'>
                        <motion.h2
                            className="w-full text-5xl md:text-7xl font-kudryashev text-white m-auto"
                        >
                            I can help you with
                        </motion.h2>
                    </div>
                    <ol className='max-w-md text-white list-decimal  list-inside   space-y-1'>
                        <li className="w-full flex flex-col items-start align-start ">
                            <div className="flex flex-row gap-2 my-auto  content-center justify-center text-lg md:text-xl items-center before:content-['1.'] before:mr-6 ">
                                <span className=" font-thin text-3xl md:text-5xl max-w-prose text-white">Makeup</span> beauty <span className="uppercase font-semibold text-white">TOP</span> fashion
                            </div>
                            <div className='w-5/6 h-min stroke-white '>
                                <motion.svg
                                    viewBox="0 0 100 8"
                                    width="90%"
                                    ref={ref}
                                    animate={{ pathLength: inView ? 1 : 0 }}
                                >
                                    <motion.path
                                        d="M 0, 5 L 100, 5"
                                        strokeWidth="0.3"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: inView ? 1 : 0 }}
                                        transition={{ duration: 1.3 }}
                                    />
                                </motion.svg>
                            </div>
                        </li>

                        <li className="w-full flex flex-col items-start align-start ">
                            <div className="flex flex-row gap-2 my-auto  content-center justify-center text-lg md:text-xl items-center before:content-['2.'] before:mr-6 ">
                                <span className="font-thin text-3xl md:text-5xl text-white">Hair </span>
                            </div>
                            <div className='w-5/6 h-min stroke-white '>
                                <motion.svg
                                    viewBox="0 0 100 8"
                                    width="90%"
                                    ref={ref}
                                    animate={{ pathLength: inView ? 1 : 0 }}
                                >
                                    <motion.path
                                        d="M 0, 5 L 100, 5"
                                        strokeWidth="0.3"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: inView ? 1 : 0 }}
                                        transition={{ duration: 1.3 }}
                                    />
                                </motion.svg>
                            </div>

                        </li>
                        <li className="w-full flex flex-col items-start align-start ">
                            <div className="flex flex-row gap-2 my-auto  content-center justify-center text-lg md:text-xl items-center before:content-['3.'] before:mr-6 ">
                                <span className="font-thin text-3xl md:text-5xl text-white">Creative Direction</span>
                            </div>
                            <div className='w-5/6 md:w-full h-min stroke-white '>
                                <motion.svg
                                    viewBox="0 0 100 8"
                                    width="90%"
                                    ref={ref}
                                    animate={{ pathLength: inView ? 1 : 0 }}
                                >
                                    <motion.path
                                        d="M 0, 5 L 100, 5"
                                        strokeWidth="0.3"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: inView ? 1 : 0 }}
                                        transition={{ duration: 1.3 }}
                                    />
                                </motion.svg>
                            </div>

                        </li>
                    </ol>

                </div>


            </div>
            <div className="hidden md:block relative w-full h-full gap-4 mx-auto my-2">
                <div className="relative w-full h-full flex flex-col items-center justify-center gap-1 mx-auto">
                    <img className=" absolute w-[50%] object-cover h-[50%] inset-0 mx-auto mt-[40%]" src="https://source.unsplash.com/random/5" alt='image' />
                    <img className=" absolute w-[50%] object-cover h-[50%] mt-20 inset-0" src="https://source.unsplash.com/random/3" alt='image2' />
                </div>
            </div>
        </motion.section>
    )
}

