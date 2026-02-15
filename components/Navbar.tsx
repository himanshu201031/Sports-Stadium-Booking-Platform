"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "bg-brand-deep/90 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-black text-white tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2 group">
                        <div className="size-10 bg-brand-lime rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(217,255,50,0.3)] group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-brand-deep text-2xl font-black italic">stadium</span>
                        </div>
                        <span className="font-display uppercase tracking-[0.1em] italic">STADIUM<span className="text-brand-lime">BOOK</span></span>
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
                        <Link href="/venues" className="hidden sm:flex btn-lime items-center justify-center relative z-10 font-display">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
