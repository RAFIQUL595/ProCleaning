import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "About Us | ProCleaning",
};

const AboutPage = () => {
    return (
        <div>
            <div className="flex py-10 flex-col lg:flex-row items-center md:justify-between gap-10 p-8 bg-white">
                {/* Left side: Images */}
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="https://i.ibb.co/39QT59fq/team-young-janitors-cleaning-supplies-600nw-2506533269.jpg"
                        alt="Cleaning Team"
                        className="md:w-96 w-72 h-auto rounded-lg border-t-5 border-l-5 border-green-500 "
                    />
                    <img
                        src="https://i.ibb.co/F426cqSC/types-of-house-cleaning-services-to-offer.jpg"
                        alt="Gloved Hand Cleaning"
                        className="md:w-96 w-72 h-auto rounded-lg border-t-5 border-l-5 border-white -mt-25 ml-30"
                    />
                </div>

                {/* Right side: Text and Features */}
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Welcome To Our <br />
                        <span className="text-green-600">Pro-cleaning Company!</span>
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                            'Vetted professionals',
                            'Next day availability',
                            'Standard cleaning tasks',
                            'Affordable Prices',
                            'Best Quality',
                            'Affordable Prices'
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="text-green-500 text-lg">✔</span>
                                <p className="text-gray-700 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <Link href="/book-service"><button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                            Book Now
                        </button></Link>
                    </div>
                </div>
            </div>
            <p className='mx-10 mb-5'>At ProCleaning, we are committed to transforming your living and working spaces into spotless, refreshing environments. With years of experience and a team of trained, vetted professionals, we specialize in both residential and commercial cleaning services. Our mission is to deliver high-quality, reliable, and eco-friendly cleaning solutions that fit your schedule and budget. Whether it’s a one-time deep clean or regular maintenance, we take pride in our attention to detail and dedication to customer satisfaction. We believe a clean space leads to a clearer mind, and we’re here to make that happen—one shine at a time.</p>
        </div>
    );
};

export default AboutPage;