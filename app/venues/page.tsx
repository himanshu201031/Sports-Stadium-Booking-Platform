"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Reveal from "@/components/Reveal";

export default function VenueGallery() {
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });

        tl.fromTo(headerRef.current?.children || [],
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1 }
        );

        if (gridRef.current) {
            gsap.fromTo(gridRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 90%"
                    }
                }
            );
        }
    }, []);

    const venues = [
        {
            id: 1,
            name: "Elite Performance Arena",
            location: "Downtown Sports Complex, NY",
            price: 85,
            rating: 4.9,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvPYlEhMQj2HWbShttk34BGuQ3Nn0Dt3XYTxBZlkc5vVWFh3aBfWs_9vgfhE-2w7kjE2PETIJHTWo7AqdnH39MOdW0OKtfP4_5d6_FxMeopTzCnfHdOA9mDkewjon_hoYPBUzLu6vMyZ0HEt4ewJxNsAS4CaXvwRAno30Mud0U3oJ8fbx0jT3phTMlG057qaYfGc60Zp8FbUoOLFHpr4W_D9nUm8R3kcw2m2KYvBgza5cOekBrU1Ox2vIycIpSHgQ_qB33DnWUaYTy",
            status: "Available Now"
        },
        {
            id: 2,
            name: "Grand Slam Tennis Club",
            location: "West End Hub, NY",
            price: 45,
            rating: 4.7,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3eXBba6hhuwVuPmeyR650r5Ah2wtkpvhsnKV27omS9cJTCPVKTBV5yBpd6XqseKsQ4GojlJGiAGYNFh5pra98PHLDekuFHrHegd_t1Sp2vdnLn-sdz-jPqP22SU6W_zzF7bpeRqmxqxS1W9qUwcfqF1bY8g5YQGJp0ulnt2yI13xJJ-3g-lCrM1xdsxAYwFyoBifLwZ-vFvYRtsJV0_FB1PgYJnBbRc-epJLckwGTFXsNwVET4jj1jPjIGHO0_mp57iO_uylA7abR",
            status: "Next: 4:00 PM"
        },
        {
            id: 3,
            name: "The Padel Society",
            location: "Riverside District, NY",
            price: 60,
            rating: 4.8,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAnr95p_5vqOcNiS_efg5SrfXGvT7rDh0JnCzhZ7J1-GbIY7Q4Lm8oFWA9cpaXXtFsnKFYf_vBehrcQBj6RofTth7V-Re1BZpRdbglBULRmUCS5bjIXMxOeHPm69N_8D70W5Iesu9BotCvVzzjInVeCUGey9ywBIgFyaRFi1fsPgd46H6yTUF2rcGZ86aruSTHoo7BRJup_34OboojzDVFUa-E2UVvn4YcJ56vTMT4-W52W1WJx25RrZYMfKvSN9jLwbBQhUiyzdkO",
            status: "Available Now"
        },
        {
            id: 4,
            name: "Skyline Hoops",
            location: "Upper East Side, NY",
            price: 110,
            rating: 5.0,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdHz1dKObPwfBTKcevxRg7FtOvbBq1T2OMY-848UtEvOFL3uVV4AoMsRgDtl-Umvw7JKLc38w62qNzjf6Q2ysqIn4DiJQ4DSicqOa2N9KkoLHbO71K5UWlD6cZlIKZXKnu6OqpaJui0uLtch-pc_W41oc0k5bt9PnZz-GwIr0VwCEgxeO2hEMGPCd2osQjgzp4mjx9vKwW_L88yDV7jzG8QUo1DBA9QkAvJ0O7mF1GE9UgYt03EVfvMr8wev7FndLzz_Nm3xqUQZGr",
            status: "3 slots left"
        },
        {
            id: 5,
            name: "Stumps & Spin Arena",
            location: "South Ferry, NY",
            price: 70,
            rating: 4.6,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcEscS35oIa987XC0x1RPQ0NeJMdhETsG_6g6hlrgCcloBUNuy_RZu3glV14j7nwhH-iRIHid0aPVW-Q2-BCCUE9DbTyGgClKH_LOUZrMD5qhEalU_EAwRyxeY3stTwjwoV_Fa7ADucJnNBe1j8boOeE4FDL0laW8OU655XG2ljuJ_nUrgO8jB6iV8l10wfEFQMC8IkyV2zy5LA8Jok9BiHetnj4Ru2SqmAB0beWxgN5n3PMe478WGK4VIzlydL4EeR1tAJgEaL4HX",
            status: "Available Now"
        },
        {
            id: 6,
            name: "Urban Turf Stadium",
            location: "Chelsea Parks, NY",
            price: 95,
            rating: 4.9,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZnpblmXmd1MKU7Z7eoKPeYF4rBjd85qCDFFdY-GlH1c9VPiN-o9PETP0Hzg7KM6_8oTGJ2Ssgbxqe5wZIiXHaL6eYMNst62hmreYyj323B9yrxXq2ws6PHOfSoF4cwldMP0_Yi0dTIcYqZKn1cRL3zeggw4JWZQ26aSWbIZgdx9r1etypcfimfxACiGli99C6CfzH_RIXAvwxXmsXC6_T3QiE2Ia8RRoyPOYz3ppdMUczZTurofTYCo5_GVJpTl6AKUrTdApJLclp",
            status: "Booked Until 9PM"
        }
    ];

    return (
        <div className="bg-brand-deep text-white min-h-screen">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                {/* Hero Search & Filter Section */}
                <section ref={headerRef} className="mb-20">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <Reveal textReveal direction="down">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6 font-display tracking-tight uppercase italic">Discover <span className="text-brand-lime">Elite</span> Arenas</h2>
                        </Reveal>
                        <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed italic">STADIUMBOOK connects you with the highest-rated sports facilities globally. Search, Compare, and Book in seconds.</p>
                    </div>

                    <div className="glass-morphism p-3 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-3 max-w-5xl mx-auto border border-white/5">
                        <div className="flex-1 w-full flex items-center px-6 gap-4 border-b md:border-b-0 md:border-r border-white/5 py-3">
                            <span className="material-symbols-outlined text-brand-lime">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-white placeholder-white/20 w-full text-sm font-medium" placeholder="Search venues..." type="text" />
                        </div>
                        <div className="flex-1 w-full flex items-center px-6 gap-4 border-b md:border-b-0 md:border-r border-white/5 py-3">
                            <span className="material-symbols-outlined text-brand-lime">sports_soccer</span>
                            <select className="bg-transparent border-none focus:ring-0 text-white/60 text-sm w-full cursor-pointer font-medium">
                                <option className="bg-brand-deep">All Sports</option>
                                <option className="bg-brand-deep">Football</option>
                                <option className="bg-brand-deep">Tennis</option>
                                <option className="bg-brand-deep">Padel</option>
                                <option className="bg-brand-deep">Basketball</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full flex items-center px-6 gap-4 py-3">
                            <span className="material-symbols-outlined text-brand-lime">event</span>
                            <input className="bg-transparent border-none focus:ring-0 text-white/40 text-sm w-full [color-scheme:dark] font-medium" type="date" />
                        </div>
                        <button className="w-full md:w-auto btn-lime font-display">
                            Find Slots
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {["Football", "Tennis", "Padel", "Basketball", "Cricket"].map((sport) => (
                            <button key={sport} className="px-6 py-2.5 rounded-full glass border border-white/5 text-[9px] font-black uppercase tracking-[0.2em] hover:border-brand-lime/40 hover:text-brand-lime hover:bg-brand-lime/5 transition-all italic">
                                {sport}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Venue Grid Section */}
                <section>
                    <div className="flex items-center justify-between mb-12 px-2">
                        <h3 className="text-xl font-black font-display uppercase tracking-wider italic">Premium Selection <span className="text-white/20 font-medium ml-3 normal-case tracking-normal not-italic text-sm">24 results</span></h3>
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/40 italic">
                            <span>Sort By</span>
                            <select className="bg-transparent border-none focus:ring-0 text-brand-lime p-0 cursor-pointer">
                                <option className="bg-brand-deep">Recommended</option>
                                <option className="bg-brand-deep">Price: Low to High</option>
                                <option className="bg-brand-deep">Top Rated</option>
                            </select>
                        </div>
                    </div>

                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {venues.map((venue) => (
                            <Link href={`/venues/${venue.id}`} key={venue.id} className="glass-card rounded-[2rem] overflow-hidden group border border-white/5">
                                <div className="relative h-64 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent z-10"></div>
                                    <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={venue.name} src={venue.image} />
                                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                                        <div className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider ${venue.status.includes('Available') ? 'bg-brand-lime text-brand-deep shadow-lg shadow-brand-lime/20' : 'bg-white/10 text-white backdrop-blur-md border border-white/10'}`}>
                                            {venue.status}
                                        </div>
                                    </div>
                                    <button className="absolute top-4 right-4 z-20 size-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-brand-lime/20 hover:text-brand-lime transition-all duration-300 group/fav">
                                        <span className="material-symbols-outlined text-lg group-hover/fav:fill-current">favorite</span>
                                    </button>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-xl font-black mb-1 font-display uppercase tracking-tight group-hover:text-brand-lime transition-colors italic">{venue.name}</h4>
                                            <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                                                <span className="material-symbols-outlined text-sm">location_on</span>
                                                {venue.location}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 glass px-2 py-1 rounded-lg border border-white/5 shadow-inner">
                                            <span className="material-symbols-outlined text-[14px] text-brand-lime fill-current">star</span>
                                            <span className="text-xs font-bold">{venue.rating}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-0.5 italic">Starting At</span>
                                            <span className="text-2xl font-black font-display tracking-tight text-white italic">${venue.price}<span className="text-sm font-medium text-white/20 not-italic">/hr</span></span>
                                        </div>
                                        <div className="btn-lime py-3 px-8 font-display text-[11px] shadow-lg shadow-brand-lime/10">
                                            Book Arena
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-20 flex justify-center items-center gap-3">
                        <button className="size-12 flex items-center justify-center rounded-2xl glass border-white/5 text-white/20 hover:text-white transition-all">
                            <span className="material-symbols-outlined">west</span>
                        </button>
                        <div className="flex gap-2">
                            <button className="size-12 rounded-2xl bg-brand-lime text-brand-deep font-black shadow-lg shadow-brand-lime/20">1</button>
                            <button className="size-12 rounded-2xl glass border-white/5 text-white/40 font-black hover:border-brand-lime/20 hover:text-brand-lime transition-all">2</button>
                            <button className="size-12 rounded-2xl glass border-white/5 text-white/40 font-black hover:border-brand-lime/20 hover:text-brand-lime transition-all">3</button>
                        </div>
                        <button className="size-12 flex items-center justify-center rounded-2xl glass border-white/5 text-white/40 hover:text-white transition-all">
                            <span className="material-symbols-outlined">east</span>
                        </button>
                    </div>
                </section>
            </main>

            <footer className="bg-brand-deep border-t border-white/5 pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-1 md:col-span-1">
                            <Link href="/" className="flex items-center gap-2 mb-8">
                                <div className="size-8 bg-brand-lime rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-brand-deep text-lg font-black italic">bolt</span>
                                </div>
                                <span className="text-xl font-display font-black uppercase tracking-[0.1em]">STADIUM<span className="text-brand-lime">BOOK</span></span>
                            </Link>
                            <p className="text-white/30 text-xs leading-relaxed font-medium mb-8 max-w-xs">
                                Redefining sports facility reservation through speed, technology, and elite access.
                            </p>
                            <div className="flex gap-3">
                                {["facebook", "twitter", "instagram"].map(social => (
                                    <button key={social} className="size-10 rounded-xl glass border-white/5 flex items-center justify-center hover:bg-brand-lime hover:text-brand-deep transition-all duration-500">
                                        <span className="material-symbols-outlined text-sm">share</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        {["Discovery", "Company", "Opportunities", "Support"].map((title) => (
                            <div key={title}>
                                <h5 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-white/60">{title}</h5>
                                <ul className="space-y-4 text-[11px] font-black uppercase tracking-widest text-white/30">
                                    <li><a className="hover:text-brand-lime transition-colors" href="#">Quick Link 1</a></li>
                                    <li><a className="hover:text-brand-lime transition-colors" href="#">Quick Link 2</a></li>
                                    <li><a className="hover:text-brand-lime transition-colors" href="#">Quick Link 3</a></li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                        <p>© 2026 STADIUMBOOK GLOBAL. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
