"use client";

import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative py-32 px-6 lg:px-12 bg-stadium-view bg-cover bg-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-brand-deep/80"></div>
            <div className="container mx-auto relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full border border-brand-lime/20 text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-brand-lime">
                    Infinite Potential
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter uppercase font-display italic">
                    Engineering Divine <br />
                    Athletic <span className="text-brand-lime">Moments</span>
                </h2>
                <p className="text-white/30 mb-14 text-[11px] font-black uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed italic">
                    Join the global collective of elite athletes securing their legacy on our world-class infrastructure.
                </p>
                <Link href="/venues" className="btn-lime px-12 py-6 font-display text-sm tracking-[0.2em] shadow-[0_0_40px_rgba(217,255,50,0.3)]">
                    Secure Your Session
                </Link>
            </div>

            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-lime/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-lime/20 to-transparent"></div>
        </section>
    );
}
