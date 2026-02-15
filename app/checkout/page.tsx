"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Checkout() {
    const router = useRouter();

    const handlePayment = () => {
        router.push("/checkout/success");
    };

    return (
        <div className="font-display bg-brand-deep text-white min-h-screen">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                {/* Header Information */}
                <div className="mb-16">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime mb-2">Checkout Logic</p>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight font-display">Finalize <span className="gradient-text">Reservation</span></h1>
                    <p className="text-white/30 text-lg mt-4 font-medium max-w-2xl leading-relaxed">You are seconds away from securing your elite playing time at Grand Olympic Arena.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Column: Summary */}
                    <div className="lg:col-span-7 space-y-10">
                        <section className="glass-morphism rounded-[2.5rem] p-10 overflow-hidden relative">
                            <div className="absolute top-0 right-0 size-48 bg-brand-lime/5 blur-[60px] -z-10 rounded-full"></div>

                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="w-full md:w-56 h-40 rounded-3xl overflow-hidden shrink-0 border border-white/5 shadow-2xl">
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqlyobLVo2lq4qp9C-cXwfSlvq_ngxKxv46VFn3cVHKYaQ-7PT8QyGewlVu8GjB8KKJ9J0BNIKeXEbV6qtvIWNRLaLudACPfnRxg4FRpCdZFouXfMZu_Ie5_uQmQj9Bx9Ap4rpW3QyQjZ84CE2SqYdwr4fe1o8w4nbWLxEkXMh_iSMXv3dDkA2wChjfO9OrUEWyAkuY0--q4woZjREF_QyPrZI9K3dF2A9Uhy7m9X3nobY33wJ0lTR_uuwnuj0D2JVBq0ZDSLCQDrR" alt="Venue" />
                                </div>
                                <div className="flex flex-col justify-center flex-1">
                                    <div className="px-3 py-1 rounded-full bg-brand-lime/10 text-brand-lime text-[9px] font-black uppercase tracking-widest border border-brand-lime/10 w-fit mb-4 italic">Premium Selection</div>
                                    <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white mb-2">Grand Olympic Arena</h3>
                                    <div className="flex items-center gap-3 text-white/40">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        <p className="text-[11px] font-black uppercase tracking-widest leading-none">Olympic Village • Section A-42</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-white/5">
                                {[
                                    { lab: "Date", val: "Oct 24, 2026" },
                                    { lab: "Window", val: "20:00 - 22:00" },
                                    { lab: "Duration", val: "120 Minutes" },
                                    { lab: "Access", val: "22 Personnel" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em] mb-2">{item.lab}</p>
                                        <p className="text-white text-[11px] font-black uppercase tracking-widest leading-none">{item.val}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 space-y-4">
                                <div className="flex justify-between items-center px-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Standard Fee (2.0h)</span>
                                    <span className="text-[11px] font-black tracking-widest">$180.00</span>
                                </div>
                                <div className="flex justify-between items-center px-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">System Processing</span>
                                    <span className="text-[11px] font-black tracking-widest">$12.50</span>
                                </div>
                                <div className="pt-8 mt-6 border-t border-white/5 flex justify-between items-baseline px-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-lime">Grand Total</span>
                                    <div className="text-right">
                                        <span className="text-5xl font-black font-display tracking-tighter text-white leading-none">$192<span className="text-2xl font-black text-white/20">.50</span></span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Security Badges */}
                        <div className="flex flex-wrap gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 px-6">
                            {[
                                { icon: "verified_user", label: "STADIUM-PROTECT" },
                                { icon: "lock", label: "256-BIT CRYPTO" },
                                { icon: "credit_score", label: "PCI-DSS ELITE" }
                            ].map((badge, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-lg">{badge.icon}</span>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Payment */}
                    <div className="lg:col-span-5 space-y-10">
                        <section className="glass rounded-[2.5rem] p-10 relative border border-white/5">
                            <div className="flex items-center justify-between mb-12">
                                <h3 className="text-xl font-black font-display uppercase tracking-wider text-white">Payment Method</h3>
                                <button className="text-[10px] font-black uppercase tracking-widest text-brand-lime">Modify Slots</button>
                            </div>

                            <div className="space-y-4">
                                <div className="p-1 rounded-[2.2rem] bg-brand-lime">
                                    <div className="bg-brand-deep p-6 rounded-[2.1rem] flex items-center gap-6 cursor-pointer">
                                        <div className="size-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                                            <span className="material-symbols-outlined text-brand-lime">credit_card</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <p className="text-[11px] font-black uppercase tracking-widest text-white">Visa Premier Card</p>
                                                <span className="size-1.5 bg-brand-lime rounded-full animate-pulse"></span>
                                            </div>
                                            <p className="text-[9px] font-bold text-white/30 tracking-[0.2em]">**** **** 4242</p>
                                        </div>
                                        <div className="size-6 rounded-full bg-brand-lime flex items-center justify-center">
                                            <span className="material-symbols-outlined text-brand-deep text-[14px] font-black">check</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 rounded-[2.2rem] glass-morphism flex items-center gap-6 cursor-pointer hover:bg-white/5 transition-all duration-300">
                                    <div className="size-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className="text-[11px] font-black uppercase tracking-widest text-white/40">Alternative Gateway</p>
                                        <p className="text-[9px] font-bold text-white/20 tracking-[0.2em]">Digital Wallet, Crypto</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 space-y-6">
                                <button onClick={handlePayment} className="w-full btn-lime font-display py-6 text-sm">
                                    Authorize Payment
                                </button>
                                <p className="text-center text-white/20 text-[9px] font-bold uppercase tracking-widest leading-relaxed">
                                    By authorizing, you agree to the STADIUMBOOK <Link className="text-white/40 underline underline-offset-4" href="#">Elite Protocols</Link> & cancellation policies.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-white/5 text-center">
                <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">© 2026 STADIUMBOOK GLOBAL. ELITE ACCESS GUARANTEED.</p>
            </footer>
        </div>
    );
}
