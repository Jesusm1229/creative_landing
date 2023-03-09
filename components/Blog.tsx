import Link from "next/link";
import { getFormattedDate } from "@utils/date";
import { FrontMatter } from "@lib/types";
import { useRef } from "react";
import Image from "next/image";
import { homeProfileImage } from "@utils/utils";
import { motion } from "framer-motion";
import { BlogCardAnimation } from "@content/FramerMotionVariants";

export default function Blog({
    blog,
    animate = false,
}: {
    blog: FrontMatter;
    animate?: boolean;
}) {
    const blogRef = useRef(null);
    return (
        <motion.article
            ref={blogRef}
            variants={BlogCardAnimation}
            initial={animate && "hidden"}
            whileInView={animate ? "visible" : ""}
            viewport={{ once: true }}
            className="relative col-span-1 bg-white p-2 flex flex-col  items-center justify-center w-full h-full sm:w-[95%] mx-auto gap-2 md:gap-7 shadow-md md:shadow-lg"
        >
            <div className="relative inset-0 w-full h-full ">
                <Image
                    title={blog.title}
                    alt={blog.title}
                    src={blog.image}
                    width={1200}
                    height={1200}
                    blurDataURL={blog.image}
                    quality={75}
                    className="inset-0 m-auto max-w-full w-full h-auto  mb-12 mt-4  object-cover object-center"
                />
            </div>

            <div className="absolute flex flex-col w-full h-full px-2 pb-2 mt-2 sm:mt-0 sm:p-1 lg:py-5  items-center justify-center text-center">
                <Link
                    href={`/blogs/${blog.slug}`}
                    className=" rounded-full bg-black px-12 py-6 font-bold text-neutral-100 md:text-xl dark:text-neutral-200 hover:underline"
                >
                    {blog.title}
                </Link>
                <span className="bg-sky-800 text-xs text-white">
                    {getFormattedDate(new Date(blog.date))}
                </span>
                <p className="bg-sky-500 mt-3 text-sm sm:text-xs md:text-sm w-3/5 text-gray-100 dark:text-[#b5b7ba] line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
                    {blog.excerpt}
                </p>

                <div className="bg-green-700 flex items-center justify-between mt-auto">
                    <div className="z-10 flex items-center gap-3 font-barlow">
                        {/*  <div className="w-[30px]">
                            <Image
                                alt=""
                                height={933}
                                width={933}
                                src={homeProfileImage}
                                className="rounded-full !m-0 h-full"
                            />
                        </div> */}
                        <div className="flex flex-col">
                            {/* <Link href="/about" className="text-sm font-bold hover:underline">
                                Name
                            </Link> */}
                            <span className="text-lg text-white">
                                {getFormattedDate(new Date(blog.date))}
                            </span>
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
