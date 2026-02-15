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
            <footer className="bg-brand-deep py-20 px-6 lg:px-12 border-t border-white/5">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
                        <div>
                            <div className="text-2xl font-black text-white tracking-tighter mb-4">
                                PTR<span className="text-brand-lime">.</span>
                            </div>
                            <p className="text-white/40 text-[10px] uppercase font-black tracking-widest leading-relaxed">
                                Innovation Management Pre-professional <br /> Musical Instrument.
                            </p>
                        </div>

                        <div className="flex space-x-12">
                            <div className="space-y-4">
                                <h4 className="text-xs font-black uppercase text-white/20 tracking-widest">Main Menu</h4>
                                <ul className="space-y-2 text-sm font-bold text-white/60">
                                    <li className="hover:text-brand-lime transition-colors cursor-pointer">Home</li>
                                    <li className="hover:text-brand-lime transition-colors cursor-pointer">About</li>
                                    <li className="hover:text-brand-lime transition-colors cursor-pointer">Court</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-black uppercase text-white/20 tracking-widest">Contacts</h4>
                                <ul className="space-y-2 text-sm font-bold text-white/60">
                                    <li className="hover:text-brand-lime transition-colors cursor-pointer">+880 123 456 789</li>
                                    <li className="hover:text-brand-lime transition-colors cursor-pointer">info@ptrstadium.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                        <p>© 2024 PTR STADIUM. ALL RIGHTS RESERVED.</p>
                        <div className="flex space-x-8 mt-4 md:mt-0">
                            <span className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</span>
                            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
