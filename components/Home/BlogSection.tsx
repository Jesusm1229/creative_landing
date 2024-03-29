import Blog from '@components/Blog';

import { FrontMatter } from '@lib/types';

import { HomeHeading } from 'pages'
import React from 'react'

//Here we bring all the 
export default function BlogSection({ blogs }: { blogs: FrontMatter[] }) {

    function colSpan(index: number) {
        const colspan = index === 0 ? "col-span-2 " : "col-span-2 md:col-span-1";
        return colspan;
    }

    return (
        <section className='relative w-full overflow-hidden h-full my-5 lg:px-60 py-5 bg-[color:var(--color-bg)]'>
            <HomeHeading title="Recent works" />
            <div className="static grid-flow-row-dense grid grid-cols-2 gap-4 mx-auto my-10">
                {/* Here start the project section */}
                {blogs.map((blog, index) => {
                    console.log(index)
                    return <Blog key={`home-blog-${index}`} blog={blog} animation colSpan={colSpan(index)} />;
                })}
            </div>
        </section>
    )
}

