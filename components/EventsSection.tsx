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
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 px-4">
                    <div className="max-w-xl">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-brand-deep/10 text-[10px] font-bold uppercase tracking-widest mb-10 opacity-60">
                            Current Event
                        </div>
                        <h2 className="text-4xl font-bold leading-tight">
                            Exciting Event, On & <br />
                            Off The Court
                        </h2>
                    </div>
                    <p className="text-brand-deep/60 text-sm max-w-sm lg:text-right mt-6 lg:mt-0 leading-relaxed font-medium">
                        Entrepreneur & Inventor RFOS & IoT Solutions Expert Marketing & Branding Specialist Innovation Management Pre-professional Musical Instrument.
                    </p>
                </div>

                <div className="space-y-4 px-4">
                    {events.map((event, idx) => (
                        idx === 2 ? (
                            <Link key={idx} href="/venues" className="bg-brand-deep text-white p-8 rounded-4xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:opacity-95 transition-all block">
                                <div className="relative z-10 w-full md:w-1/2">
                                    <div className="flex space-x-2 mb-6">
                                        <span className="text-[9px] font-black bg-brand-lime text-brand-deep px-2 py-1 rounded">FREE ENTRY</span>
                                        <span className="text-[9px] font-black bg-white/10 text-white px-2 py-1 rounded tracking-widest border border-white/10">OPEN AGE</span>
                                        <span className="text-[9px] font-black bg-white/10 text-white px-2 py-1 rounded tracking-widest border border-white/10">LIMITED SLOT</span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">{event}</h3>
                                    <p className="text-white/40 text-sm mb-6 max-w-md">Entrepreneur & Inventor RFOS & IoT Solutions Expert Marketing & Branding Specialist Innovation Management Pre-professional Musical Instrument.</p>
                                </div>

                                <div className="w-full md:w-1/3 relative transform rotate-6 group-hover:rotate-0 transition-transform duration-700">
                                    <img src="https://images.unsplash.com/photo-1540747735391-4fec05404983?q=80&w=400&auto=format&fit=crop" className="w-full h-[180px] object-cover rounded-2xl border-4 border-white/10" alt="" />
                                </div>

                                <div className="absolute top-1/2 right-12 w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center -translate-y-1/2 shadow-xl shadow-brand-lime/20 group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </Link>
                        ) : (
                            <Link key={idx} href="/venues" className="flex items-center justify-between py-6 px-4 border-b border-brand-deep/5 hover:bg-brand-deep/5 transition-all group rounded-xl block">
                                <h3 className="text-xl font-bold text-brand-deep/80 group-hover:text-brand-deep transition-all">{event}</h3>
                                <svg className="w-6 h-6 text-brand-deep/20 group-hover:text-brand-deep transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}
