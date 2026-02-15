"use client";

import Link from "next/link";

export default function DiscountsSection() {
    return (
        <section id="deal" className="py-24 px-6 lg:px-12 bg-brand-deep text-white overflow-hidden relative">
            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-brand-lime animate-pulse">
                            Elite Opportunity
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tighter uppercase font-display italic">
                            Amazing <span className="gradient-text">Hot Deal</span> <br />
                            Active This Week
                        </h2>

                        <p className="text-white/30 mb-12 text-sm uppercase tracking-widest leading-relaxed max-w-md font-bold">
                            Unlock exclusive access to premier athletic infrastructure with our limited-time seasonal rates. Designed for elite practitioners and professional teams.
                        </p>

                        <div className="flex gap-6 items-center">
                            <Link href="/venues" className="btn-lime px-10 py-5 font-display text-sm tracking-[0.2em] shadow-2xl shadow-brand-lime/20">
                                View Manifest
                            </Link>
                            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] hidden sm:block">
                                Limited Availability
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-brand-lime/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="glass-morphism rounded-[3rem] p-4 bg-white/[0.02] border border-white/10 relative overflow-hidden">
                            <div className="relative h-[480px] w-full overflow-hidden rounded-[2.5rem]">
                                <img src="https://images.unsplash.com/photo-1540747735391-4fec05404983?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Elite Arena" />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent opacity-60"></div>

                                <div className="absolute bottom-8 left-8 right-8 glass-morphism p-8 rounded-[2rem] border border-white/10 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="material-symbols-outlined text-brand-lime text-lg">verified</span>
                                                <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Premier Tier</p>
                                            </div>
                                            <h3 className="text-2xl font-black font-display uppercase tracking-tight mb-1">Grand Olympic Hub</h3>
                                            <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest">Executive District • Court 1</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[9px] font-black text-brand-lime uppercase tracking-[0.4em] mb-1">Rate from</p>
                                            <p className="text-4xl font-black font-display tracking-tighter text-white">$45<span className="text-lg opacity-20">/hr</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-6 right-6 flex flex-col gap-3">
                                    {[
                                        { label: "OFF", val: "25%" },
                                        { label: "VIP", val: "PRO" }
                                    ].map((badge, i) => (
                                        <div key={i} className="size-16 rounded-full glass border border-white/20 flex flex-col items-center justify-center backdrop-blur-xl group-hover:border-brand-lime/40 transition-all">
                                            <span className="text-[9px] font-black text-white/40 uppercase">{badge.label}</span>
                                            <span className="text-sm font-black text-brand-lime leading-none">{badge.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
