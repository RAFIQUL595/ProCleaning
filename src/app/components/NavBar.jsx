'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/logo/navlogo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const isActive = (path) => pathname === path;

    const linkClass = (path) =>
        isActive(path)
            ? 'bg-[#04BE64] text-white font-semibold'
            : '';

    return (
        <div className='bg-white/70 backdrop-blur-md sticky top-0 z-50'>
            <div className="navbar flex">
                {/* Logo */}
                <div className="navbar-start md:ml-10">
                    <div className='h-0 w-40 flex items-center'>
                        <Link href="/">
                            <Image src={logo} alt="Logo" />
                        </Link>
                    </div>
                </div>

                {/* Nav Menu (Desktop) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-2 menu-horizontal px-1 text-[16px]">
                        <li><Link href="/" className={linkClass('/')}>Home</Link></li>
                        <li><Link href="/service" className={linkClass('/service')}>Service</Link></li>
                        <li><Link href="/blog" className={linkClass('/blog')}>Blog</Link></li>
                        <li><Link href="/contact" className={linkClass('/contact')}>Contact</Link></li>
                        <li><Link href="/about" className={linkClass('/about')}>About us</Link></li>
                    </ul>
                </div>

                {/* Right Side (Hamburger + Book Button) */}
                <div className="navbar-end">
                    {/* Hamburger Button (Mobile) */}
                    <div className="lg:hidden">
                        <button onClick={toggleSidebar} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Book Service Button (Desktop) */}
                    <Link
                        className={`btn hidden text-[16px] lg:inline-flex md:mr-10 ${linkClass('/book-service')}`}
                        href="/book-service"
                    >
                        Book Service
                    </Link>

                </div>
            </div>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="fixed top-0 right-0 z-50 h-fit w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <button onClick={toggleSidebar} className="text-gray-600 hover:text-red-500 text-2xl font-bold cursor-pointer">
                            ✕
                        </button>
                    </div>
                    <ul className="menu gap-1 p-4 md:text-[16px]">
                        <li><Link href="/" onClick={toggleSidebar} className={linkClass('/')}>Home</Link></li>
                        <li><Link href="/service" onClick={toggleSidebar} className={linkClass('/service')}>Service</Link></li>
                        <li><Link href="/blog" onClick={toggleSidebar} className={linkClass('/blog')}>Blog</Link></li>
                        <li><Link href="/contact" onClick={toggleSidebar} className={linkClass('/contact')}>Contact</Link></li>
                        <li><Link href="/about" onClick={toggleSidebar} className={linkClass('/about')}>About us</Link></li>
                        <li className="mt-4">
                            <Link href="/book-service" onClick={toggleSidebar} className={`btn w-full ${linkClass('/book-service')}`}>Book Service</Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Backdrop */}
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-opacity-40 z-40"
                />
            )}
        </div>
    );
};

export default NavBar;