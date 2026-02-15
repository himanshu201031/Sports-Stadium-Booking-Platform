"use client";

export default function Features() {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Easy Booking",
            description: "Book stadium slots quickly with our intuitive interface. Just a few clicks and you're done!",
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Multiple Sports",
            description: "Football, Cricket, Badminton, Basketball and more. Find the perfect venue for your sport.",
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Secure & Reliable",
            description: "Safe and instant booking confirmation. Your data is protected with industry-standard security.",
        },
    ];

    return (
        <section id="features" className="py-20 sm:py-32 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white/40">
                        Operational Excellence
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase font-display italic">
                        Why Choose <span className="text-brand-lime">STADIUMBOOK</span>
                    </h2>
                    <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-bold italic">
                        The ultimate synthesis of athletic passion and technological precision.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { icon: "speed", title: "Instant Access", desc: "Proprietary low-latency reservation engine for millisecond confirmation." },
                        { icon: "stadia_controller", title: "Elite Arenas", desc: "Curated selection of professional-grade courts and high-performance complexes." },
                        { icon: "security", title: "Vault Security", desc: "Military-grade encryption for all financial transactions and personal data." }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="glass-morphism rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-700 border border-white/5 group hover:border-brand-lime/20"
                        >
                            <div className="size-16 bg-brand-lime rounded-2xl flex items-center justify-center mb-10 text-brand-deep shadow-lg shadow-brand-lime/20 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-3xl font-black italic">{feature.icon}</span>
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 font-display uppercase tracking-tight italic">
                                {feature.title}
                            </h3>

                            <p className="text-[11px] text-white/30 font-bold uppercase tracking-widest leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-24 text-center">
                    <div className="glass-morphism rounded-[3rem] p-12 max-w-4xl mx-auto border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <span className="material-symbols-outlined text-[120px] font-black italic">verified</span>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 font-display uppercase tracking-tight italic">
                            Operational Status: <span className="text-brand-lime">Elite</span>
                        </h3>
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em] mb-10">
                            Join the ranks of professional athletes who optimize their training on our infrastructure.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            {[
                                { label: "Performance", val: "Instant" },
                                { label: "Availability", val: "24/7" },
                                { label: "Security", val: "Elite" }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="size-2 bg-brand-lime rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{stat.label}:</span>
                                    <span className="text-[10px] font-black text-brand-lime uppercase tracking-widest">{stat.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
