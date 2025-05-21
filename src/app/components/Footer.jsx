'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import footer from '../../../public/logo/footer.png';
import Link from 'next/link';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const Footer = () => {
    const formRef = useRef();
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_KEY,
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
        <footer className="bg-black text-white px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and description */}
                <div>
                    <Image src={footer} alt="ProCleaning Logo" width={150} height={50} />
                    <p className="mt-4 text-sm text-white">
                        Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h6 className="text-lg font-semibold mb-3">Company</h6>
                    <ul className="space-y-2 text-sm text-white">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/service">Services</Link></li>
                        <li><Link href="#">Our Team</Link></li>
                    </ul>
                </div>

                {/* Know More */}
                <div>
                    <h6 className="text-lg font-semibold mb-3">Know More</h6>
                    <ul className="space-y-2 text-sm text-white">
                        <li><Link href="#">Support</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h6 className="text-lg font-semibold mb-3">Newsletter</h6>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name='email'
                                placeholder="Write your email"
                                required
                                className="w-full px-4 py-2 rounded-md text-[#eeeeee] border border-[#808080]"
                            />
                            <button type='submit' className="bg-green-500 cursor-pointer mt-3 text-white w-full md:w-20 md:px-4 py-2 rounded-md hover:bg-green-600">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-10 border-t border-white pt-4 text-center text-sm text-white">
                {new Date().getFullYear()} “ProCleaning” All Rights Reserved
            </div>

        </footer>
    );
};

export default Footer;