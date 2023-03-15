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
import pageMeta from "@content/meta";
import generateSitemap from "@lib/sitemap";
import React from "react";
import Link from "next/link";

import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import AnimatedText from "@components/FramerMotion/AnimatedText";
import { FrontMatter } from "@lib/types";
import getRSS from "@lib/generateRSS";
import MDXContent from "@lib/MDXContent";
import BlogSection from "@components/Home/BlogSection";

export default function Home({ blogs }: { blogs: FrontMatter[] }) {


    return (
        <>
            <Metadata
                title=""
                description={pageMeta.home.description}
                previewImage={pageMeta.home.image}
                keywords={pageMeta.home.keywords}
            />
            <div className="relative w-screen mx-auto dark:bg-darkPrimary dark:text-gray-100 ">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={FadeContainer}
                    viewport={{ once: true }}
                    className="mask section z-4 grid min-h-screen py-20 place-content-center  "
                >
                    <div className="relative flex flex-col items-center w-full gap-10 mx-auto">

                        <div className="flex flex-col w-full gap-3 p-5 text-center select-none ">
                            <div className="flex flex-col gap-1">
                                <motion.h1
                                    variants={opacityVariant}
                                    className="section__title text-5xl text-[color:var(--color-text-alt)] lg:text-12xl font-kudryashev text-[clamp(2rem,17vw,12.5rem)] leading-[0.9] normal-case mt-[5vh] mb-[6vh] mx-0;
                                    "
                                >
                                    Charlotte<br /> LaRue
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

                <section className="absolute inset-0 w-full -z-10 h-fit  columns-2 md:columns-3 lg:columns-4 mx-auto overflow-clip">
                    <img className="mb-4" src="https://source.unsplash.com/random/1" />
                    <img className="mb-4" src="https://source.unsplash.com/random/2" />
                    <img className="mb-4" src="https://source.unsplash.com/random/3" />
                    <img className="mb-4" src="https://source.unsplash.com/random/4" />
                    <img className="mb-4" src="https://source.unsplash.com/random/5" />
                    <img className="mb-4" src="https://source.unsplash.com/random/6" />
                    <img className="mb-4" src="https://source.unsplash.com/random/7" />
                    <img className="mb-4" src="https://source.unsplash.com/random/8" />
                    <img className="mb-4" src="https://source.unsplash.com/random/10" />
                    <img className="mb-4" src="https://source.unsplash.com/random/11" />
                    <img className="mb-4" src="https://source.unsplash.com/random/12" />
                    <img className="mb-4" src="https://source.unsplash.com/random/13" />
                    <img className="mb-4" src="https://source.unsplash.com/random/14" />
                    <img className="mb-4" src="https://source.unsplash.com/random/15" />
                    <img className="mb-4" src="https://source.unsplash.com/random/16" />
                    <img className="mb-4" src="https://source.unsplash.com/random/17" />
                    <img className="mb-4 overflow-clip" src="https://source.unsplash.com/random/18" />
                    <img className="mb-4 overflow-clip" src="https://source.unsplash.com/random/19" />
                    <img className="mb-4 overflow-clip" src="https://source.unsplash.com/random/20" />
                </section>
                <div className="pt-[1290px]">
                    <BlogSection blogs={blogs} />
                </div>

                {/**Mover esta sección. Sección Servicio - Sección disponible - Footer */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    variants={FadeContainer}
                    viewport={{ once: true }}
                    className="bg-[color:var(--color-text-alt)]  z-4 grid min-h-screen py-20 place-content-center  "
                >
                    <div className="relative flex flex-col items-center w-full gap-10 mx-auto">

                        <div className="flex flex-col w-full gap-3 p-5 text-center select-none ">
                            <div className="flex flex-col gap-1">
                                <motion.h1
                                    variants={opacityVariant}
                                    className="section__title text-5xl text-white lg:text-12xl font-kudryashev text-[clamp(2rem,17vw,12.5rem)] leading-[0.9] normal-case mt-[5vh] mb-[6vh] mx-0;
                                    "
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


            </div >


        </>
    );
}

export function HomeHeading({ title }: { title: React.ReactNode | string }) {
    return (
        <div className="grid grid-cols-3 gap-4 place-items-center py-20 text-center" >
            <AnimatedText
                className="w-full text-4xl font-bold text-center font-kudryashev"
                variants={popUp}
            >
                2000
            </AnimatedText>
            <AnimatedHeading
                className="w-full text-8xl font-bold text-center justify-center font-kudryashev border-b-2 border-rose-500"
                variants={popUp}
            >
                {title}
            </AnimatedHeading>
            <AnimatedText
                className="w-full text-4xl font-bold text-center font-kudryashev"
                variants={popUp}
            >
                2022
            </AnimatedText>
        </div>
    );
}

export async function getStaticProps() {
    const blogs = new MDXContent("posts").getAllPosts(3);
    await getRSS();
    await generateSitemap();

    return {
        props: { blogs },
    };
}




