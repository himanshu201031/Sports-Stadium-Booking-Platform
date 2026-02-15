"use client";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 lg:px-12 bg-white text-brand-deep">
            <div className="container mx-auto max-w-5xl text-center">
                <div className="inline-block px-4 py-1.5 rounded-full border border-brand-deep/10 text-[10px] font-bold uppercase tracking-widest mb-10 opacity-60">
                    About Us
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter uppercase font-display">
                    Welcome to <span className="text-brand-lime italic">STADIUMBOOK</span>, the
                    <span className="inline-flex items-center mx-3 transform translate-y-3">
                        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=120&auto=format&fit=crop" className="w-20 h-10 rounded-full object-cover border-2 border-brand-lime/20 shadow-2xl" alt="Stadium" />
                    </span>
                    Premier Epicenter of Entertainment, Sports, and
                    <span className="inline-flex items-center mx-3 transform translate-y-3">
                        <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=120&auto=format&fit=crop" className="w-20 h-10 rounded-full object-cover border-2 border-brand-lime/20 shadow-2xl" alt="Court" />
                    </span>
                    Community in <span className="underline decoration-brand-lime underline-offset-8">DHAKA</span>. Engineered to Inspire and Designed for the Future, STADIUMBOOK is a World-Class Venue
                    <span className="inline-flex items-center mx-3 transform translate-y-3">
                        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=120&auto=format&fit=crop" className="w-20 h-10 rounded-full object-cover border-2 border-brand-lime/20 shadow-2xl" alt="Events" />
                    </span>
                    that delivers absolute <span className="gradient-text italic">Performance</span>.
                </h2>
            </div>
        </section>
    );
}
