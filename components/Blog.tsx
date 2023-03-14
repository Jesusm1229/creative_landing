import Link from "next/link";
import { getFormattedDate } from "@utils/date";
import { FrontMatter } from "@lib/types";
import { useRef, useState } from "react";
import Image from "next/image";
import { homeProfileImage } from "@utils/utils";
import { motion } from "framer-motion";
import { BlogCardAnimation } from "@content/FramerMotionVariants";

export default function Blog({
    blog,
    animate = false,
    colSpan,
}: {
    blog: FrontMatter;
    animate?: boolean;
    colSpan: string;
}) {
    const blogRef = useRef(null);

    const [keywords, setkeywords] = useState(blog.keywords);

    console.log(keywords);

    return (
        <motion.article
            ref={blogRef}
            variants={BlogCardAnimation}
            initial={animate && "hidden"}
            whileInView={animate ? "visible" : ""}
            viewport={{ once: true }}
            className={`relative ${colSpan} items-stretch flex flex-col justify-center w-full  mx-auto gap-2 md:gap-1 shadow-md md:shadow-lg`}
        >
            <div className="relative inset-0  h-screen overflow-hidden">
                <Image
                    title={blog.title}
                    alt={blog.title}
                    src={blog.image}
                    fill
                    blurDataURL={blog.image}
                    quality={75}
                    className="relative h-full lg:w-full object-cover object-center brightness-50"
                />
            </div>

            <div className="absolute flex flex-col w-full h-full px-2 pb-2 mt-10 sm:mt-0 sm:p-1 lg:py-5  items-center justify-center text-center">
                <Link
                    href={`/blogs/${blog.slug}`}
                    className="align-middle tracking-tighter font-kudryashev font-bold rounded-full border  border-slate-50 bg-slate-50/10 px-12 py-6 mx-6 mt-10  text-neutral-100 md:text-4xl dark:text-neutral-200 "
                >
                    {blog.title}
                </Link>
                <span className="mt-4 text-xl text-white font-semibold font-kudryashev ">
                    {getFormattedDate(new Date(blog.date))}
                </span>

                <motion.div
                    className="relative m-auto content-center w-full h-full"
                    style={{
                        clipPath: "inset(15% 20% 15% 20%);",
                    }}>
                    <Image
                        className="absolute object-cover object-center h-full mb-4 overflow-clip"
                        src={blog.image}
                        alt={blog.title}
                        fill
                        quality={75}
                    />
                </motion.div>


                {/*   <p className=" mt-3 text-sm sm:text-xs md:text-lg w-3/5 text-gray-100  line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
                    {blog.excerpt}
                </p> */}

                <div className=" tracking-tighter flex items-start justify-between mt-auto">
                    <div className="flex flex-row flex-start z-10 text-white">
                        <div className="grid grid-row-2 gap-2 ">
                            {keywords.split(',').slice(0, 2).map((word) => {
                                return (
                                    <span className="m-auto align-middle text-lg text-center   mx-2 px-2 rounded-full border  border-slate-50">
                                        {word}
                                    </span>
                                )
                            })}
                        </div>
                        <div className="grid grid-row-2 gap-2">
                            {keywords.split(',').slice(2, 4).map((word) => {
                                return (
                                    <span className="m-auto align-middle text-lg text-center   mx-2 px-2 rounded-full border  border-slate-50">
                                        {word}
                                    </span>
                                )
                            })}
                        </div>
                        <div className="grid grid-row-2 gap-2">
                            {keywords.split(',').slice(5, 6).map((word) => {
                                return (
                                    <span className="m-auto align-middle text-lg text-center   mx-2 px-2 rounded-full border  border-slate-50">
                                        {word}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <p className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-dark-3 md:text-sm">
                        {/*  <span>{blog.readingTime.text}</span> */}
                    </p>
                </div>
            </div>
        </motion.article>
    );
}
