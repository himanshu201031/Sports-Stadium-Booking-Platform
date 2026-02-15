"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function VenueDetails() {
    const params = useParams();
    const id = params.id;

    return (
        <div className="bg-brand-deep text-white font-display min-h-screen">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 pt-24 pb-20 space-y-16">
                {/* Hero Section */}
                <section className="relative h-[600px] w-full rounded-[3rem] overflow-hidden group border border-white/5 shadow-2xl">
                    <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Professional stadium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD0tB-xjA7gt-o6Hr2RXxY1QKb5cXH-1fBnWCMFNTAeDzFjlWQZyKI29qR3eOyiGFpPrLuIi-p6N2shfNBkTJ7MUpzij__WS-rmGoqyWa8kg-W-Up8RM5aDd5biOkgCjh5rfoITl_rOsbIXtvtEc0wx8txoMbRO96hXmmrKvvezpveJIXIolLPWCecNW7YxxOjlyEPT27DVQTGewsbiSLDNEbNWQ0AVnOZMQeCF_Fxe0DD2sgOBiwxXtdEtt_rcwWuiv_mt4_xSxj_" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent"></div>

                    {/* Glassmorphic Overlay */}
                    <div className="absolute bottom-10 left-10 right-10 glass-morphism rounded-[2.5rem] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-white/10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 rounded-full bg-brand-lime/10 text-brand-lime text-[10px] font-black uppercase tracking-widest border border-brand-lime/20 italic">Elite Status</span>
                                <div className="flex items-center text-brand-lime gap-1.5 bg-brand-lime/10 px-3 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm font-black italic">bolt</span>
                                    <span className="text-xs font-black">4.9</span>
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic">Performance <span className="gradient-text">Arena</span></h2>
                            <div className="flex items-center gap-3 text-white/40">
                                <span className="material-symbols-outlined text-lg">location_on</span>
                                <p className="text-[11px] font-black uppercase tracking-widest italic">Olympic Village • District 7 • Metro Elite</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="size-14 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center transition-all group/btn">
                                <span className="material-symbols-outlined group-hover:text-brand-lime transition-colors">favorite</span>
                            </button>
                            <button className="h-16 px-10 btn-lime font-display">
                                Reserve Slot
                            </button>
                        </div>
                    </div>
                </section>

                {/* Stats Grid */}
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: "groups", label: "Capacity", val: "15K Elite" },
                        { icon: "grass", label: "Surface", val: "Natural Pro" },
                        { icon: "lightbulb", label: "Lighting", val: "8K Vision" },
                        { icon: "verified", label: "Protocol", val: "FIFA ELITE" }
                    ].map((stat, i) => (
                        <div key={i} className="glass-morphism rounded-3xl p-8 flex items-center gap-6 border border-white/5 group hover:border-brand-lime/30 transition-all duration-500">
                            <div className="size-16 rounded-[1.25rem] bg-brand-lime/5 flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-brand-deep transition-all duration-500">
                                <span className="material-symbols-outlined text-2xl font-black">{stat.icon}</span>
                            </div>
                            <div>
                                <p className="text-[9px] text-white/20 font-black uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                                <p className="text-lg font-black font-display uppercase tracking-tight">{stat.val}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column */}
                    <div className="lg:col-span-8 space-y-16">
                        <section className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-black font-display uppercase tracking-wider italic">Elite Amenities</h3>
                                <div className="h-px flex-1 mx-8 bg-white/5"></div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {[
                                    { icon: "checkroom", title: "Pro Lockers", desc: "Heated storage" },
                                    { icon: "local_parking", title: "Secure Deck", desc: "24/7 Monitored" },
                                    { icon: "wifi", title: "6G Network", desc: "Ultra-low latency" },
                                    { icon: "medical_services", title: "Physio Lab", desc: "On-site specialists" },
                                    { icon: "restaurant", title: "Elite Lounge", desc: "Nutrition focused" },
                                    { icon: "videocam", title: "AI Analysis", desc: "Performance tracking" }
                                ].map((item, i) => (
                                    <div key={i} className="glass-morphism p-8 rounded-[2rem] space-y-4 border border-white/5 hover:bg-white/5 transition-all">
                                        <span className="material-symbols-outlined text-brand-lime text-3xl font-black">{item.icon}</span>
                                        <div>
                                            <p className="font-black text-[11px] uppercase tracking-widest text-white mb-1">{item.title}</p>
                                            <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Timeline Picker */}
                        <section className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-black font-display uppercase tracking-tight italic">Temporal <span className="text-brand-lime">Selection</span></h3>
                                <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/5">
                                    <button className="size-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-all">
                                        <span className="material-symbols-outlined text-lg">chevron_left</span>
                                    </button>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4">Oct 24 - 30</span>
                                    <button className="size-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-all">
                                        <span className="material-symbols-outlined text-lg">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                                {[
                                    { day: "Today", date: "24", active: true },
                                    { day: "Mon", date: "25" },
                                    { day: "Tue", date: "26" },
                                    { day: "Wed", date: "27" },
                                    { day: "Thu", date: "28" },
                                    { day: "Fri", date: "29" },
                                    { day: "Sat", date: "30" }
                                ].map((d, i) => (
                                    <button key={i} className={`flex flex-col items-center py-6 rounded-2xl transition-all border ${d.active ? "bg-brand-lime border-brand-lime text-brand-deep shadow-xl shadow-brand-lime/20" : "bg-white/5 border-white/5 hover:bg-white/10 text-white"}`}>
                                        <span className={`text-[9px] uppercase font-black tracking-widest mb-2 ${d.active ? "text-brand-deep" : "text-white/30"}`}>{d.day}</span>
                                        <span className="text-xl font-black">{d.date}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"].map((slot, i) => (
                                    <button key={i} className={`py-5 rounded-2xl font-black text-[11px] tracking-[0.3em] transition-all border ${i === 4 ? "bg-brand-lime text-brand-deep border-brand-lime shadow-xl shadow-brand-lime/10" : "bg-white/5 border-white/5 text-white/40 hover:text-white"}`}>
                                        {slot} AM
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28 glass-morphism rounded-[2.5rem] p-10 border border-white/10 shadow-3xl space-y-10">
                            <div className="space-y-4">
                                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Elite Rate</p>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-6xl font-black font-display tracking-tight text-white">$85</span>
                                    <span className="text-white/30 font-black text-xs uppercase tracking-widest">/ SESSION</span>
                                </div>
                            </div>

                            <div className="space-y-6 py-8 border-y border-white/5">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30 italic">Temporal Slot</span>
                                    <span className="text-[11px] font-black uppercase tracking-widest">Today, 16:00</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30 italic">Duration</span>
                                    <span className="text-[11px] font-black uppercase tracking-widest">120 Minutes</span>
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-dashed border-white/10">
                                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-lime">Global Total</span>
                                    <span className="text-3xl font-black font-display tracking-tighter text-white">$170.00</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Link href="/checkout">
                                    <button className="w-full h-18 btn-lime font-display py-6 text-sm">
                                        INITIALIZE RESERVATION
                                    </button>
                                </Link>
                                <button className="w-full h-16 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3">
                                    <span className="material-symbols-outlined text-sm">event_repeat</span>
                                    Sync to Calendar
                                </button>
                            </div>

                            <div className="flex items-center gap-3 px-2">
                                <span className="size-1.5 bg-brand-lime rounded-full animate-pulse"></span>
                                <p className="text-[9px] text-white/20 uppercase font-black tracking-widest leading-relaxed">
                                    Reservation held for 10 minutes. Premium cancellation protocols apply.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-20 border-t border-white/5 mt-20 text-center">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 text-left">
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="size-10 bg-brand-lime rounded-xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-brand-deep text-2xl font-black italic">bolt</span>
                            </div>
                            <h1 className="text-2xl font-black tracking-[0.1em] uppercase">STADIUM<span className="text-brand-lime">BOOK</span></h1>
                        </Link>
                        <p className="text-[11px] text-white/30 font-bold uppercase tracking-widest leading-relaxed">
                            Providing the global elite with unparalleled access to performance-grade athletic infrastructure.
                        </p>
                    </div>
                    <div className="md:col-span-8 flex flex-wrap gap-20">
                        {["Platform", "Resources", "Corporate"].map((col, i) => (
                            <div key={i} className="space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-lime italic">{col}</h4>
                                <ul className="space-y-4">
                                    {["Venues", "Elite Membership", "API Access", "Terms"].slice(0, 3).map((link, j) => (
                                        <li key={j}><Link href="#" className="text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">{link}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-white/5 text-center">
                    <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">© 2026 STADIUMBOOK GLOBAL. ELITE ACCESS GUARANTEED.</p>
                </div>
            </footer>
        </div>
    );
}
