"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function VenueDetails() {
    const params = useParams();
    const id = params.id;

    return (
        <div className="bg-background-dark text-white font-display min-h-screen">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full glass-morphism border-b border-glass-border">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="size-10 bg-neon-green rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">sports_soccer</span>
                            </div>
                            <h1 className="text-xl font-extrabold tracking-tighter uppercase">Elite Arena</h1>
                        </Link>
                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                            <Link className="hover:text-neon-green transition-colors" href="/venues">Venues</Link>
                            <Link className="hover:text-neon-green transition-colors" href="/dashboard">Leagues</Link>
                            <Link className="hover:text-neon-green transition-colors" href="#">Coaching</Link>
                            <Link className="hover:text-neon-green transition-colors" href="/dashboard">Membership</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-neon-green rounded-full"></span>
                        </button>
                        <Link href="/settings" className="h-10 w-10 rounded-full border-2 border-neon-green overflow-hidden">
                            <img className="w-full h-full object-cover" alt="User profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB238-Wr3KGYSWl34GbePeiPG-B2dfWSDD9dHpKOHf4LJibmr9Il6V-9oZMi0yq5VgPe5Fwk6CSzvMCGtQeW40xOyUzsxXhfzOz31drkflm7e-FVz2DHS76Km8ttf34xeE7clzZngEDCLSZoea4FpiNTfd2dTHOd2tGf66Bk0PjpZhWGLJfcYpFaLOY_gp3IMdkjWtTbDco-42c2CGQlOh_XIF-EPM2hA8OF8NTqQJZbLdWu07PY9svWLTMS_J-xvY9jwMXNJR4gE0-" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
                {/* Hero Section */}
                <section className="relative h-[500px] w-full rounded-3xl overflow-hidden group">
                    <img className="w-full h-full object-cover" alt="High quality aerial view of professional stadium at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD0tB-xjA7gt-o6Hr2RXxY1QKb5cXH-1fBnWCMFNTAeDzFjlWQZyKI29qR3eOyiGFpPrLuIi-p6N2shfNBkTJ7MUpzij__WS-rmGoqyWa8kg-W-Up8RM5aDd5biOkgCjh5rfoITl_rOsbIXtvtEc0wx8txoMbRO96hXmmrKvvezpveJIXIolLPWCecNW7YxxOjlyEPT27DVQTGewsbiSLDNEbNWQ0AVnOZMQeCF_Fxe0DD2sgOBiwxXtdEtt_rcwWuiv_mt4_xSxj_" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                    {/* Glassmorphic Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 glass-morphism rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-neon-green/20 text-neon-green text-xs font-bold uppercase tracking-widest border border-neon-green/30">Premium Venue</span>
                                <div className="flex items-center text-yellow-500 gap-1">
                                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                                    <span className="text-sm font-bold text-white">4.9</span>
                                    <span className="text-gray-400 text-xs font-normal ml-1">(128 reviews)</span>
                                </div>
                            </div>
                            <h2 className="text-4xl font-black tracking-tight">Elite Performance Arena</h2>
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="material-symbols-outlined text-base">location_on</span>
                                <span className="text-sm">Olympic Boulevard, West District, Metro City</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="h-14 px-8 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-bold transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined">share</span>
                                Share
                            </button>
                            <button className="h-14 px-8 bg-neon-green hover:bg-neon-green/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-neon-green/20">
                                View Gallery
                            </button>
                        </div>
                    </div>
                </section>

                {/* Stats Grid */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                        <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-green">
                            <span className="material-symbols-outlined">groups</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Capacity</p>
                            <p className="text-xl font-bold">15,000 Seats</p>
                        </div>
                    </div>
                    <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                        <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-green">
                            <span className="material-symbols-outlined">grass</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Surface</p>
                            <p className="text-xl font-bold">Natural Grass</p>
                        </div>
                    </div>
                    <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                        <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-green">
                            <span className="material-symbols-outlined">lightbulb</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Lighting</p>
                            <p className="text-xl font-bold">4K Broadcast</p>
                        </div>
                    </div>
                    <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
                        <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-green">
                            <span className="material-symbols-outlined">verified</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Standard</p>
                            <p className="text-xl font-bold">FIFA Pro</p>
                        </div>
                    </div>
                </section>

                {/* Main Content Area: Booking & Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Details & Amenities */}
                    <div className="lg:col-span-2 space-y-12">
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold tracking-tight">World-Class Amenities</h3>
                                <button className="text-neon-green text-sm font-semibold hover:underline">View All</button>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="glass-card p-6 rounded-2xl space-y-3">
                                    <span className="material-symbols-outlined text-neon-green text-3xl">checkroom</span>
                                    <p className="font-bold">Pro Changing Rooms</p>
                                    <p className="text-xs text-gray-500">Heated lockers & saunas</p>
                                </div>
                                <div className="glass-card p-6 rounded-2xl space-y-3">
                                    <span className="material-symbols-outlined text-neon-green text-3xl">local_parking</span>
                                    <p className="font-bold">VIP Parking</p>
                                    <p className="text-xs text-gray-500">Secure 24/7 monitored</p>
                                </div>
                                <div className="glass-card p-6 rounded-2xl space-y-3">
                                    <span className="material-symbols-outlined text-neon-green text-3xl">wifi</span>
                                    <p className="font-bold">Fiber Optic Wi-Fi</p>
                                    <p className="text-xs text-gray-500">6G Low-latency network</p>
                                </div>
                                <div className="glass-card p-6 rounded-2xl space-y-3">
                                    <span className="material-symbols-outlined text-neon-green text-3xl">medical_services</span>
                                    <p className="font-bold">Medical Center</p>
                                    <p className="text-xs text-gray-500">Physio & First Aid onsite</p>
                                </div>
                                <div className="glass-card p-6 rounded-2xl space-y-3">
                                    <span className="material-symbols-outlined text-neon-green text-3xl">restaurant</span>
                                    <p className="font-bold">Player's Lounge</p>
                                    <p className="text-xs text-gray-500">Nutrition bar & seating</p>
                                </div>
                                <div className="glass-card p-6 rounded-2xl space-y-3">
                                    <span className="material-symbols-outlined text-neon-green text-3xl">videocam</span>
                                    <p className="font-bold">Match Recording</p>
                                    <p className="text-xs text-gray-500">AI-powered tracking cams</p>
                                </div>
                            </div>
                        </section>

                        {/* Schedule Picker */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold tracking-tight">Select Booking Slot</h3>
                                <div className="flex items-center gap-2">
                                    <button className="size-10 rounded-lg glass-card flex items-center justify-center hover:bg-white/10">
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <span className="text-sm font-bold px-2">Oct 24 - Oct 30</span>
                                    <button className="size-10 rounded-lg glass-card flex items-center justify-center hover:bg-white/10">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-6">
                                <button className="flex flex-col items-center py-4 rounded-xl glass-card border-neon-green/50 bg-neon-green/10">
                                    <span className="text-[10px] uppercase font-bold text-neon-green">Today</span>
                                    <span className="text-lg font-black">24</span>
                                </button>
                                <button className="flex flex-col items-center py-4 rounded-xl glass-card hover:bg-white/5">
                                    <span className="text-[10px] uppercase font-bold text-gray-500">Mon</span>
                                    <span className="text-lg font-black">25</span>
                                </button>
                                <button className="flex flex-col items-center py-4 rounded-xl glass-card hover:bg-white/5">
                                    <span className="text-[10px] uppercase font-bold text-gray-500">Tue</span>
                                    <span className="text-lg font-black">26</span>
                                </button>
                                {/* ... other days ... */}
                            </div>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                                <button className="py-4 rounded-xl glass-card border-transparent slot-available font-medium text-sm">08:00 AM</button>
                                <button className="py-4 rounded-xl glass-card border-transparent slot-available font-medium text-sm">09:00 AM</button>
                                <button className="py-4 rounded-xl glass-card border-transparent bg-white/5 opacity-30 cursor-not-allowed font-medium text-sm line-through">10:00 AM</button>
                                <button className="py-4 rounded-xl glass-card border-transparent bg-white/5 opacity-30 cursor-not-allowed font-medium text-sm line-through">11:00 AM</button>
                                <button className="py-4 rounded-xl glass-card border-transparent slot-available font-medium text-sm">12:00 PM</button>
                                <button className="py-4 rounded-xl glass-card border-neon-green bg-neon-green text-white font-bold text-sm">01:00 PM</button>
                                <button className="py-4 rounded-xl glass-card border-transparent slot-available font-medium text-sm">02:00 PM</button>
                                {/* ... other slots ... */}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Pricing & Sticky CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 glass-morphism rounded-3xl p-8 border border-white/10 shadow-2xl space-y-8">
                            <div className="space-y-2">
                                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Rate Per Hour</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black">$85</span>
                                    <span className="text-gray-400 font-bold">/ hour</span>
                                </div>
                            </div>
                            <div className="space-y-4 border-t border-white/10 pt-6">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Selected Slot</span>
                                    <span className="font-bold">Today, 01:00 PM</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Duration</span>
                                    <span className="font-bold">1 Hour</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Service Fee</span>
                                    <span className="font-bold">$4.50</span>
                                </div>
                                <div className="flex items-center justify-between text-lg pt-4 border-t border-dashed border-white/10">
                                    <span className="font-black">Total Price</span>
                                    <span className="font-black text-neon-green">$89.50</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Link href="/checkout">
                                    <button className="w-full h-16 bg-neon-green hover:bg-neon-green/90 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-neon-green/20 flex items-center justify-center gap-2">
                                        Confirm Booking
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </Link>
                                <button className="w-full h-14 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">calendar_add_on</span>
                                    Add to Calendar
                                </button>
                            </div>
                            <p className="text-[10px] text-center text-gray-500 uppercase font-bold tracking-widest">
                                Free cancellation up to 24 hours before
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-20 border-t border-glass-border py-12 glass-morphism">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* ... footer content ... */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-neon-green rounded flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-sm">sports_soccer</span>
                            </div>
                            <h1 className="text-lg font-extrabold tracking-tighter uppercase">Elite Arena</h1>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The pinnacle of athletic venues. Designed for performance, built for champions.
                        </p>
                    </div>
                    {/* ... */}
                </div>
            </footer>

            <style jsx global>{`
        .glass-morphism {
          background: rgba(12, 20, 12, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .slot-available:hover {
          background-color: rgba(22, 163, 74, 0.2);
          border-color: #16A34A;
        }
        .border-glass-border {
          border-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
        </div>
    );
}
