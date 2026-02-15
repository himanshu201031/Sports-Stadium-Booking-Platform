"use client";

export default function TestimonialsSection() {
    const testimonials = Array(6).fill({
        name: "Wilson Thor",
        role: "Elite Player",
        text: "The curriculum was directly branched toward applied techniques with high-profile projects. I real-elements with industry partners."
    });

    return (
        <section className="py-24 px-6 lg:px-12 bg-white text-brand-deep">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-brand-deep/10 text-[10px] font-bold uppercase tracking-widest mb-10 opacity-60">
                        Our Facilities
                    </div>
                    <h2 className="text-4xl font-bold leading-tight mb-4">
                        What Players Are Saying
                    </h2>
                    <p className="text-brand-deep/60 text-sm font-medium">Entrepreneur & Inventor RFOS & IoT Solutions Expert Marketing.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white/50 border border-brand-deep/5 p-8 rounded-3xl hover:border-brand-lime/20 transition-all group">
                            <svg className="w-8 h-8 text-brand-lime mb-6 opacity-40 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.89543 10.9124 7 12.017 7H15.017C16.1216 7 17.017 7.89543 17.017 9V15C17.017 16.1046 16.1216 17 15.017 17H14.017V21H14.017ZM10 11V14.5C10 15.8807 8.88071 17 7.5 17H6.5V21H4.5V17H4.01703C2.91246 17 2.01703 16.1046 2.01703 15V9C2.01703 7.89543 2.91246 7 4.01703 7H7.01703C8.1216 7 9.01703 7.89543 9.01703 9V12C9.01703 12.5523 8.56931 13 8.01703 13H5.01703C4.46474 13 4.01703 12.5523 4.01703 12V9C4.01703 8.44772 4.46474 8 5.01703 8H7.01703C7.56931 8 8.01703 8.44772 8.01703 9V11H10Z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                            <p className="text-sm font-medium mb-8 leading-relaxed text-brand-deep/80">" {t.text} "</p>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-brand-deep/10 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${idx}`} alt="" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold">{t.name}</h4>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-brand-deep/40">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
