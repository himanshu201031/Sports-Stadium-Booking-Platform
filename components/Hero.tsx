"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-40 pb-24 px-6 lg:px-12 bg-stadium-hero bg-cover bg-center flex items-center overflow-hidden">
            <div className="container mx-auto relative px-8 lg:px-16 z-10">
                {/* Social Icons - Top Left */}
                <div className="absolute top-0 -left-12 hidden 2xl:flex flex-col space-y-4 items-center">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-white/40 transform -rotate-90 origin-center mb-16 whitespace-nowrap font-black">Follow Us</p>
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-deep transition-all">
                            <span className="text-[10px] font-bold">FB</span>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-deep transition-all">
                            <span className="text-[10px] font-bold">TW</span>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-deep transition-all">
                            <span className="text-[10px] font-bold">IG</span>
                        </a>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
                            Reserve Your Stadium <br />
                            Field In Just A Minute
                        </h1>
                        <p className="text-white/60 mb-10 text-base lg:text-lg leading-relaxed font-medium">
                            Entrepreneur & Inventor RFOS & IoT Solutions Expert Marketing & Branding Specialist Innovation Management Pre-professional Musical Instrument.
                        </p>
                        <div className="flex flex-wrap gap-4 relative z-20">
                            <Link href="/venues" className="btn-lime px-10 py-4 text-base shadow-lg shadow-brand-lime/20 flex items-center justify-center">
                                Book Now
                            </Link>
                            <Link href="#court" className="px-10 py-4 border border-white/20 rounded-lg text-white font-bold hover:bg-white/5 transition-all text-base bg-white/5 backdrop-blur-sm flex items-center justify-center">
                                Explore Courts
                            </Link>
                        </div>
                    </div>

                    {/* Availability Card */}
                    <div className="lg:justify-self-end w-full max-w-sm relative z-10">
                        <div className="glass-card rounded-4xl p-8 relative overflow-hidden group hover:border-brand-lime/30 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-[80px] -mr-16 -mt-16 group-hover:bg-brand-lime/20 transition-all"></div>

                            <div className="flex items-center space-x-3 mb-10 opacity-70">
                                <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-brand-lime"></div>
                                </div>
                                <span className="text-[11px] font-semibold text-white tracking-wide uppercase">Housebuilding , Uttara, Dhaka</span>
                            </div>

                            <div className="space-y-5">
                                {[1, 2].map((i) => (
                                    <div key={i} className="bg-white/5 rounded-3xl p-5 border border-white/5 hover:border-brand-lime/20 transition-all group">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-base font-bold text-white/90 group-hover:text-brand-lime transition-colors">Monday</span>
                                            <span className="text-[10px] font-black bg-brand-lime text-brand-deep px-2 py-1 rounded-md uppercase">120 Cup</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">Start</span>
                                                <span className="text-sm font-bold tracking-tight">11:00 AM</span>
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-brand-lime/10 text-brand-lime text-[10px] font-black">
                                                2h
                                            </div>
                                            <div className="flex flex-col text-right">
                                                <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">End</span>
                                                <span className="text-sm font-bold tracking-tight">01:00 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
