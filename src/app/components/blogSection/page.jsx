import React from 'react';

const blogs = [
  {
    title: 'Eco-Friendly Cleaning: How We Keep Your Home Green',
    date: 'JAN 6, 2025',
    author: 'JOHN HELTON',
    desc: 'Learn about our commitment to eco-friendly practices. We share the eco-conscious products...',
    img: 'https://i.ibb.co/LhnLRfN6/images.jpg',
  },
  {
    title: 'How to Maintain a Clean Home Between Professional Visits',
    date: 'JAN 6, 2025',
    author: 'JOHN HELTON',
    desc: 'Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...',
    img: 'https://i.ibb.co/0yfH5xHR/kids-house-cleaning-blog.jpg',
  },
  {
    title: 'The Benefits of Regular Professional Cleaning',
    date: 'JAN 6, 2025',
    author: 'JOHN HELTON',
    desc: 'Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...',
    img: 'https://i.ibb.co/LDhB6Zf6/images-1.jpg',
  },
];

const BlogSection = () => {
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
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className={`rounded-xl overflow-hidden shadow-md border ${
              idx === 1 ? 'border-green-400' : 'border-gray-200'
            }`}
          >
            <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <p className="text-sm text-gray-500 uppercase">{blog.author} • {blog.date}</p>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.desc}</p>
              <button
                className={`mt-4 inline-block px-4 py-2 rounded ${
                  idx === 1
                    ? 'bg-green-500 text-white'
                    : 'border border-gray-400 text-gray-700 hover:bg-gray-100'
                }`}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;