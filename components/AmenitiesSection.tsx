"use client";

import Link from "next/link";

export default function AmenitiesSection() {
    const cards = [
        { title: "Amazing Discounts Available This Week !", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop" },
        { title: "Amazing Discounts Available This Week !", img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=400&auto=format&fit=crop" },
        { title: "Amazing Discounts Available This Week !", img: "https://images.unsplash.com/photo-1540747735391-4fec05404983?q=80&w=400&auto=format&fit=crop" }
    ];

    return (
        <section id="court" className="py-24 px-6 lg:px-12 bg-white text-brand-deep overflow-hidden relative z-10">
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 px-4">
                    <div className="max-w-xl">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-brand-deep/10 text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-60">
                            The Elite Experience
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tighter uppercase font-display italic">
                            Infinite Infrastructure, <br />
                            <span className="text-brand-lime">Absolute</span> Precision
                        </h2>
                    </div>
                    <p className="text-brand-deep/40 text-[11px] font-black uppercase tracking-[0.2em] max-w-sm lg:text-right mt-8 lg:mt-0 leading-relaxed italic">
                        Access world-class facilities equipped with the latest in athletic performance technology and luxury hospitality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4">
                    <div className="md:col-span-8 relative group overflow-hidden rounded-[3rem]">
                        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop" className="w-full h-[480px] object-cover transition-all duration-1000 group-hover:scale-105" alt="Elite Infrastructure" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent flex flex-col justify-end p-12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-brand-lime">verified_user</span>
                                <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.4em]">Integrated Recovery System</p>
                            </div>
                            <h3 className="text-3xl font-black text-white font-display uppercase tracking-tight mb-8 italic">Pro-Performance Hubs</h3>
                            <Link href="/venues" className="btn-lime w-fit px-10 py-5 font-display text-[11px] tracking-[0.2em] shadow-2xl shadow-brand-lime/20">
                                Explore Facilities
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-4 space-y-8">
                        {[
                            { title: "VIP Lounges", icon: "chair", img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=600&auto=format&fit=crop" },
                            { title: "AI Analysis", icon: "analytics", img: "https://images.unsplash.com/photo-1540747735391-4fec05404983?q=80&w=600&auto=format&fit=crop" }
                        ].map((item, i) => (
                            <div key={i} className="relative group overflow-hidden rounded-[2.5rem] h-[224px]">
                                <img src={item.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={item.title} />
                                <div className="absolute inset-0 bg-brand-deep/40 group-hover:bg-brand-deep/20 transition-all duration-500 flex flex-col justify-end p-8 border border-white/5">
                                    <div className="size-10 rounded-xl bg-brand-lime flex items-center justify-center mb-4 shadow-lg shadow-brand-lime/20">
                                        <span className="material-symbols-outlined text-brand-deep text-lg font-black">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white font-display uppercase tracking-tight italic">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
