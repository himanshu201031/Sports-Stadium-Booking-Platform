"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dashboard() {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
        { name: "My Bookings", href: "/dashboard", icon: "calendar_today" },
        { name: "Find a Venue", href: "/venues", icon: "map" },
        { name: "Profile", href: "/settings", icon: "person" },
        { name: "Settings", href: "/settings", icon: "settings" },
    ];

    return (
        <div className="bg-background-dark text-slate-200 min-h-screen font-display flex h-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-72 glass-card flex flex-col border-r border-white/10 shrink-0">
                <div className="p-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="size-10 bg-neon-green rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-2xl">sports_soccer</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-white">Elite Arena</h1>
                    </Link>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${pathname === item.href
                                    ? "bg-neon-green/10 border-r-3 border-neon-green text-neon-green"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    ))}
                </nav>
                <div className="p-4 mt-auto">
                    <Link href="/venues">
                        <button className="w-full flex items-center justify-center gap-2 bg-neon-green hover:bg-neon-green/90 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-neon-green/20 transition-all">
                            <span className="material-symbols-outlined">add_circle</span>
                            Book New Venue
                        </button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-background-dark to-background-dark">
                {/* Top Header */}
                <header className="h-20 glass-card border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-10">
                    <div className="relative w-96">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
                        <input
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 focus:ring-1 focus:ring-neon-green focus:border-neon-green outline-none text-sm transition-all"
                            placeholder="Search venues, matches or players..."
                            type="text"
                        />
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all">
                            <span className="material-symbols-outlined text-slate-400">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-neon-green rounded-full border-2 border-background-dark"></span>
                        </div>
                        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                            <div className="text-right">
                                <p className="text-sm font-semibold text-white">Alex Johnson</p>
                                <p className="text-xs text-slate-500">Elite Member</p>
                            </div>
                            <div
                                className="size-10 rounded-full bg-slate-700 border border-white/20 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3sQ5ehn3bQ59oAD8xcaxN1_XnZhc57s2VFazC8dN0Kzg37ZbsIy9tlvGPqbVYss-4JV7EGKACvq3hFm2K5NCwU4Y5wJa5hPMPlhnqpVmaOwJG2XlCQmeOIrPAjwHA_lvrUAgoCeLOGd4L1lbVpxUv8_aeABUKWWyHcT7cBKnfVTzDQsHs1W-zg4d68xXhTGjvn5buEP9fH5msqfEAKbf7bAKdw12xqfV76v4Z8kP7jyEYMu4OWzmzqDlAI1J8cJBpdVaP3EEJMzIT')" }}
                            ></div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
                    {/* Overview Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card p-6 rounded-lg group hover:border-neon-green/50 transition-all cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-neon-green/10 rounded-lg text-neon-green">
                                    <span className="material-symbols-outlined">sports_soccer</span>
                                </div>
                                <span className="text-neon-green text-xs font-bold uppercase tracking-wider">+1 This week</span>
                            </div>
                            <p className="text-slate-400 text-sm font-medium">Upcoming Matches</p>
                            <h3 className="text-3xl font-bold text-white mt-1">
                                3 <span className="text-sm font-normal text-slate-500">Scheduled</span>
                            </h3>
                        </div>
                        <div className="glass-card p-6 rounded-lg group hover:border-primary-blue/50 transition-all cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-primary-blue/10 rounded-lg text-primary-blue">
                                    <span className="material-symbols-outlined">confirmation_number</span>
                                </div>
                                <span className="text-primary-blue text-xs font-bold uppercase tracking-wider">Lifetime</span>
                            </div>
                            <p className="text-slate-400 text-sm font-medium">Total Bookings</p>
                            <h3 className="text-3xl font-bold text-white mt-1">
                                24 <span className="text-sm font-normal text-slate-500">Venues</span>
                            </h3>
                        </div>
                        <div className="glass-card p-6 rounded-lg group hover:border-yellow-500/50 transition-all cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                                    <span className="material-symbols-outlined">workspace_premium</span>
                                </div>
                                <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider">+150 Today</span>
                            </div>
                            <p className="text-slate-400 text-sm font-medium">Reward Points</p>
                            <h3 className="text-3xl font-bold text-white mt-1">
                                1,250 <span className="text-sm font-normal text-slate-500">pts</span>
                            </h3>
                        </div>
                    </div>

                    {/* Upcoming Bookings Section */}
                    <section>
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Upcoming Bookings</h2>
                                <p className="text-slate-500 text-sm">Don't miss your upcoming games</p>
                            </div>
                            <button className="text-neon-green text-sm font-bold hover:underline">View All Schedule</button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Booking Card 1 */}
                            <div className="glass-card rounded-lg overflow-hidden flex flex-col sm:flex-row group">
                                <div className="sm:w-48 h-48 sm:h-auto overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjB0flrGfA_pt-YXx9l0W4Z447_gILGxBubCRI4IgCGV-PAxIJ3xZOkx9TmYXoFu9k2vTjZ-1zjXNyNwcbwkXCHNQnPTKLOLf1I1uXX27GnFFguP2yGGsKd7R0Adomdb63UG9G19misoFpsaT3XTxOJTkyYdBsUmEXNuZNIig3_MGPB91pdLgYseSrFUuifkBHM9TxfGsSuLGt1JNYMOGMO0K2EjVQLZYAnFo4mbfmPjhlVDjPpDQbY47IivJ_GOzlthJ0YcAwPEON')" }}
                                    ></div>
                                </div>
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold text-white">Wembley Pitch A</h4>
                                            <span className="px-2 py-1 rounded bg-neon-green/20 text-neon-green text-[10px] font-bold uppercase">Confirmed</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                                <span className="material-symbols-outlined text-base">calendar_month</span>
                                                <span>Tuesday, Oct 24, 2023</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                                <span className="material-symbols-outlined text-base">schedule</span>
                                                <span>18:00 - 20:00 (2 hrs)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-3">
                                        <button className="flex-1 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold py-2 rounded-lg transition-all">View Details</button>
                                        <button className="flex-1 bg-neon-green/20 hover:bg-neon-green/30 text-neon-green text-sm font-semibold py-2 rounded-lg transition-all border border-neon-green/30">Manage</button>
                                    </div>
                                </div>
                            </div>
                            {/* Booking Card 2 */}
                            <div className="glass-card rounded-lg overflow-hidden flex flex-col sm:flex-row group">
                                <div className="sm:w-48 h-48 sm:h-auto overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1WVrfOxiDSNInxDKWNTGqSiSK7zUGtQ-8mXScXSe9rDMglUx_9foSbDTyb6oaFKMsLo5nR_nK6G27MlUiSfJf9kNumQ1XywjbAWjwmKsxETvP1--tN46dUeUtUW0KFJSzSccRkmi4MzEYjZcieGrUm73lgyn6jssiALdwLw3o5BtX-W80K6fId9kJrbcGTsNwWfvw6pgxW28ykmAZa3gCIHu2iSkhz2q77QktMZ8IfZE_XxX1u5hX3XwghcR2JEJVTwfPUy43XqWf')" }}
                                    ></div>
                                </div>
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold text-white">Old Trafford Training</h4>
                                            <span className="px-2 py-1 rounded bg-neon-green/20 text-neon-green text-[10px] font-bold uppercase">Confirmed</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                                <span className="material-symbols-outlined text-base">calendar_month</span>
                                                <span>Saturday, Oct 28, 2023</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                                <span className="material-symbols-outlined text-base">schedule</span>
                                                <span>20:00 - 22:00 (2 hrs)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-3">
                                        <button className="flex-1 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold py-2 rounded-lg transition-all">View Details</button>
                                        <button className="flex-1 bg-neon-green/20 hover:bg-neon-green/30 text-neon-green text-sm font-semibold py-2 rounded-lg transition-all border border-neon-green/30">Manage</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Activity Section */}
                    <section>
                        <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
                        <div className="glass-card rounded-lg divide-y divide-white/5 overflow-hidden">
                            <div className="p-5 flex items-center justify-between hover:bg-white/[0.02] transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
                                        <span className="material-symbols-outlined">stadium</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Emirates Arena Court 4</p>
                                        <p className="text-xs text-slate-500">Oct 15, 2023 • 14:00 • 5-a-side Football</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="hidden sm:block text-right">
                                        <p className="text-sm font-semibold text-white">$45.00</p>
                                        <p className="text-xs text-slate-500">Payment ID: #8829</p>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-neon-green/10 text-neon-green text-xs font-bold border border-neon-green/20">Completed</span>
                                    <button className="p-2 text-slate-500 hover:text-white transition-all">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>
                            {/* ... other items ... */}
                        </div>
                    </section>
                </div>
            </main>

            <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
        </div>
    );
}
