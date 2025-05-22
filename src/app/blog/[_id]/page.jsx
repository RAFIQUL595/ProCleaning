import getBlogById from '@/app/lib/getBlogsById';
import React from 'react';

export const metadata = {
    title: "Blog Details | ProCleaning",
};

const BlogDetails = async ({ params }) => {
    const { _id } = params;

    // Fetch blog details by ID
    const blog = await getBlogById(_id);

    return (
        <div className="px-4 py-8 md:px-8 lg:px-16">
            <div className="max-w-5xl mx-auto space-y-6">
                <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full  object-cover rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
                />

                <div className="flex justify-between text-sm text-gray-500">
                    <p><span className="font-semibold">Author:</span> {blog.author}</p>
                    <p><span className="font-semibold">Published:</span> {blog.date}</p>
                </div>

                <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>

                <p className="text-lg text-gray-700 leading-relaxed">
                    {blog.desc}
                </p>
            </div>
        </div>
    );
};

export default BlogDetails;