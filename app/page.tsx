"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DiscountsSection from "@/components/DiscountsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import EventsSection from "@/components/EventsSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-brand-deep">
            <Navbar />
            <Hero />
            <AboutSection />
            <DiscountsSection />
            <AmenitiesSection />
            <EventsSection />
            <VideoSection />
            <CTASection />
            <TestimonialsSection />

            {/* Footer */}
            <footer className="bg-brand-deep py-24 px-6 lg:px-12 border-t border-white/5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                        <div className="md:col-span-4 space-y-8">
                            <Link href="/" className="flex items-center gap-3">
                                <div className="size-10 bg-brand-lime rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-brand-deep text-2xl font-black italic">bolt</span>
                                </div>
                                <h1 className="text-2xl font-black tracking-[0.1em] uppercase">STADIUM<span className="text-brand-lime">BOOK</span></h1>
                            </Link>
                            <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest leading-relaxed max-w-sm">
                                Redefining the athletic experience through elite infrastructure access and seamless digital reservation systems.
                            </p>
                            <div className="flex gap-4">
                                {["share", "public", "verified"].map((icon, i) => (
                                    <button key={i} className="size-12 rounded-2xl glass border border-white/5 flex items-center justify-center hover:bg-white/5 transition-all text-white/40 hover:text-brand-lime">
                                        <span className="material-symbols-outlined text-xl">{icon}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-12">
                            {[
                                { title: "Explore", links: ["Venues", "Elite", "Events"] },
                                { title: "Corporate", links: ["About", "Partners", "Contact"] },
                                { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
                                { title: "Connect", links: ["Twitter", "LinkedIn", "Insta"] }
                            ].map((col, i) => (
                                <div key={i} className="space-y-8">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-lime italic">{col.title}</h4>
                                    <ul className="space-y-4">
                                        {col.links.map((link, j) => (
                                            <li key={j}>
                                                <Link href="#" className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
                        <p>© 2026 STADIUMBOOK GLOBAL. ELITE ACCESS GUARANTEED.</p>
                        <div className="flex gap-10">
                            <Link href="#" className="hover:text-white transition-colors italic">BEYOND PERFORMANCE</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
