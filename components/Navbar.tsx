"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-brand-deep/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-black text-white tracking-tighter hover:opacity-80 transition-opacity">
                        PTR<span className="text-brand-lime">.</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-10">
                        <Link href="/" className="nav-link text-white relative z-10">Home</Link>
                        <Link href="/venues" className="nav-link relative z-10">Venues</Link>
                        <Link href="/dashboard" className="nav-link relative z-10">Dashboard</Link>
                        <Link href="/#court" className="nav-link relative z-10">Court</Link>
                        <Link href="/#event" className="nav-link relative z-10">Event</Link>
                        <Link href="/settings" className="nav-link relative z-10">Settings</Link>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="/venues" className="hidden sm:flex btn-lime items-center justify-center relative z-10">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
