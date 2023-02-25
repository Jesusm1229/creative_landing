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
        <footer className="w-screen text-gray-600 dark:text-gray-400/50 font-inter mb-14 print:hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
                className="flex flex-col max-w-4xl gap-5 p-5 mx-auto text-sm border-t-2 border-gray-200 2xl:max-w-5xl 3xl:max-w-7xl dark:border-gray-400/10 sm:text-base"
            >
                <section className="grid grid-row-1 gap-2">
                    <div className="flex flex-row gap-4 capitalize">
                        {socialMedia.map((platform, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.p
                                        className="hover:text-black dark:hover:text-white w-fit"
                                        variants={popUp}
                                    >
                                        {platform.title}
                                    </motion.p>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </motion.div>
        </footer>
    )
}


