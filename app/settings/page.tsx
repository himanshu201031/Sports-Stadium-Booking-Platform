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
        <div className="bg-background-dark font-display text-white min-h-screen flex h-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-72 flex-shrink-0 border-r border-[#ffffff14] bg-[#0d1117] flex flex-col">
                <div className="p-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-neon-green rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-black font-bold">stadium</span>
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase italic text-white">
                            Arena<span className="text-neon-green">Pro</span>
                        </span>
                    </Link>
                </div>
                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${pathname === item.href
                                    ? "bg-neon-green/10 border-l-3 border-neon-green text-neon-green"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span className="font-medium text-sm tracking-wide">{item.name}</span>
                        </Link>
                    ))}
                </nav>
                <div className="p-6">
                    <div className="glass-panel p-4 rounded-xl space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img
                                    className="w-10 h-10 rounded-full object-cover border-2 border-neon-green"
                                    alt="Marcus Sterling"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl-djof-FtjLLvGKnr_rXhbKS1ms_8eH9wk77goeEx49KRTt6vQiTk6YIFaqhFn7h9P1YhJ3ztgrXrQWniS5jAcXaWIOj21mdfff9reBGwCC3iRDB4wnBGvwxZpsreoVvXMOnGAxKlsRLaxpWZcNMSPw0V0az9MEYJDbvufk6MRIWm-PYc-MiK_gts7nPFvtjQvOdYkWQBij0O2lZj_RLBr79-tIWs82s-rNhGru2YhGcqiF9fbe19qwYtT_0NZekG8HEiZL-9Pb9K"
                                />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-neon-green border-2 border-[#0d1117] rounded-full"></div>
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs font-bold truncate">Marcus Sterling</p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Elite Member</p>
                            </div>
                        </div>
                        <button className="w-full bg-neon-green hover:bg-emerald-400 text-black py-2.5 rounded-lg text-xs font-bold transition-all shadow-lg shadow-neon-green/20">
                            Upgrade to PRO
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto bg-background-dark p-8 md:p-12 custom-scrollbar">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Header */}
                    <header>
                        <h1 className="text-4xl font-black tracking-tight text-white mb-2">Account Settings</h1>
                        <p className="text-gray-400">Manage your stadium profile, security credentials, and preferences.</p>
                    </header>

                    {/* Profile Information Section */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-neon-green">badge</span>
                                Profile Information
                            </h2>
                        </div>
                        <div className="glass-panel rounded-xl p-8">
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative group">
                                        <img
                                            className="w-32 h-32 rounded-full object-cover border-4 border-[#ffffff14] group-hover:border-neon-green transition-all"
                                            alt="Marcus Sterling portrait"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi3ilRA1V9HmO46yQULu1rRtYCC6jDNKl0s819ajxDnHH-Z1wddXE159Fl0mXOrPIbhamlFzlxWdi99wuvDmY4QO7lt8FSERlrAz01dss95GvNCM0w7bl7rY1juM3g71O8uIPPxWkIbjx5M80UA1fAJ4n9dfYDjVd33kfOi1XXv3je0djuaDouOt7FxRnbkjviIFp-YAfuAcaiESy_mMPQiEPV4vSFFmP5dEXcBCckB4HWuf_TpImGEMvTd4Xipe1SXCKD6McwQ0zE"
                                        />
                                        <button className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-white">photo_camera</span>
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium">Profile Photo</p>
                                        <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                                    </div>
                                </div>
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Full Name</label>
                                        <input className="input-field" type="text" defaultValue="Marcus Sterling" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email Address</label>
                                        <input className="input-field" type="email" defaultValue="m.sterling@example.com" />
                                    </div>
                                    {/* ... other fields ... */}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Security Section */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-neon-green">security</span>
                            Security
                        </h2>
                        <div className="glass-panel rounded-xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <input className="input-field" placeholder="Current Password" type="password" />
                                <input className="input-field" placeholder="New Password" type="password" />
                                <input className="input-field" placeholder="Confirm New Password" type="password" />
                            </div>
                        </div>
                    </section>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-end gap-4 pt-4 pb-12">
                        <button className="px-6 py-3 rounded-lg border border-[#ffffff14] hover:bg-white/5 text-sm font-bold transition-all">
                            Cancel Changes
                        </button>
                        <button className="px-8 py-3 rounded-lg bg-neon-green hover:bg-emerald-400 text-black text-sm font-black uppercase tracking-widest transition-all shadow-xl shadow-neon-green/30">
                            Save Changes
                        </button>
                    </div>
                </div>
            </main>

            <style jsx global>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .input-field {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .input-field:focus {
          border-color: #16A34A;
          box-shadow: 0 0 0 1px #16A34A;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
        </div>
    );
}
