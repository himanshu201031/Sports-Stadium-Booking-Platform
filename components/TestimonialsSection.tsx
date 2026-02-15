"use client";

export default function TestimonialsSection() {
    const testimonials = Array(6).fill({
        name: "Wilson Thor",
        role: "Elite Player",
        text: "The curriculum was directly branched toward applied techniques with high-profile projects. I real-elements with industry partners."
    });

    return (
        <section className="py-24 px-6 lg:px-12 bg-brand-deep text-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-30 italic">
                        Elite Feedback
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter uppercase font-display mb-8 italic">
                        Voices of the <span className="text-brand-lime">Arena</span>
                    </h2>
                    <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.2em] italic">Real metrics and validation from professional athletic practitioners.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="glass-card p-10 rounded-[2.5rem] hover:border-brand-lime/20 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <span className="material-symbols-outlined text-[60px] font-black italic">format_quote</span>
                            </div>
                            <p className="text-[14px] font-bold mb-10 leading-relaxed text-white/50 italic">" {t.text} "</p>
                            <div className="flex items-center space-x-4">
                                <div className="size-12 rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl">
                                    <img src={`https://i.pravatar.cc/100?u=${idx}`} className="grayscale group-hover:grayscale-0 transition-all duration-700" alt={t.name} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-tight font-display italic">{t.name}</h4>
                                    <p className="text-[9px] uppercase font-black tracking-[0.3em] text-brand-lime/60">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
