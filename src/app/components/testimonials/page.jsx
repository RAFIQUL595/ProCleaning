'use client';
import getAllTestimonials from '@/app/lib/getAllTestimonials';
import React, { useState, useEffect } from 'react';
import { FaQuoteRight, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const data = await getAllTestimonials();
                setTestimonials(data);
            } catch (error) {
                console.error('Failed to fetch testimonials:', error);
            }
        };
        fetchTestimonials();
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    if (testimonials.length === 0) return <div>Loading...</div>;

    const { name, title, image, rating, feedback } = testimonials[currentIndex];

    return (
        <div className="bg-white flex flex-col md:gap-10 md:flex-row py-10 lg:py-15 px-4 md:px-12">
            {/* Heading & Arrows */}
            <div className="text-center md:text-left mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Feedback About Their Experience With Us
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl">
                    Read testimonials from our satisfied clients. See how our cleaning services have made a difference in their lives and homes.
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                    <button onClick={handlePrev} className="w-10 h-10 border rounded-md flex items-center justify-center text-green-600 border-green-600 hover:bg-green-100 transition">
                        <FaArrowLeft />
                    </button>
                    <button onClick={handleNext} className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center text-white hover:bg-green-600 transition">
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* Testimonial Card */}
            <div className="max-w-xl mx-auto">
                <div className="bg-white shadow-md rounded-xl border-2 border-green-400 p-6 flex flex-col space-y-4 transition duration-500 ease-in-out">
                    <div className="flex items-center space-x-4">
                        <img
                            src={image}
                            alt={name}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                            <p className="text-sm text-gray-500">{title}</p>
                            <div className="flex text-yellow-500">
                                {[...Array(rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{feedback}</p>
                    <FaQuoteRight className="text-3xl text-green-500 self-end" />
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;