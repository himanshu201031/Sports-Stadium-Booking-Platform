"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Checkout() {
    const router = useRouter();

    const handlePayment = () => {
        router.push("/checkout/success");
    };

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 py-4 md:px-20 lg:px-40 glass sticky top-0 z-50">
                    <Link href="/" className="flex items-center gap-4 text-neon-green">
                        <div className="size-8">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-xl font-bold leading-tight tracking-tight">StadiumBook</h2>
                    </Link>
                    <div className="flex flex-1 justify-end gap-8 items-center">
                        <nav className="hidden md:flex items-center gap-9">
                            <Link className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="/venues">Venues</Link>
                            <Link className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="/dashboard">My Bookings</Link>
                            <Link className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="/settings">Support</Link>
                        </nav>
                        <div className="bg-neon-green/20 p-0.5 rounded-full ring-2 ring-neon-green/30">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-bZiXoDm45t-scGusJMI_yOLXXaHnxzD1VjzEL9qQz-PxFm2zyeZkd5Y5parBr4ph2xkA8-EYO1OJaIAwE5IKWJptrfCGc3qj_aBmPTZq5SiCPGu1YzSppQ9LKgCLZ_3MHUoMnW6cMFHQ3-MxvRfIzwptyXXoFIDyYYU4b_etdcYFQv8W4NPgDFpLU33QUWDKxE19s3t9izIUEFwc_ivm1eRJjHxL-7eGazRitbiWU_-GF0Xi3gIhucywJX-H0qs_1RdCiD4KrahY")' }}></div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 px-4 py-8 md:px-20 lg:px-40 max-w-[1440px] mx-auto w-full">
                    {/* Page Title */}
                    <div className="mb-10">
                        <h1 className="text-slate-100 text-4xl font-black leading-tight tracking-tight">Secure Checkout</h1>
                        <p className="text-slate-400 text-lg mt-2 font-normal">Finalize your premium booking for Grand Olympic Arena</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column: Booking Summary */}
                        <div className="lg:col-span-7 space-y-6">
                            <section className="glass rounded-xl p-6 overflow-hidden">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-full md:w-48 h-32 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqlyobLVo2lq4qp9C-cXwfSlvq_ngxKxv46VFn3cVHKYaQ-7PT8QyGewlVu8GjB8KKJ9J0BNIKeXEbV6qtvIWNRLaLudACPfnRxg4FRpCdZFouXfMZu_Ie5_uQmQj9Bx9Ap4rpW3QyQjZ84CE2SqYdwr4fe1o8w4nbWLxEkXMh_iSMXv3dDkA2wChjfO9OrUEWyAkuY0--q4woZjREF_QyPrZI9K3dF2A9Uhy7m9X3nobY33wJ0lTR_uuwnuj0D2JVBq0ZDSLCQDrR")' }}></div>
                                    <div className="flex flex-col justify-center flex-1">
                                        <span className="text-neon-green text-xs font-bold uppercase tracking-widest mb-1">Selected Venue</span>
                                        <h3 className="text-white text-2xl font-bold">Grand Olympic Arena</h3>
                                        <div className="flex items-center gap-2 text-slate-400 mt-1">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                            <p className="text-sm">Premium Football Turf • Section A-42</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/5">
                                    <div>
                                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Date</p>
                                        <p className="text-slate-200 font-medium">Oct 24, 2023</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Time</p>
                                        <p className="text-slate-200 font-medium">08:00 PM - 10:00 PM</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Duration</p>
                                        <p className="text-slate-200 font-medium">2 Hours</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Guests</p>
                                        <p className="text-slate-200 font-medium">Up to 22 Players</p>
                                    </div>
                                </div>
                                <div className="mt-6 space-y-3">
                                    <div className="flex justify-between items-center text-slate-300">
                                        <span>Booking Fee (2 Hours)</span>
                                        <span>$180.00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-300">
                                        <div className="flex items-center gap-1">
                                            <span>Service Fee</span>
                                            <span className="material-symbols-outlined text-[14px] text-slate-500">info</span>
                                        </div>
                                        <span>$12.50</span>
                                    </div>
                                    <div className="pt-4 mt-2 border-t border-white/10 flex justify-between items-center">
                                        <span className="text-xl font-bold text-white">Total Amount</span>
                                        <div className="text-right">
                                            <span className="text-3xl font-black text-neon-green">$192.50</span>
                                            <p className="text-[10px] text-slate-500 mt-1">Inclusive of all local taxes</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Trust Section */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 px-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-neon-green text-xl">verified_user</span>
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-tighter">SSL Secure Payment</span>
                                </div>
                                <div className="flex items-center gap-2 border-l border-white/10 pl-8">
                                    <span className="material-symbols-outlined text-neon-green text-xl">lock</span>
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-tighter">Encrypted Transaction</span>
                                </div>
                                <div className="flex items-center gap-2 border-l border-white/10 pl-8">
                                    <span className="material-symbols-outlined text-neon-green text-xl">credit_score</span>
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-tighter">PCI-DSS Compliant</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Payment Selection */}
                        <div className="lg:col-span-5 space-y-6">
                            <section className="glass rounded-xl p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-white text-xl font-bold">Payment Method</h3>
                                    <button className="text-neon-green text-sm font-semibold hover:underline">Add New</button>
                                </div>
                                {/* Saved Cards Section */}
                                <div className="space-y-4">
                                    <div className="relative glass-card-active p-5 rounded-lg border-2 border-neon-green flex items-center gap-4 group cursor-pointer">
                                        <div className="bg-white/10 p-2 rounded-md">
                                            <svg className="h-8 w-12" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M45 35c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V13c0-2.209 1.791-4 4-4h34c2.209 0 4 1.791 4 4v22z" fill="#1a1a1a"></path>
                                                <path d="M3 13v6h42v-6c0-2.209-1.791-4-4-4H7c-2.209 0-4 1.791-4 4z" fill="#0E4595"></path>
                                                <path d="M16.48 32l1.92-5.44h4.48L24.8 32h2.24L21.6 20h-2.24L14.24 32h2.24zm3.84-7.68h2.24l-1.12 3.2-1.12-3.2z" fill="#fff"></path>
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <p className="text-white font-bold">Visa Classic</p>
                                                <span className="bg-neon-green/20 text-neon-green text-[10px] font-bold px-2 py-0.5 rounded uppercase">Primary</span>
                                            </div>
                                            <p className="text-slate-400 text-sm">Ending in 4242 • Exp 12/26</p>
                                        </div>
                                        <div className="size-6 rounded-full bg-neon-green flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-sm font-bold">check</span>
                                        </div>
                                    </div>
                                    <div className="relative glass p-5 rounded-lg border border-white/5 flex items-center gap-4 group cursor-pointer hover:bg-white/5 transition-colors">
                                        <div className="bg-white/10 p-2 rounded-md">
                                            <svg className="h-8 w-12" fill="none" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                                                <rect fill="#222" height="24" rx="4" width="38"></rect>
                                                <circle cx="15" cy="12" fill="#EB001B" r="7"></circle>
                                                <circle cx="23" cy="12" fill="#F79E1B" fillOpacity="0.8" r="7"></circle>
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white font-bold">Mastercard</p>
                                            <p className="text-slate-400 text-sm">Ending in 8891 • Exp 05/25</p>
                                        </div>
                                        <div className="size-6 rounded-full border border-white/20"></div>
                                    </div>
                                </div>
                                {/* Pay Button */}
                                <div className="mt-10 space-y-4">
                                    <button onClick={handlePayment} className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-[#052e16] font-black text-lg py-5 rounded-xl transition-all active:scale-95 shadow-[0_0_25px_rgba(34,197,94,0.3)] flex items-center justify-center gap-3">
                                        <span className="material-symbols-outlined">payments</span>
                                        Pay with Saved Card
                                    </button>
                                    <p className="text-center text-slate-500 text-xs">By clicking pay, you agree to our <Link className="underline text-slate-400" href="#">Terms of Service</Link></p>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>

                <footer className="mt-12 py-8 border-t border-white/5 text-center px-4">
                    <p className="text-slate-600 text-xs">© 2023 StadiumBook Premium Venues Ltd. All rights reserved.</p>
                </footer>
            </div>

            <style jsx global>{`
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-card-active {
          background: rgba(22, 197, 94, 0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(22, 197, 94, 0.2);
        }
      `}</style>
        </div>
    );
}
