// Page Components START----------
import Image from "next/image";
import Metadata from "@components/MetaData";
import {
    FadeContainer,

    opacityVariant,

} from "@content/FramerMotionVariants";
import { motion, useScroll } from "framer-motion";
import pageMeta from "@content/meta";
import generateSitemap from "@lib/sitemap";
import React, { useEffect, useRef } from "react";
/* import Link from "next/link"; */

import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import AnimatedText from "@components/FramerMotion/AnimatedText";
import { FrontMatter } from "@lib/types";
import getRSS from "@lib/generateRSS";
import MDXContent from "@lib/MDXContent";
import BlogSection from "@components/Home/BlogSection";
import ServiceSection from "@components/Home/ServiceSection";
import Marquee from "@components/Marquee";


import { useTransform } from 'framer-motion';



export default function Home({ blogs }: { blogs: FrontMatter[] }) {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });


    const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    /* // Lenis smooth scrolling
    let lenis: useLenis();

    // Initialize Lenis smooth scrolling
    const initSmoothScrolling = () => {
        lenis = new Lenis({
            lerp: 0.2,
            smooth: true,
        });
        const scrollFn = (time: any) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
    };

    // GSAP Scroll Triggers
    const scroll = () => {
        gsap.timeline({
            scrollTrigger: {
                start: 0,
                end: 'max',
                scrub: true
            }
        })
            .addLabel('start', 0)
            .to('.section--columns', {
                ease: 'none',
                startAt: { scale: 1.1 },
                scale: 1,
            }, 'start')
            .to('.section--columns', {
                scrollTrigger: {
                    trigger: '.section--showcase',
                    start: 0,
                    end: 'top top',
                    scrub: true
                },
                ease: 'power4.inOut',
                startAt: {
                    opacity: 0.2,
                },
                opacity: 1,
                // repeat once (go back to "startAt" values)
                yoyo: true,
                repeat: 1
            }, 'start')
            .to('.section--columns .column-wrap', {
                ease: 'none',
                yPercent: pos => pos % 2 ? 3 : -3
            }, 'start')
    };
 */



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


                <motion.section className="section section--columns relative overflow-hidden  md:h-full "  >
                    <motion.div className=" columns w-full overflow-hidden md:h-full grid grid-cols-4 gap-4" >
                        <motion.div className="column-wrap"
                            style={{ y: useTransform(progress, [0, 1], [0, -30]) }}
                        >
                            <div className="column">
                                <div className="column__item relative block overflow-clip bg-gray-100  h-32 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/1"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-64 mb-4">

                                    <Image
                                        src="https://source.unsplash.com/random/2"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-48 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/3"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-24 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/4"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-40 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/5"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-56 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/6"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="column-wrap" style={{
                            y: useTransform(progress, [0, 1], [0, -30]),
                        }}>
                            <div className="column">
                                <div className="column__item relative block overflow-clip bg-gray-100 h-56 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/7"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-32 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/8"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-64 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/9"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 w-30 h-48 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/10"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-24 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/12"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-40 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/13"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="column-wrap" style={{
                            y: useTransform(progress, [0, 1], [0, -30]),
                        }}>
                            <div className="column">
                                <div className="column__item relative block overflow-clip bg-gray-100 h-40 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/14"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-56 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/15"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-32 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/16"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-64 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/17"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-48 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/18"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-24 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/19"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="column-wrap" style={{
                            y: useTransform(progress, [0, 1], [0, -30]),
                        }}>
                            <div className="column">
                                <div className="column__item relative block overflow-clip bg-gray-100 h-24 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/20"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-48 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/21"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-64 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/22"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-32 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/23"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-56 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/24"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                                <div className="column__item relative block overflow-clip bg-gray-100 h-40 mb-4">
                                    <Image
                                        src="https://source.unsplash.com/random/25"
                                        alt=""
                                        fill
                                        quality={75}
                                        className="column__item-img object-cover object-center brightness-75 lg:w-full  lg:object-center" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* <section className=" absolute inset-0 w-full -z-10 h-fit  columns-2 md:columns-3 lg:columns-4 mx-auto overflow-clip">
                    <img className="column__item mb-4" src="https://source.unsplash.com/random/1" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/2" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/3" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/4" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/5" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/6" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/7" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/8" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/10" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/11" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/12" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/13" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/14" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/15" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/16" alt="" />
                    <img className="mb-4" src="https://source.unsplash.com/random/17" alt="" />
                    <img className="mb-4 overflow-clip" src="https://source.unsplash.com/random/18" alt="" />
                    <img className="mb-4 overflow-clip" src="https://source.unsplash.com/random/19" alt="" />
                    <img className="mb-4 overflow-clip" src="https://source.unsplash.com/random/20" alt="" />
                </section> */}

                <div className="">
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





