"use client";

import Link from "next/link";

export default function EventsSection() {
    const events = [
        "Clean & Maintained Courts",
        "Fit & Serve Challenge",
        "Fit & Serve Challenge (Featured)",
        "Foot Ball Bootcamp = 15ye+",
        "Court Jam: Community Play Day"
    ];

    return (
        <section id="event" className="py-24 px-6 lg:px-12 bg-white/50 text-brand-deep border-y border-brand-deep/5 relative z-10 overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 px-4">
                    <div className="max-w-xl">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-brand-deep/10 text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-60">
                            Current Events
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tighter uppercase font-display italic">
                            Elite Sessions, <br />
                            Engineered for <span className="text-brand-lime">Victory</span>
                        </h2>
                    </div>
                    <p className="text-brand-deep/40 text-[11px] font-black uppercase tracking-[0.2em] max-w-sm lg:text-right mt-8 lg:mt-0 leading-relaxed italic">
                        Real-time stadium management and event synchronization for professional athletic organizations.
                    </p>
                </div>

                <div className="space-y-6 px-4">
                    {events.map((event, idx) => (
                        idx === 2 ? (
                            <Link key={idx} href="/venues" className="bg-brand-deep text-white p-10 rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group hover:shadow-[0_40px_80px_-20px_rgba(10,12,10,0.4)] transition-all duration-700 block">
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                    <span className="material-symbols-outlined text-[160px] font-black italic">bolt</span>
                                </div>

                                <div className="relative z-10 w-full lg:w-1/2">
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="text-[9px] font-black bg-brand-lime text-brand-deep px-3 py-1.5 rounded-lg uppercase tracking-widest">Featured Session</span>
                                        <span className="text-[9px] font-black bg-white/5 text-white/60 px-3 py-1.5 rounded-lg uppercase tracking-widest border border-white/5 backdrop-blur-md">Professional Tier</span>
                                    </div>
                                    <h3 className="text-4xl font-black font-display uppercase tracking-tight mb-6 italic">{event}</h3>
                                    <p className="text-white/30 text-xs font-bold uppercase tracking-[0.1em] leading-relaxed max-w-md">Join the high-performance bootcamp designed for professional athletes. Master the court with advanced technical drills and elite coaching staff.</p>
                                </div>

                                <div className="w-full lg:w-2/5 relative transform rotate-3 group-hover:rotate-0 transition-transform duration-1000">
                                    <div className="absolute inset-0 bg-brand-lime/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    <img src="https://images.unsplash.com/photo-1540747735391-4fec05404983?q=80&w=600&auto=format&fit=crop" className="w-full h-[240px] object-cover rounded-[2rem] border-4 border-white/5 relative z-10" alt="Featured Event" />
                                </div>

                                <div className="absolute bottom-10 right-10 size-14 rounded-full bg-brand-lime flex items-center justify-center shadow-2xl shadow-brand-lime/40 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-brand-deep font-black">arrow_forward</span>
                                </div>
                            </Link>
                        ) : (
                            <Link key={idx} href="/venues" className="flex items-center justify-between py-8 px-8 border-b border-brand-deep/5 hover:bg-brand-deep/[0.02] transition-all group rounded-2xl block relative overflow-hidden">
                                <div className="flex items-center gap-6">
                                    <span className="text-sm font-black text-brand-deep/10 font-display">0{idx + 1}</span>
                                    <h3 className="text-xl font-bold text-brand-deep/70 group-hover:text-brand-deep group-hover:translate-x-2 transition-all duration-500 font-display uppercase tracking-tight">{event}</h3>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-black text-brand-deep/20 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Manifest</span>
                                    <span className="material-symbols-outlined text-brand-deep/20 group-hover:text-brand-deep transition-all duration-500">east</span>
                                </div>
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}
