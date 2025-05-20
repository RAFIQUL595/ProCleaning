import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Erick Reynolds',
    image: 'https://i.ibb.co/mrz94wjC/istockphoto-599768750-612x612.jpg',
    description: 'Erick is a senior cleaning technician known for his attention to detail and client satisfaction.',
  },
  {
    name: 'Jason Carter',
    image: 'https://i.ibb.co/wFm45zWc/handsome-man-holding-cleaning-supplies-and-mop-on-white-background-EGJ1-HH.jpg',
    description: 'Jason brings energy and precision to every cleaning task, specializing in residential services.',
  },
  {
    name: 'Marcus Lee',
    image: 'https://i.ibb.co/JFsSLSrD/depositphotos-385193872-stock-photo-single-man-cleaning-kitchen-at.webp',
    description: 'Marcus is highly skilled in commercial space sanitation and uses eco-friendly products.',
  },
];

const TeamSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Effective Cleaning Requires <br /> an Expert Cleaning Team
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-xl border p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-52 rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <div className="flex items-center justify-center mt-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-4">{member.description}</p>
            <div className="flex gap-4 text-gray-600 text-lg">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-800 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;