"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Settings() {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
        { name: "My Bookings", href: "/dashboard", icon: "calendar_month" },
        { name: "Find a Venue", href: "/venues", icon: "map" },
        { name: "Profile", href: "/settings", icon: "person" },
        { name: "Settings", href: "/settings", icon: "settings" },
    ];

    return (
        <div className="bg-brand-deep font-display text-white min-h-screen flex h-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-80 glass border-r border-white/5 flex flex-col shrink-0">
                <div className="p-10">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="size-10 bg-brand-lime rounded-xl flex items-center justify-center">
                            <span className="material-symbols-outlined text-brand-deep text-2xl font-black italic">bolt</span>
                        </div>
                        <h1 className="text-xl font-black tracking-[0.1em] uppercase italic">STADIUM<span className="text-brand-lime">BOOK</span></h1>
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
                        </Link>
                    ))}
                </nav>

                <div className="p-8 border-t border-white/5 bg-white/[0.01]">
                    <div className="glass-morphism p-6 rounded-[2rem] space-y-6 border border-white/5">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <img
                                    className="w-12 h-12 rounded-2xl object-cover border-2 border-brand-lime/20"
                                    alt="Marcus Sterling"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl-djof-FtjLLvGKnr_rXhbKS1ms_8eH9wk77goeEx49KRTt6vQiTk6YIFaqhFn7h9P1YhJ3ztgrXrQWniS5jAcXaWIOj21mdfff9reBGwCC3iRDB4wnBGvwxZpsreoVvXMOnGAxKlsRLaxpWZcNMSPw0V0az9MEYJDbvufk6MRIWm-PYc-MiK_gts7nPFvtjQvOdYkWQBij0O2lZj_RLBr79-tIWs82s-rNhGru2YhGcqiF9fbe19qwYtT_0NZekG8HEiZL-9Pb9K"
                                />
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-lime border-4 border-brand-deep rounded-full"></div>
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-[11px] font-black truncate uppercase tracking-tight">Marcus Sterling</p>
                                <p className="text-[9px] text-brand-lime font-black uppercase tracking-[0.2em] mt-0.5 italic">Elite Member</p>
                            </div>
                        </div>
                        <button className="w-full btn-lime py-3 text-[10px] tracking-[0.2em]">
                            UPGRADE TO PRO
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto bg-brand-deep p-12 custom-scrollbar relative">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-lime/5 blur-[120px] -z-10 rounded-full"></div>

                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Header */}
                    <header>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime mb-2">Member Console</p>
                        <h1 className="text-5xl font-black tracking-tight text-white uppercase font-display italic">Account <span className="gradient-text">Settings</span></h1>
                        <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.1em] mt-4">Manage your stadium profile, security credentials, and elite preferences.</p>
                    </header>

                    {/* Profile Information Section */}
                    <section className="space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-black font-display uppercase tracking-widest flex items-center gap-4 italic text-white/80">
                                <span className="material-symbols-outlined text-brand-lime">badge</span>
                                Profile Information
                            </h2>
                        </div>
                        <div className="glass-morphism rounded-[3rem] p-10 border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 size-48 bg-brand-lime/5 blur-[80px] -z-10 rounded-full"></div>

                            <div className="flex flex-col md:flex-row gap-12">
                                <div className="flex flex-col items-center gap-6">
                                    <div className="relative group">
                                        <div className="size-40 rounded-[2.5rem] overflow-hidden border-2 border-white/5 group-hover:border-brand-lime/30 transition-all duration-700">
                                            <img
                                                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                                alt="Marcus Sterling portrait"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi3ilRA1V9HmO46yQULu1rRtYCC6jDNKl0s819ajxDnHH-Z1wddXE159Fl0mXOrPIbhamlFzlxWdi99wuvDmY4QO7lt8FSERlrAz01dss95GvNCM0w7bl7rY1juM3g71O8uIPPxWkIbjx5M80UA1fAJ4n9dfYDjVd33kfOi1XXv3je0djuaDouOt7FxRnbkjviIFp-YAfuAcaiESy_mMPQiEPV4vSFFmP5dEXcBCckB4HWuf_TpImGEMvTd4Xipe1SXCKD6McwQ0zE"
                                            />
                                        </div>
                                        <button className="absolute inset-4 flex items-center justify-center bg-brand-deep/80 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <span className="material-symbols-outlined text-brand-lime">photo_camera</span>
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] font-black uppercase tracking-widest mb-1 italic">Profile Identity</p>
                                        <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest">PNG, JPG UP TO 10MB</p>
                                    </div>
                                </div>
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-2 italic">Full Name</label>
                                        <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-lime/30 transition-all text-sm font-medium" type="text" defaultValue="Marcus Sterling" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-2 italic">Email Address</label>
                                        <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-lime/30 transition-all text-sm font-medium" type="email" defaultValue="m.sterling@example.com" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-2 italic">Preferred Sport</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-lime/30 transition-all text-sm font-medium appearance-none">
                                            <option className="bg-brand-deep">Football</option>
                                            <option className="bg-brand-deep">Tennis</option>
                                            <option className="bg-brand-deep">Basketball</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-2 italic">Discovery Region</label>
                                        <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-lime/30 transition-all text-sm font-medium" type="text" defaultValue="Greater New York Area" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Security Section */}
                    <section className="space-y-8">
                        <h2 className="text-xl font-black font-display uppercase tracking-widest flex items-center gap-4 italic text-white/80">
                            <span className="material-symbols-outlined text-brand-lime">security</span>
                            Protocol & Security
                        </h2>
                        <div className="glass-morphism rounded-[3rem] p-10 border border-white/5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-2 italic">Current Sequence</label>
                                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-lime/30 transition-all text-sm font-medium" type="password" placeholder="••••••••" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-2 italic">New Keyphrase</label>
                                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-lime/30 transition-all text-sm font-medium" type="password" placeholder="New Password" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-2 italic">Confirm Keyphrase</label>
                                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-lime/30 transition-all text-sm font-medium" type="password" placeholder="Confirm Password" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-end gap-6 pt-4 pb-20">
                        <button className="px-10 py-4 rounded-2xl border border-white/10 hover:bg-white/5 text-[11px] font-black uppercase tracking-widest transition-all italic text-white/40 hover:text-white">
                            Discard Changes
                        </button>
                        <button className="px-12 py-4 rounded-2xl bg-brand-lime text-brand-deep text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-brand-lime/20 hover:scale-105 active:scale-95">
                            Sync Profile
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
