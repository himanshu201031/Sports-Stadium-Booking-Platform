"use client";

import Link from "next/link";

export default function VenueGallery() {
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
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3eXBba6hhuwVuPmeyR650r5Ah2wtkpvhsnKV27omS9cJTCPVKTBV5yBpd6XqseKsQ4GojlJGiAGYNFg5pra98PHLDekuFHrHegd_t1Sp2vdnLn-sdz-jPqP22SU6W_zzF7bpeRqmxqxS1W9qUwcfqF1bY8g5YQGJp0ulnt2yI13xJJ-3g-lCrM1xdsxAYwFyoBifLwZ-vFvYRtsJV0_FB1PgYJnBbRc-epJLckwGTFXsNwVET4jj1jPjIGHO0_mp57iO_uylA7abR",
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
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcEscS35oIa987XC0x1RPQ0NeJMdhETsG_6g6hlrgYcloBUNuy_RZu3glV14j7nwhH-iRIHid0aPVW-Q2-BCCUE9DbTyGgClKH_LOUZrMD5qhEalU_EAwRyxeY3stTwjwoV_Fa7ADucJnNBe1j8boOeE4FDL0laW8OU655XG2ljuJ_nUrgO8jB6iV8l10wfEFQMC8IkyV2zy5LA8Jok9BiHetnj4Ru2SqmAB0beWxgN5n3PMe478WGK4VIzlydL4EeR1tAJgEaL4HX",
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
        <div className="bg-background-dark text-white min-h-screen">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-neon-green text-3xl">stadium</span>
                            <h1 className="text-xl font-bold tracking-tight">STADIUM<span className="text-neon-green">BOOK</span></h1>
                        </Link>
                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                            <Link className="text-white hover:text-neon-green transition-colors" href="/venues">Venues</Link>
                            <Link className="hover:text-neon-green transition-colors" href="/dashboard">My Bookings</Link>
                            <Link className="hover:text-neon-green transition-colors" href="#">Tournaments</Link>
                            <Link className="hover:text-neon-green transition-colors" href="/settings">Support</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-white/80">notifications</span>
                        </button>
                        <Link href="/settings" className="h-10 w-10 rounded-full border-2 border-neon-green overflow-hidden">
                            <img className="w-full h-full object-cover" alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1XA0VIJR55SXrWxcAiFOnbF8m4-JT0HiBU3Owt2hA80IWYfpW3sWmXGHjisRAJeXGEguv_QtQlE14ZCrWcbcUPJ5h16z4ygo8FMDghPNjizsAvHTQnPCdR4kKsbirdMqdGnSG6t2_4RFT1kwfXp0fe3_Eo8ch3f0IBpbXlIWPF2QdgI1nu9-InJTt5jqhEcx_9WiUTsZect57Stbm9uMUPR0efgrAt_UPBeB5ydkQSV_v9ugubhOdOrweohDhcoLzw4fXTIbd96yw" />
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero Search & Filter Section */}
                <section className="mb-12">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Arena</h2>
                        <p className="text-white/60 text-lg">Book premium sports facilities in your city with instant confirmation.</p>
                    </div>
                    <div className="glass p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 max-w-5xl mx-auto">
                        <div className="flex-1 w-full flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-white/10 py-2">
                            <span className="material-symbols-outlined text-white/40">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-white placeholder-white/40 w-full text-sm" placeholder="Search by venue name or location..." type="text" />
                        </div>
                        <div className="flex-1 w-full flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-white/10 py-2">
                            <span className="material-symbols-outlined text-white/40">sports_soccer</span>
                            <select className="bg-transparent border-none focus:ring-0 text-white/80 text-sm w-full cursor-pointer">
                                <option className="bg-background-dark">All Sports</option>
                                <option className="bg-background-dark">Football</option>
                                <option className="bg-background-dark">Tennis</option>
                                <option className="bg-background-dark">Padel</option>
                                <option className="bg-background-dark">Basketball</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full flex items-center px-4 gap-3 py-2">
                            <span className="material-symbols-outlined text-white/40">calendar_today</span>
                            <input className="bg-transparent border-none focus:ring-0 text-white/80 text-sm w-full [color-scheme:dark]" type="date" />
                        </div>
                        <button className="w-full md:w-auto bg-neon-green hover:bg-neon-green/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-neon-green/20">
                            Search
                        </button>
                    </div>
                    {/* Quick Sport Chips */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <button className="flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium border-neon-green/50 text-neon-green">
                            <span className="material-symbols-outlined text-[18px]">sports_soccer</span> Football
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium hover:border-white/20 transition-all">
                            <span className="material-symbols-outlined text-[18px]">sports_tennis</span> Tennis
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium hover:border-white/20 transition-all">
                            <span className="material-symbols-outlined text-[18px]">sports_kabaddi</span> Padel
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium hover:border-white/20 transition-all">
                            <span className="material-symbols-outlined text-[18px]">sports_basketball</span> Basketball
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium hover:border-white/20 transition-all">
                            <span className="material-symbols-outlined text-[18px]">sports_cricket</span> Cricket
                        </button>
                    </div>
                </section>

                {/* Venue Grid Section */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-semibold">Popular Venues <span className="text-white/40 font-normal ml-2">24 venues found</span></h3>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                            <span>Sort by:</span>
                            <select className="bg-transparent border-none focus:ring-0 text-white font-medium p-0">
                                <option className="bg-background-dark">Top Rated</option>
                                <option className="bg-background-dark">Price: Low to High</option>
                                <option className="bg-background-dark">Distance</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {venues.map((venue) => (
                            <div key={venue.id} className="glass rounded-xl overflow-hidden venue-card-hover transition-all duration-300 group">
                                <div className="relative h-64 w-full">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10"></div>
                                    <img className="w-full h-full object-cover" alt={venue.name} src={venue.image} />
                                    <div className={`absolute top-4 left-4 z-20 ${venue.status.includes('Available') ? 'bg-neon-green' : 'bg-white/20 backdrop-blur-md'} text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase`}>
                                        {venue.status}
                                    </div>
                                    <button className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                                    </button>
                                </div>
                                <div className="p-6 relative">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold">{venue.name}</h4>
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                            <span className="text-sm font-bold text-white">{venue.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        <span>{venue.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <div>
                                            <span className="text-neon-green text-xl font-bold">${venue.price}</span>
                                            <span className="text-white/40 text-sm">/ hour</span>
                                        </div>
                                        <Link href={`/venues/${venue.id}`}>
                                            <button className="bg-neon-green hover:bg-neon-green/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all">
                                                Book Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center items-center gap-4">
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg glass text-white/40 cursor-not-allowed">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-neon-green text-white font-bold">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg glass text-white/60 hover:border-white/20">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg glass text-white/60 hover:border-white/20">3</button>
                            <span className="text-white/40 px-2">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg glass text-white/60 hover:border-white/20">8</button>
                        </div>
                        <button className="w-10 h-10 flex items-center justify-center rounded-lg glass text-white/60 hover:border-white/20">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </section>
            </main>

            {/* Map View Toggle Floating Button */}
            <button className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white text-background-dark font-bold px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform z-40">
                <span className="material-symbols-outlined">map</span>
                Show Map View
            </button>

            {/* Footer */}
            <footer className="bg-black/40 border-t border-white/10 mt-20 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-neon-green text-2xl">stadium</span>
                                <h1 className="text-lg font-bold tracking-tight">STADIUM<span className="text-neon-green">BOOK</span></h1>
                            </div>
                            <p className="text-white/40 text-sm leading-relaxed mb-6">
                                Connecting athletes with premium venues. The world's leading sports facility booking platform.
                            </p>
                            <div className="flex gap-4">
                                <a className="w-10 h-10 flex items-center justify-center rounded-lg glass text-white/60 hover:text-neon-green transition-colors" href="#">
                                    <span className="material-symbols-outlined text-lg">share</span>
                                </a>
                                <a className="w-10 h-10 flex items-center justify-center rounded-lg glass text-white/60 hover:text-neon-green transition-colors" href="#">
                                    <span className="material-symbols-outlined text-lg">rss_feed</span>
                                </a>
                                <a className="w-10 h-10 flex items-center justify-center rounded-lg glass text-white/60 hover:text-neon-green transition-colors" href="#">
                                    <span className="material-symbols-outlined text-lg">mail</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-sm font-bold uppercase tracking-widest mb-6">Discovery</h5>
                            <ul className="space-y-4 text-sm text-white/40">
                                <li><a className="hover:text-neon-green transition-colors" href="#">New Venues</a></li>
                                <li><a className="hover:text-neon-green transition-colors" href="#">Popular Sports</a></li>
                                <li><a className="hover:text-neon-green transition-colors" href="#">Top Rated Arena</a></li>
                                <li><a className="hover:text-neon-green transition-colors" href="#">Nearby Facilities</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-sm font-bold uppercase tracking-widest mb-6">Business</h5>
                            <ul className="space-y-4 text-sm text-white/40">
                                <li><a className="hover:text-neon-green transition-colors" href="#">List your Venue</a></li>
                                <li><a className="hover:text-neon-green transition-colors" href="#">Partner Program</a></li>
                                <li><a className="hover:text-neon-green transition-colors" href="#">Advertising</a></li>
                                <li><a className="hover:text-neon-green transition-colors" href="#">Case Studies</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h5>
                            <ul className="space-y-4 text-sm text-white/40">
                                <li><a className="hover:text-neon-green transition-colors" href="#">Help Center</a></li>
                                <li><a className="hover:text-neon-green transition-colors" href="#">Cancellation Policy</a></li>
                                <li><a className="hover:text-neon-green transition-colors" href="#">Booking Guide</a></li>
                                <li><a className="hover:text-neon-green transition-colors" href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
                        <p>© 2024 StadiumBooking Marketplace. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                            <a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .venue-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 0 20px rgba(22, 163, 74, 0.15);
        }
      `}</style>
        </div>
    );
}
