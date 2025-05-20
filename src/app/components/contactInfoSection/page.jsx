'use client';
import React, { useRef } from 'react';
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const ContactInfoSection = () => {
    const formRef = useRef();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
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
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div>
                <h2 className="text-2xl font-bold mb-6">Find us</h2>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-md">
                        <div className="bg-green-500 text-white p-3 rounded-full">
                            <LuPhoneCall />
                        </div>
                        <div>
                            <h4 className="font-semibold">Call Us</h4>
                            <p className="text-sm text-gray-600">+880171-6697595</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-md">
                        <div className="bg-green-500 text-white p-3 rounded-full">
                            <MdOutlineMailOutline />
                        </div>
                        <div>
                            <h4 className="font-semibold">Email Now</h4>
                            <p className="text-sm text-gray-600">rafiqulislam42002@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-md">
                        <div className="bg-green-500 text-white p-3 rounded-full">
                            <CiLocationOn />
                        </div>
                        <div>
                            <h4 className="font-semibold">Address</h4>
                            <p className="text-sm text-gray-600">Pabna Sadar,Pabna 6600</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div>
                <h2 className="text-2xl font-bold mb-2">Keep In Touch</h2>
                <p className="text-sm text-gray-600 mb-6">
                    We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Name"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="email"
                        required
                        name="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <textarea
                        rows="4"
                        required
                        name='messages'
                        placeholder="Message"
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 cursor-pointer text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactInfoSection;