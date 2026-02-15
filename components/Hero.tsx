"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-40 pb-24 px-6 lg:px-12 bg-stadium-hero bg-cover bg-center flex items-center overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto relative px-8 lg:px-16 z-10">
                {/* Social Icons - Left Side */}
                <div className="absolute top-0 -left-12 hidden 2xl:flex flex-col space-y-6 items-center">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 transform -rotate-90 origin-center mb-16 whitespace-nowrap font-black">Follow STADIUMBOOK</p>
                    <div className="flex flex-col space-y-5">
                        <a href="#" className="glass-card w-10 h-10 rounded-xl flex items-center justify-center hover:bg-brand-lime hover:text-brand-deep transition-all duration-500">
                            <span className="text-[11px] font-black tracking-tighter">FB</span>
                        </a>
                        <a href="#" className="glass-card w-10 h-10 rounded-xl flex items-center justify-center hover:bg-brand-lime hover:text-brand-deep transition-all duration-500">
                            <span className="text-[11px] font-black tracking-tighter">TW</span>
                        </a>
                        <a href="#" className="glass-card w-10 h-10 rounded-xl flex items-center justify-center hover:bg-brand-lime hover:text-brand-deep transition-all duration-500">
                            <span className="text-[11px] font-black tracking-tighter">IG</span>
                        </a>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 mb-8 animate-fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
                            </span>
                            <span className="text-[11px] font-black uppercase tracking-widest text-white/70">Elite Stadium Experience</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight font-display">
                            Reserve Your <br />
                            Perfect <span className="gradient-text">Arena</span> In <br />
                            Record Time
                        </h1>
                        <p className="text-white/60 mb-10 text-base lg:text-lg leading-relaxed font-medium max-w-lg">
                            STADIUMBOOK is the premier platform for professional and community sports. Discover world-class venues, book instantly, and elevate your game with our state-of-the-art facilities.
                        </p>
                        <div className="flex flex-wrap gap-4 relative z-20">
                            <Link href="/venues" className="btn-lime px-10 py-5 text-sm shadow-xl shadow-brand-lime/20 flex items-center justify-center font-display">
                                Book Your Slot
                            </Link>
                            <Link href="/#court" className="px-10 py-5 border border-white/10 rounded-xl text-white font-black hover:bg-white/5 transition-all text-sm bg-white/5 backdrop-blur-md flex items-center justify-center font-display uppercase tracking-widest">
                                View Courts
                            </Link>
                        </div>
                    </div>

                    {/* Digital Availability Card */}
                    <div className="lg:justify-self-end w-full max-w-sm relative z-10 group">
                        <div className="absolute inset-0 bg-brand-lime/20 rounded-5xl blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="glass-morphism rounded-5xl p-8 relative overflow-hidden transition-transform duration-700 hover:-translate-y-2 border border-white/10">
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Real-Time Data</span>
                                <span className="text-[10px] font-black bg-brand-lime text-brand-deep px-2 py-1 rounded tracking-tighter">LIVE</span>
                            </div>

                            <div className="flex items-center space-x-3 mb-10 text-brand-lime drop-shadow-[0_0_10px_rgba(217,255,50,0.2)]">
                                <span className="material-symbols-outlined text-xl">location_on</span>
                                <span className="text-[12px] font-black tracking-[0.1em] uppercase">Uttara Central, Dhaka</span>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { day: "Today", slots: "4 Slots Left", price: "$85" },
                                    { day: "Tomorrow", slots: "12 Slots Left", price: "$75" }
                                ].map((item, i) => (
                                    <div key={i} className="glass rounded-3xl p-6 hover:bg-white/5 transition-colors border border-white/5">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-lg font-black text-white font-display uppercase tracking-tight">{item.day}</span>
                                            <span className="text-[10px] font-bold text-brand-lime">{item.slots}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-white/40 uppercase font-bold mb-1 tracking-widest">Next Available</span>
                                                <span className="text-sm font-bold tracking-widest">06:00 PM</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] text-white/40 uppercase font-bold mb-1 tracking-widest">Starting At</span>
                                                <div className="text-xl font-black text-white">{item.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/venues" className="mt-8 w-full py-4 rounded-2xl bg-white/5 hover:bg-brand-lime hover:text-brand-deep transition-all duration-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 border border-white/5 group-hover:border-brand-lime/30">
                                Check All Times
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
