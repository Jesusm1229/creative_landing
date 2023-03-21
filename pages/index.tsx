// Page Components START----------
import Image from "next/image";
import Metadata from "@components/MetaData";
import {
    FadeContainer,

    opacityVariant,

} from "@content/FramerMotionVariants";
import { motion } from "framer-motion";
import pageMeta from "@content/meta";
import generateSitemap from "@lib/sitemap";
import React from "react";
/* import Link from "next/link"; */

import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import AnimatedText from "@components/FramerMotion/AnimatedText";
import { FrontMatter } from "@lib/types";
import getRSS from "@lib/generateRSS";
import MDXContent from "@lib/MDXContent";
import BlogSection from "@components/Home/BlogSection";
import ServiceSection from "@components/Home/ServiceSection";
import Marquee from "@components/Marquee";
/* import Lenis from "@studio-freight/lenis";
import gsap from "gsap"; */


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
                    className="mask section z-4 grid  md:min-h-screen py-20 place-content-center  "
                >
                    <div className="relative flex flex-col items-center w-full gap-10 mx-auto">

                        <div className="flex flex-col w-full gap-3 p-5 text-center select-none ">
                            <div className="flex flex-col gap-1 text-[color:var(--color-text-alt)] ">
                                <motion.h1
                                    variants={opacityVariant}
                                    className="section__title text-5xl lg:text-12xl font-kudryashev text-[clamp(2rem,17vw,12.5rem)] leading-[0.9] normal-case mt-[5vh] mb-[6vh] mx-0;
                                    "
                                >
                                    Valentina<br /> LaRue
                                </motion.h1>
                                <motion.p
                                    variants={opacityVariant}
                                    className="font-medium text-xs md:text-sm lg:text-lg  dark:text-gray-200"
                                >
                                    I’M A FREELANCE MAKE-UP ARTIST BASED <br />IN PARIS WORKING FOR FASHION <br /> AND BEAUTY BRANDS
                                </motion.p>
                            </div>

                            <motion.p
                                variants={opacityVariant}
                                className=" text-[#474747] dark:text-gray-300 font-medium text-sm md:text-base text-center"
                            >

                            </motion.p>
                        </div>
                    </div>
                </motion.section>

                <section className=" absolute inset-0 w-full -z-10 h-fit  columns-2 md:columns-3 lg:columns-4 mx-auto overflow-clip">
                    <img className="column__item mb-4" src="https://source.unsplash.com/random/1" />
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
                <div className="w-full">
                    <ServiceSection />
                </div>

                <div className="w-full py-4">
                    <Marquee direction={true} />
                </div>
                <div className="w-full md:rotate-2 bg-[color:var(--color-text-alt)] text-white md:-mt-12 py-4">
                    <Marquee direction={false} />
                </div>
            </div >


        </>
    );
}

export function HomeHeading({ title }: { title: React.ReactNode | string }) {
    return (
        <div className="grid grid-cols-3 gap-4 place-items-center py-20 text-center" >
            <AnimatedText
                className="w-full text-2xl md:text-4xl font-bold text-center font-kudryashev"
                variants={FadeContainer}
            >
                2000
            </AnimatedText>
            <AnimatedHeading
                className="w-full text-4xl md:text-8xl  font-bold text-center justify-center font-kudryashev border-b-2 border-rose-500"
                variants={FadeContainer}
            >
                {title}
            </AnimatedHeading>
            <AnimatedText
                className="w-full text-2xl md:text-4xl font-bold text-center font-kudryashev"
                variants={FadeContainer}
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





