"use client";

import Link from "next/link";

export default function DiscountsSection() {
    return (
        <section id="deal" className="py-24 px-6 lg:px-12 bg-brand-deep text-white overflow-hidden relative">
            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-10 opacity-60">
                            Amazing Hot Deal
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                            Amazing Discounts <br />
                            Available This Week !
                        </h2>

                        <p className="text-white/40 mb-10 text-base leading-relaxed max-w-md font-medium">
                            Entrepreneur & Inventor RFOS & IoT Solutions Expert Marketing & Branding Specialist Innovation Management Pre-professional Musical Instrument.
                        </p>

                        <Link href="/venues" className="btn-lime inline-flex items-center justify-center">
                            View All Details
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="glass-card rounded-4xl p-6 relative overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1540747735391-4fec05404983?q=80&w=800&auto=format&fit=crop" className="w-full h-[400px] object-cover rounded-3xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Stadium" />

                            <div className="absolute top-10 left-10 right-10 flex justify-between pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-center">
                                    <p className="text-[10px] uppercase text-white/40 font-black mb-1">Monday</p>
                                    <p className="text-sm font-bold">$10.00</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-center">
                                    <p className="text-[10px] uppercase text-white/40 font-black mb-1">Monday</p>
                                    <p className="text-sm font-bold">$10.00</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 text-center">
                                    <p className="text-[10px] uppercase text-white/40 font-black mb-1">Monday</p>
                                    <p className="text-sm font-bold">$10.00</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2 text-brand-lime text-xs">
                                        <span className="flex">★★★★★</span>
                                        <span className="text-white opacity-40">5.0 | 1500+ reviews</span>
                                    </div>
                                    <h3 className="text-xl font-bold">Kyoto Arena - South Jakarta</h3>
                                    <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mt-1">Export Marketing & Branding Specialist</p>
                                </div>
                                <Link href="/venues/1" className="bg-brand-lime text-brand-deep px-8 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
