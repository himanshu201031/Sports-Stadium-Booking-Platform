"use client";

import Link from "next/link";

export default function BookingSuccess() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
            {/* Navigation Header */}
            <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary-blue p-1.5 rounded-lg">
                                <span className="material-symbols-outlined text-white">sports_score</span>
                            </div>
                            <span className="text-xl font-extrabold tracking-tight underline decoration-neon-green decoration-4">STADIAPRO</span>
                        </Link>
                        <div className="hidden md:flex items-center gap-8">
                            <Link className="text-sm font-medium hover:text-primary-blue transition-colors" href="/venues">Explore</Link>
                            <Link className="text-sm font-medium hover:text-primary-blue transition-colors" href="/dashboard">Bookings</Link>
                            <Link className="text-sm font-medium hover:text-primary-blue transition-colors" href="/settings">Support</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="w-full max-w-2xl mx-auto text-center z-10">
                    <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-neon-green/20 text-neon-green success-glow">
                        <span className="material-symbols-outlined text-6xl">check_circle</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">Booking Confirmed!</h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">Your slot at <span className="text-slate-900 dark:text-white font-semibold">Grand Olympic Arena</span> is secured.</p>

                    <div className="glass-card rounded-xl p-6 sm:p-8 mb-10 text-left shadow-2xl">
                        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 pb-6 border-b border-white/10">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">Booking ID</p>
                                <p className="text-lg font-mono font-bold text-neon-green">#BK-88293</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">Total Paid</p>
                                <p className="text-2xl font-extrabold">$192.50</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                                    <span className="material-symbols-outlined text-primary-blue">location_on</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Venue</p>
                                    <p className="font-semibold">Grand Olympic Arena</p>
                                    <p className="text-sm text-slate-400">Section B, Court 4</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                                    <span className="material-symbols-outlined text-primary-blue">calendar_today</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Date & Time</p>
                                    <p className="font-semibold">Saturday, Oct 24</p>
                                    <p className="text-sm text-slate-400">06:00 PM - 08:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center gap-6">
                            <div className="bg-white p-2 rounded-lg shrink-0">
                                <img alt="QR Code" className="w-32 h-32 object-contain filter contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZIm38I0my58sgAqGQ5fc48EcR_xiUgeem8fjYnPRAVjB0KzTAdBusjA62bB-CZTKhfTPWJ6kh-Cxu2oE_MYBk2YmdYxxEKS6qNjfF2W96kRlFditB3T4WIoF1Yp0ig9zUzS8U3HNKyB9P7ZdUvKv1ROdh5JKgck4gNxLaI6vT9FT3J6FD89pSuuNko4onvlc_sOtLg5wKtFSpO9fOhFptyFzFV6oh1aHbllGgbwD8HOKy1q0CKR0v_dfj5hEz5AX1HuSQoEUjhZq" />
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed text-center md:text-left">Present this QR code at the entrance gate for quick check-in. A copy has also been sent to your registered email.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link href="/dashboard" className="bg-neon-green hover:bg-neon-green/90 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-neon-green/20 transform hover:-translate-y-0.5">
                            <span className="material-symbols-outlined">dashboard</span>
                            View in Dashboard
                        </Link>
                        <button className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5">
                            <span className="material-symbols-outlined">download</span>
                            Download Receipt
                        </button>
                    </div>
                </div>
            </main>

            <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .success-glow {
          box-shadow: 0 0 40px rgba(22, 163, 74, 0.2);
        }
      `}</style>
        </div>
    );
}
