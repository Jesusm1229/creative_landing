import Link from "next/link";
import { getFormattedDate } from "@utils/date";
import { FrontMatter } from "@lib/types";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogCardAnimation } from "@content/FramerMotionVariants";

export default function Project({
    project,
    animate = false,
}: {
    project: FrontMatter;
    animate?: boolean;
}) {
    const projectRef = useRef(null);
    return (
        <motion.article
            variants={BlogCardAnimation}
            viewport={{ once: true }}
            className="relative col-span-2 bg-white p-2 flex flex-col  items-center justify-center w-full sm:w-[95%] mx-auto gap-2 md:gap-7 shadow-md md:shadow-lg"
        >
            <div className="relative inset-0 w-full h-full">
                <img className="inset-0 m-auto max-w-full w-full h-auto  mb-4 object-cover object-center" src="https://source.unsplash.com/random/1" />

                {/* <Image
                title={project.title}
                alt={project.title}
                src={project.image}
                width={1200}
                height={630}
                blurDataURL={project.image}
                quality={75}
                className="my-auto transition-all duration-300 backdrop-blur-xl rounded-xl"
            /> */}
            </div>

            <div className="absolute flex flex-col w-full h-full px-2 pb-2 mt-2 sm:mt-0 sm:p-1 lg:py-5 md:pr-5 items-center justify-center text-center">
                <Link
                    href={`/projects/`}
                    className="rounded-full bg-black px-12 py-6 font-bold text-neutral-100 md:text-xl dark:text-neutral-200 hover:underline"
                >
                    NAME
                </Link>
                <p className="mt-3 text-sm sm:text-xs md:text-sm  text-gray-100 dark:text-[#b5b7ba] line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
                    FECHA
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="z-10 flex items-center gap-3 font-barlow">
                        <div className="w-[30px]">
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs">
                                TAGS TAGS TAGS TAGS TAGS TAGS TAGS TAGS TAGS
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </motion.article>
    );
}
