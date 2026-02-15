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

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-dark shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <span className="text-white font-bold text-xl hidden sm:block">
                            Stadium<span className="gradient-text">Book</span>
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-white hover:text-primary-400 transition-colors duration-300 font-medium"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection("features")}
                            className="text-white hover:text-primary-400 transition-colors duration-300 font-medium"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection("booking")}
                            className="text-white hover:text-primary-400 transition-colors duration-300 font-medium"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => scrollToSection("booking")}
                        className="btn-primary text-sm sm:text-base"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
