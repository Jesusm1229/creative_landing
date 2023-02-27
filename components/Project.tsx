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
            ref={projectRef}
            variants={BlogCardAnimation}
            initial={animate && "hidden"}
            whileInView={animate ? "visible" : ""}
            viewport={{ once: true }}
            className="bg-white dark:bg-darkSecondary rounded-2xl p-2 flex flex-col sm:flex-row items-center w-ull sm:w-[95%] mx-auto gap-2 md:gap-7 shadow-md md:shadow-lg"
        >
            <div className="w-full h-full">
                <img className="w-full h-full mb-4" src="https://source.unsplash.com/random/1" />
                {/*  <Image
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

            <div className="flex flex-col w-full h-full px-2 pb-2 mt-2 sm:mt-0 sm:p-1 lg:py-5 md:pr-5">
                <Link
                    href={`/projects/${project.slug}`}
                    className="font-bold text-neutral-900 md:text-xl dark:text-neutral-200 hover:underline"
                >
                    {project.title}
                </Link>
                <p className="mt-3 text-sm sm:text-xs md:text-sm  text-gray-600 dark:text-[#b5b7ba] line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
                    {project.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="z-10 flex items-center gap-3 font-barlow">
                        <div className="w-[30px]">
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs">
                                {getFormattedDate(new Date(project.date))}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </motion.article>
    );
}
