// Page Components START----------
import Image from "next/image";
import Metadata from "@components/MetaData";
import {
    FadeContainer,
    headingFromLeft,
    opacityVariant,
    popUp,
} from "@content/FramerMotionVariants";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import pageMeta from "@content/meta";
import React from "react";
import Link from "next/link";

export default function Home() {


    return (
        <>
            <Metadata
                title=""
                description={pageMeta.home.description}
                previewImage={pageMeta.home.image}
                keywords={pageMeta.home.keywords}
            />
            <div className="relative max-w-4xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={FadeContainer}
                    viewport={{ once: true }}
                    className="section grid min-h-screen py-20 place-content-center"
                >
                    <div className="relative flex flex-col items-center w-full gap-10 mx-auto">

                        <div className="flex flex-col w-full gap-3 p-5 text-center select-none ">
                            <div className="flex flex-col gap-1">
                                <motion.h1
                                    variants={opacityVariant}
                                    className="section__title text-5xl lg:text-12xl font-kudryashev text-[clamp(2rem,17vw,12.5rem)] leading-[0.9] normal-case mt-[5vh] mb-[6vh] mx-0;
                                    "
                                >
                                    Charlotte<br /> LaRue
                                </motion.h1>
                                <motion.p
                                    variants={opacityVariant}
                                    className="font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
                                >
                                    WE THINK HAVING CAPACITY TO CHOOSE GIVES US FREEDOM. CHOICE IS THE VERY DENIAL OF FREEDOM.
                                </motion.p>
                            </div>

                            <motion.p
                                variants={opacityVariant}
                                className=" text-[#474747] dark:text-gray-300 font-medium text-sm md:text-base text-center"
                            >

                            </motion.p>
                        </div>

                        {/*     <Link
                            href="https://bit.ly/j471nCV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 transition-transform border border-gray-500 rounded-md outline-none select-none dark:border-gray-400 hover:bg-white dark:hover:bg-neutral-800 active:scale-95"
                        >
                            <FiDownload />
                            <p>Resume</p>
                        </Link> */}
                    </div>
                </motion.section>

                <div>

                </div>
            </div>
        </>
    );
}


