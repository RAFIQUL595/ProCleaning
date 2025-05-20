'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';
import getAllService from '../lib/getAllService';

const ServicePage = () => {
    const [services, setServices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchServices = async () => {
            const data = await getAllService();
            setServices(data);
        };
        fetchServices();
    }, []);

    // Filtered services (no sort)
    const filteredServices = services.filter((service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mx-10 my-6">
            {/* Search Input */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md w-full lg:w-2/3"
                />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                    <div
                        key={service._id}
                        className="rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-5">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <h4 className="font-semibold">৳{service.price}</h4>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                            <Link href="/book-service">
                                <button
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${service.buttonColor || 'bg-blue-600 text-white'} hover:opacity-90`}
                                >
                                    Book Now <RiArrowRightUpLine size={16} />
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;