"use client";

import Link from "next/link";

export default function AmenitiesSection() {
    const cards = [
        { title: "Amazing Discounts Available This Week !", img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=400&auto=format&fit=crop" },
        { title: "Amazing Discounts Available This Week !", img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=400&auto=format&fit=crop" },
        { title: "Amazing Discounts Available This Week !", img: "https://images.unsplash.com/photo-1540747735391-4fec05404983?q=80&w=400&auto=format&fit=crop" }
    ];

    return (
        <section id="court" className="py-24 px-6 lg:px-12 bg-white text-brand-deep overflow-hidden relative z-10">
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
                    <div className="max-w-xl">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-brand-deep/10 text-[10px] font-bold uppercase tracking-widest mb-10 opacity-60">
                            Our Facilities
                        </div>
                        <h2 className="text-4xl font-bold leading-tight">
                            Explore Our Incredible <br />
                            Amenities And Services
                        </h2>
                    </div>
                    <p className="text-brand-deep/60 text-sm max-w-sm lg:text-right mt-6 lg:mt-0 leading-relaxed font-medium">
                        Entrepreneur & Inventor RFOS & IoT Solutions Expert Marketing & Branding Specialist Innovation Management Pre-professional Musical Instrument.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-4xl">
                        <img src={cards[0].img} className="w-full h-[350px] object-cover rounded-4xl transition-transform duration-700 group-hover:scale-105" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 to-transparent p-10 flex flex-col justify-end">
                            <h3 className="text-white text-xl font-bold mb-4">{cards[0].title}</h3>
                            <Link href="/venues" className="btn-lime w-fit text-xs inline-flex items-center justify-center">
                                View All Details
                            </Link>
                        </div>
                    </div>

                    <div className="relative group overflow-hidden rounded-4xl">
                        <img src={cards[1].img} className="w-full h-[350px] object-cover rounded-4xl transition-transform duration-700 group-hover:scale-105" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-white text-lg font-bold mb-4">Amazing Discounts Available This Week !</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
