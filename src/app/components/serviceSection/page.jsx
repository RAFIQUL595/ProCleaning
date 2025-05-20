import getAllService from "@/app/lib/getAllService";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const ServiceSection = async () => {
    // Fetch all services
    const services = await getAllService();

    return (
        <div className="px-4 py-12 md:px-12 lg:px-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">
                    We Always Provide The Best Service
                </h2>
                <p className="mt-2 text-gray-500 max-w-xl mx-auto">
                    While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Map through the services and display them */}
                {services.slice(0, 3).map((service) => (
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
                                <h4>৳{service.price}</h4>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                            <Link href="/book-service"><button
                                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${service.buttonColor} hover:opacity-90`}
                            >
                                Book Now <RiArrowRightUpLine size={16} />
                            </button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;