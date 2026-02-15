"use client";

export default function VideoSection() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-white">
            <div className="container mx-auto">
                <div className="relative h-[500px] w-full rounded-4xl overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt="Stadium Video" />
                    <div className="absolute inset-0 bg-brand-deep/20 flex flex-col items-center justify-center">
                        <div className="absolute top-10 left-10 text-white">
                            <h2 className="text-3xl font-bold mb-2">Our Stadium</h2>
                            <p className="text-white/60 text-xs uppercase tracking-widest font-black">Housebuilding , Uttara, Dhaka</p>
                        </div>

                        <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-2xl">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent translate-x-1"></div>
                        </div>

                        <div className="absolute bottom-10 animate-bounce">
                            <div className="w-0.5 h-16 bg-gradient-to-t from-brand-lime to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
