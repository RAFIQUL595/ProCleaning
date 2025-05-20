'use client';

import React, { useEffect, useState, useRef } from 'react';
import getAllService from '../lib/getAllService';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const BookServiceClient = () => {
    const [services, setServices] = useState([]);
    const formRef = useRef();

    useEffect(() => {
        const fetchServices = async () => {
            const allServices = await getAllService();
            const filtered = allServices.filter(service => service.title !== 'title');
            setServices(filtered);
        };

        fetchServices();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_API,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            Swal.fire({
                title: "Good job!",
                text: "Message sent successfully!",
                icon: "success",
            });

            // Reset form inputs
            formRef.current.reset();
        } catch (error) {
            Swal.fire({
                title: "Oops!",
                text: "Something went wrong. Please try again.",
                icon: "error",
            });
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Book a Cleaning Service</h1>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                <div>
                    <label className="block mb-1 font-semibold">Name<span className='text-red-500'>*</span></label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Email<span className='text-red-500'>*</span></label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Service Type<span className='text-red-500'>*</span></label>
                    <select
                        name="serviceType"
                        required
                        className="w-full border border-gray-300 p-2 rounded"
                    >
                        <option value="">Select a service</option>
                        {services.map(service => (
                            <option key={service._id} value={service.title}>
                                {service.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Preferred Date<span className='text-red-500'>*</span></label>
                    <input
                        type="date"
                        name="date"
                        required
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#04BE64] text-white py-2 rounded transition"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default BookServiceClient;