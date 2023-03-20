import Link from "next/link";
import Image from "next/image";
import socialMedia from "@content/socialMedia";
import {
    FadeContainer,
    opacityVariant,
    popUp,
} from "../content/FramerMotionVariants";
import { navigationRoutes } from "../utils/utils";
import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { HiOutlineQrcode } from "react-icons/hi";
import { BsDot } from "react-icons/bs";


export default function Footer() {
    return (
        <footer className="relative w-screen h-screen text-[color:var(--color-text-alt)]p-5 print:hidden ">
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
                className="absolute flex flex-col w-full gap-5 m-auto 2xl:max-w-9xl 3xl:max-w-9xl sm:text-base justify-center items-center content-center inset-0"
            >
                <div className="relative m-auto flex flex-col w-full gap-3 p-5 text-center justify-center items-center select-none inset-0">
                    <div className="m-auto flex flex-col relative w-full h-full gap-10">
                        <motion.h1

                            className="hover-underline-animation text-5xl text-[color:var(--color-text-alt)] lg:text-9xl font-kudryashev  leading-[0.9] normal-case m-auto"
                        >
                            Let,s work together
                        </motion.h1>
                        <div className="relative flex flex-col items-center w-full h-full gap-1 m-auto inset-0">
                            <div className="absolute inset-x-0 bottom-0  grid grid-col-1 gap-2 text-black justify-center align-self w-full h-full">
                                <div className="flex flex-row gap-4 capitalize  items-center">
                                    {socialMedia.map((platform, index) => {
                                        return (

                                            <Link
                                                key={index}
                                                href={platform.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <motion.p
                                                    className="border-2 border-spacing-2 rounded-full px-4 py-2 text-[color:var(--color-text-alt)] border-[color:var(--color-text-alt)] w-fit uppercase"
                                                    variants={popUp}
                                                >
                                                    {platform.title}
                                                </motion.p>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

                {/*  */}


            </motion.section>
        </footer>
    )
}


