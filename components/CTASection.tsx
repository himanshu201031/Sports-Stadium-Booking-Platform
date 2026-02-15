"use client";

import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative py-32 px-6 lg:px-12 bg-stadium-view bg-cover bg-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-brand-deep/80"></div>
            <div className="container mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    Get Ready For Fun! Book Your Court Today <br />
                    And Enjoy The Game!
                </h2>
                <p className="text-white/40 mb-12 text-sm max-w-lg mx-auto leading-relaxed font-medium">
                    Entrepreneur & Inventor RFOS & IoT Solutions Expert Marketing & Branding Specialist Innovation Management Pre-professional Musical Instrument.
                </p>
                <Link href="/venues" className="btn-lime inline-flex items-center justify-center">
                    Book A Court
                </Link>
            </div>

            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-lime/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-lime/20 to-transparent"></div>
        </section>
    );
}
