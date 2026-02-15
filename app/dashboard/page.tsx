"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dashboard() {
    const pathname = usePathname();

    const navItems = [
        { name: "Console", href: "/dashboard", icon: "grid_view" },
        { name: "My Bookings", href: "/dashboard", icon: "confirmation_number" },
        { name: "Venue Search", href: "/venues", icon: "search" },
        { name: "Profile", href: "/settings", icon: "person" },
        { name: "Account", href: "/settings", icon: "settings" },
    ];

    return (
        <div className="bg-brand-deep text-white min-h-screen font-display flex h-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-80 glass border-r border-white/5 flex flex-col shrink-0">
                <div className="p-10">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="size-10 bg-brand-lime rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-brand-deep text-2xl font-black italic">bolt</span>
                        </div>
                        <h1 className="text-xl font-black tracking-[0.1em] uppercase">STADIUM<span className="text-brand-lime">BOOK</span></h1>
                    </Link>
                </div>

                <nav className="flex-1 px-6 space-y-2 py-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-6 px-4">Menu Selection</div>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-500 group ${pathname === item.href
                                ? "bg-brand-lime text-brand-deep shadow-xl shadow-brand-lime/10"
                                : "text-white/40 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <span className={`material-symbols-outlined text-xl ${pathname === item.href ? "font-black" : "group-hover:text-brand-lime transition-colors"}`}>{item.icon}</span>
                            <span className="text-[11px] font-black uppercase tracking-widest">{item.name}</span>
                            {pathname === item.href && <span className="ml-auto size-1.5 bg-brand-deep rounded-full"></span>}
                        </Link>
                    ))}
                </nav>

                <div className="p-8 border-t border-white/5 bg-white/[0.01]">
                    <Link href="/venues">
                        <button className="w-full btn-lime font-display py-4 text-[11px]">
                            New Reservation
                        </button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-y-auto bg-brand-deep relative">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-lime/5 blur-[120px] -z-10 rounded-full"></div>

                {/* Top Header */}
                <header className="h-24 px-12 flex items-center justify-between sticky top-0 z-10 bg-brand-deep/80 backdrop-blur-md border-b border-white/5">
                    <div className="relative w-[400px]">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/20">search</span>
                        <input
                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-3 pl-12 pr-4 focus:ring-1 focus:ring-brand-lime/30 focus:border-brand-lime/30 outline-none text-[11px] font-medium transition-all"
                            placeholder="SEARCH RESERVATIONS, ARENAS..."
                            type="text"
                        />
                    </div>
                    <div className="flex items-center gap-8">
                        <button className="size-12 rounded-2xl glass border-white/5 flex items-center justify-center text-white/40 hover:text-brand-lime transition-all relative">
                            <span className="material-symbols-outlined text-xl">notifications</span>
                            <span className="absolute top-3.5 right-3.5 size-2 bg-brand-lime rounded-full border-2 border-brand-deep"></span>
                        </button>
                        <div className="flex items-center gap-4 pl-8 border-l border-white/5">
                            <div className="text-right">
                                <p className="text-[11px] font-black uppercase tracking-widest text-white">Alex Johnson</p>
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-lime mt-0.5">Premier Gold</p>
                            </div>
                            <div className="size-12 rounded-2xl bg-white/5 border border-white/10 p-1">
                                <img className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3sQ5ehn3bQ59oAD8xcaxN1_XnZhc57s2VFazC8dN0Kzg37ZbsIy9tlvGPqbVYss-4JV7EGKACvq3hFm2K5NCwU4Y5wJa5hPMPlhnqpVmaOwJG2XlCQmeOIrPAjwHA_lvrUAgoCeLOGd4L1lbVpxUv8_aeABUKWWyHcT7cBKnfVTzDQsHs1W-zg4d68xXhTGjvn5buEP9fH5msqfEAKbf7bAKdw12xqfV76v4Z8kP7jyEYMu4OWzmzqDlAI1J8cJBpdVaP3EEJMzIT" alt="Profile" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-12 space-y-12 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime mb-2">Member Overview</p>
                            <h2 className="text-4xl font-black font-display uppercase tracking-tight">System <span className="gradient-text">Statistics</span></h2>
                        </div>
                        <div className="flex gap-2">
                            <span className="px-4 py-2 rounded-full glass border-white/5 text-[9px] font-black uppercase tracking-widest text-white/30">Last Updated: Just Now</span>
                        </div>
                    </div>

                    {/* Overview Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Active Slots", val: "03", trend: "+1 New", icon: "stadium", color: "brand-lime" },
                            { label: "Total Visits", val: "24", trend: "Lifetime", icon: "confirmation_number", color: "white" },
                            { label: "Stamina Pts", val: "1,250", trend: "+150 Today", icon: "bolt", color: "brand-lime" },
                        ].map((stat, i) => (
                            <div key={i} className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-brand-lime/20 cursor-pointer transition-all duration-500">
                                <div className="absolute top-0 right-0 size-32 bg-brand-lime/5 blur-[50px] -z-10 rounded-full group-hover:bg-brand-lime/10 transition-all"></div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5 text-brand-lime">
                                        <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${stat.color === 'brand-lime' ? 'text-brand-lime' : 'text-white/40'}`}>{stat.trend}</span>
                                </div>
                                <p className="text-white/30 text-[11px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                                <h3 className="text-5xl font-black font-display tracking-tighter text-white">{stat.val}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Upcoming Bookings Section */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-black font-display uppercase tracking-wider">Active Reservations</h2>
                                <button className="text-[10px] font-black uppercase tracking-widest text-brand-lime hover:text-white transition-colors">Digital Calendar</button>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { name: "Elite Performance Arena", type: "Pitch A", date: "Tues, Oct 24", time: "18:00 - 20:00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvPYlEhMQj2HWbShttk34BGuQ3Nn0Dt3XYTxBZlkc5vVWFh3aBfWs_9vgfhE-2w7kjE2PETIJHTWo7AqdnH39MOdW0OKtfP4_5d6_FxMeopTzCnfHdOA9mDkewjon_hoYPBUzLu6vMyZ0HEt4ewJxNsAS4CaXvwRAno30Mud0U3oJ8fbx0jT3phTMlG057qaYfGc60Zp8FbUoOLFHpr4W_D9nUm8R3kcw2m2KYvBgza5cOekBrU1Ox2vIycIpSHgQ_qB33DnWUaYTy" },
                                    { name: "Skyline Hoops Premium", type: "Court 2", date: "Sat, Oct 28", time: "20:00 - 22:00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1WVrfOxiDSNInxDKWNTGqSiSK7zUGtQ-8mXScXSe9rDMglUx_9foSbDTyb6oaFKMsLo5nR_nK6G27MlUiSfJf9kNumQ1XywjbAWjwmKsxETvP1--tN46dUeUtUW0KFJSzSccRkmi4MzEYjZcieGrUm73lgyn6jssiALdwLw3o5BtX-W80K6fId9kJrbcGTsNwWfvw6pgxW28ykmAZa3gCIHu2iSkhz2q77QktMZ8IfZE_XxX1u5hX3XwghcR2JEJVTwfPUy43XqWf" }
                                ].map((booking, i) => (
                                    <div key={i} className="glass-card p-6 rounded-[2rem] flex flex-col sm:flex-row gap-8 group hover:border-brand-lime/10 transition-all duration-500">
                                        <div className="sm:w-48 h-40 rounded-2xl overflow-hidden shrink-0">
                                            <img className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" src={booking.img} alt={booking.name} />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-2">
                                            <div>
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h4 className="text-xl font-bold font-display uppercase tracking-tight text-white mb-1">{booking.name}</h4>
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-lime">{booking.type}</p>
                                                    </div>
                                                    <span className="px-3 py-1 rounded-full bg-brand-lime/10 text-brand-lime text-[9px] font-black uppercase tracking-widest border border-brand-lime/10">Authorized</span>
                                                </div>
                                                <div className="flex flex-wrap gap-6 mt-4">
                                                    <div className="flex items-center gap-3 text-white/40">
                                                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                                                        <span className="text-[10px] font-black uppercase tracking-widest">{booking.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-white/40">
                                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                                        <span className="text-[10px] font-black uppercase tracking-widest">{booking.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-8 flex gap-3">
                                                <button className="px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Details</button>
                                                <button className="px-6 py-2.5 rounded-xl border border-brand-lime/20 text-brand-lime text-[10px] font-black uppercase tracking-widest hover:bg-brand-lime hover:text-brand-deep transition-all duration-500">Modify Reservation</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity Mini */}
                        <div className="space-y-8">
                            <h2 className="text-xl font-black font-display uppercase tracking-wider">Feed</h2>
                            <div className="glass shadow-2xl rounded-[2.5rem] divide-y divide-white/5 overflow-hidden border border-white/5">
                                {[
                                    { title: "Payment Verified", sub: "Oct 15 • -$45.00", icon: "check_circle" },
                                    { title: "Review Published", sub: "Oct 12 • 5 Stars", icon: "grade" },
                                    { title: "Account Secured", sub: "Oct 10 • Success", icon: "verified_user" },
                                ].map((act, i) => (
                                    <div key={i} className="p-8 hover:bg-white/[0.02] transition-all group flex items-center gap-5">
                                        <div className="size-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/20 group-hover:text-brand-lime transition-all">
                                            <span className="material-symbols-outlined text-xl">{act.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.1em] text-white mb-1">{act.title}</p>
                                            <p className="text-[9px] font-bold text-white/30 tracking-widest">{act.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
