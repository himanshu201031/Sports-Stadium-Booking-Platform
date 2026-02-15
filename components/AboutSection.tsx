"use client";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 lg:px-12 bg-white text-brand-deep">
            <div className="container mx-auto max-w-5xl text-center">
                <div className="inline-block px-4 py-1.5 rounded-full border border-brand-deep/10 text-[10px] font-bold uppercase tracking-widest mb-10 opacity-60">
                    About Us
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight">
                    Welcome To PTR Stadium, The
                    <span className="inline-flex items-center mx-2 transform translate-y-2">
                        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=100&auto=format&fit=crop" className="w-16 h-8 rounded-full object-cover border border-white/20" alt="" />
                    </span>
                    Beating Heart Of Entertainment, Sports, And
                    <span className="inline-flex items-center mx-2 transform translate-y-2">
                        <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=100&auto=format&fit=crop" className="w-16 h-8 rounded-full object-cover border border-white/20" alt="" />
                    </span>
                    Community In Housebuilding, Uttara, Dhaka Built To Inspire And Designed For The Future, PTR Stadium Is A World-Class Venue
                    <span className="inline-flex items-center mx-2 transform translate-y-2">
                        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=100&auto=format&fit=crop" className="w-16 h-8 rounded-full object-cover border border-white/20" alt="" />
                    </span>
                    That Brings Together Unforgettable Moments - From Thrilling.
                </h2>
            </div>
        </section>
    );
}
