"use client";

export default function VideoSection() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-white">
            <div className="container mx-auto">
                <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden group border border-brand-deep/5">
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Stadium Video" />
                    <div className="absolute inset-0 bg-brand-deep/30 flex flex-col items-center justify-center">
                        <div className="absolute top-12 left-12 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-brand-lime text-sm">location_on</span>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Executive District • Hub 01</p>
                            </div>
                            <h2 className="text-4xl font-black font-display uppercase tracking-tight italic">Stadium <span className="text-brand-lime">Cinema</span></h2>
                        </div>

                        <div className="size-24 rounded-full glass-morphism border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-500 shadow-2xl group/play relative">
                            <div className="absolute inset-0 bg-brand-lime/20 rounded-full blur-xl opacity-0 group-hover/play:opacity-100 transition-opacity"></div>
                            <span className="material-symbols-outlined text-white text-4xl font-black italic relative z-10 translate-x-1">play_arrow</span>
                        </div>

                        <div className="absolute bottom-12 flex flex-col items-center gap-4">
                            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40 italic">Scroll for Experience</p>
                            <div className="w-0.5 h-16 bg-gradient-to-t from-brand-lime to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
