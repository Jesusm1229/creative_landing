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
    colSpan,
}: {
    blog: FrontMatter;
    animate?: boolean;
    colSpan: string;
}) {
    const blogRef = useRef(null);


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
                    className=" rounded-full border hover:bg-slate-600 border-slate-50 px-12 py-6 mt-10 font-bold text-neutral-100 md:text-xl dark:text-neutral-200 "
                >
                    {blog.title}
                </Link>
                <span className="mt-2 text-base text-rose-600 font-semibold">
                    {getFormattedDate(new Date(blog.date))}
                </span>
                <p className=" mt-3 text-sm sm:text-xs md:text-lg w-3/5 text-gray-100  line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
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
