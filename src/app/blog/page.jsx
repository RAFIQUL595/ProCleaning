import Link from 'next/link';
import React from 'react';
import getAllBlogs from '../lib/getAllBlogs';

export const metadata = {
  title: "Blog | ProCleaning",
};


const BlogPage = async () => {
  // Fetch all services
  const blogs = await getAllBlogs();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:py-7">
      <div className="mb-10 flex text-center lg:text-left lg:flex-row flex-col items-center justify-between">
        <h2 className="text-3xl font-bold">Stay Updated with Our <br /> Tips & Service News!</h2>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          <strong className='text-black'>Our Blog</strong><br />
          Stay informed with our latest cleaning tips, service updates, expert advice on maintaining an immaculate home
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className={`rounded-xl overflow-hidden shadow-md border ${blog._id === 1 ? 'border-green-400' : 'border-gray-200'
              }`}
          >
            <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <p className="text-sm text-gray-500 uppercase">{blog.author} • {blog.date}</p>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-2">{blog.desc}</p>
              <Link href={`/blog/${blog._id}`}>
                <button
                  className={`mt-4 inline-block px-4 py-2 rounded cursor-pointer ${blog._id === 1
                    ? 'bg-green-500 text-white'
                    : 'border border-gray-400 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;