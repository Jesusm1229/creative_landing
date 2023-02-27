import Project from '@components/Project';
import { BlogCardAnimation } from '@content/FramerMotionVariants';
import { FrontMatter } from '@lib/types';
import { animate, motion } from 'framer-motion';
import Link from 'next/link';
import { HomeHeading } from 'pages'
import React from 'react'

const project = [];
//Here we bring all the 
export default function ProjectSection({ projects }: { projects: FrontMatter[] }) {
    return (
        <section className='relative w-full bg-slate-50 h-full my-5 py-5'>
            <HomeHeading title="Recent works" />
            <div className="static grid-flow-row-dense grid grid-cols-2 gap-4 mx-auto my-10">
                <motion.article
                    variants={BlogCardAnimation}
                    viewport={{ once: true }}
                    className="col-span-2 bg-white p-2 flex flex-col sm:flex-row items-center w-full sm:w-[95%] mx-auto gap-2 md:gap-7 shadow-md md:shadow-lg"
                >
                    <div className="w-full h-full">
                        <img className="w-full h-full mb-4" src="https://source.unsplash.com/random/1" />

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

                    <div className="flex flex-col w-full h-full px-2 pb-2 mt-2 sm:mt-0 sm:p-1 lg:py-5 md:pr-5">
                        <Link
                            href={`/projects/`}
                            className="font-bold text-neutral-900 md:text-xl dark:text-neutral-200 hover:underline"
                        >
                            gagag
                        </Link>
                        <p className="mt-3 text-sm sm:text-xs md:text-sm  text-gray-600 dark:text-[#b5b7ba] line-clamp-3 sm:line-clamp-2 md:line-clamp-4 mb-2">
                            fafafa
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="z-10 flex items-center gap-3 font-barlow">
                                <div className="w-[30px]">
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs">
                                        agagag
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.article>
                {/*  {projects.map((project, index) => {
                    return <Project key={`home-project-${index}`} project={project} animate />;
                })} */}

            </div>




        </section>
    )
}

