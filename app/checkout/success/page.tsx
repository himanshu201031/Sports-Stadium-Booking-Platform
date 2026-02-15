"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BookingSuccess() {
    return (
        <div className="font-display bg-brand-deep text-white min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

                <div className="w-full max-w-4xl mx-auto text-center z-10">
                    <div className="mb-10 inline-flex items-center justify-center size-32 rounded-[2.5rem] bg-brand-lime text-brand-deep shadow-[0_0_60px_rgba(217,255,50,0.3)]">
                        <span className="material-symbols-outlined text-6xl font-black">verified</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight font-display uppercase italic">Access <span className="gradient-text">Granted</span></h1>
                    <p className="text-xl text-white/30 mb-16 font-medium max-w-2xl mx-auto uppercase tracking-widest">Your elite session at Grand Olympic Arena is officially locked in.</p>

                    <div className="glass-morphism rounded-[3rem] p-10 sm:p-12 mb-16 text-left relative border border-white/5">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <span className="material-symbols-outlined text-[120px] font-black italic">bolt</span>
                        </div>

                        <div className="flex flex-wrap justify-between items-end gap-8 mb-12 pb-10 border-b border-white/5">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-4">Verification Code</p>
                                <p className="text-3xl font-black font-display text-brand-lime tracking-widest uppercase">SB-8829-QX</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-4">Settled Amount</p>
                                <p className="text-5xl font-black font-display tracking-tighter">$192<span className="text-2xl opacity-20">.50</span></p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex items-start gap-6">
                                <div className="size-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-brand-lime">stadium</span>
                                </div>
                                <div className="py-1">
                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Venue Location</p>
                                    <p className="text-xl font-black font-display uppercase tracking-tight">Grand Olympic Arena</p>
                                    <p className="text-[11px] font-black text-brand-lime uppercase tracking-widest mt-1 italic">Executive Wing • Court 4</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="size-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-brand-lime">event_available</span>
                                </div>
                                <div className="py-1">
                                    <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Temporal Window</p>
                                    <p className="text-xl font-black font-display uppercase tracking-tight">Sat, Oct 24, 2026</p>
                                    <p className="text-[11px] font-black text-white uppercase tracking-widest mt-1">18:00 - 20:00 LOCAL</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center gap-10">
                            <div className="bg-white p-4 rounded-[2rem] shrink-0 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                                <img alt="QR Access" className="w-40 h-40 object-contain grayscale brightness-90 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZIm38I0my58sgAqGQ5fc48EcR_xiUgeem8fjYnPRAVjB0KzTAdBusjA62bB-CZTKhfTPWJ6kh-Cxu2oE_MYBk2YmdYxxEKS6qNjfF2W96kRlFditB3T4WIoF1Yp0ig9zUzS8U3HNKyB9P7ZdUvKv1ROdh5JKgck4gNxLaI6vT9FT3J6FD89pSuuNko4onvlc_sOtLg5wKtFSpO9fOhFptyFzFV6oh1aHbllGgbwD8HOKy1q0CKR0v_dfj5hEz5AX1HuSQoEUjhZq" />
                            </div>
                            <div className="flex-1 text-center lg:text-left">
                                <h4 className="text-sm font-black uppercase tracking-widest text-white mb-2">Digital Pass Ready</h4>
                                <p className="text-[11px] text-white/30 font-bold leading-relaxed uppercase tracking-[0.1em]">Present this encrypted signature at the terminal interface for instant authorization. Your credentials have been synchronized with your mobile device.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/dashboard" className="btn-lime font-display py-5 px-12 text-sm">
                            Return to Console
                        </Link>
                        <button className="px-10 rounded-[1.5rem] glass border border-white/10 text-white font-black uppercase tracking-[0.2em] text-[11px] py-5 hover:bg-white/5 transition-all">
                            Export Manifest
                        </button>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-white/5 text-center mt-auto">
                <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">© 2026 STADIUMBOOK GLOBAL. SYSTEM STATUS: OPERATIONAL.</p>
            </footer>
        </div>
    );
}
