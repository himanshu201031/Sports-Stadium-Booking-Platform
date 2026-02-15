"use client";

export default function Hero() {
    const scrollToBooking = () => {
        const element = document.getElementById("booking");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070&auto=format&fit=crop')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-hero-gradient"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center glass px-4 py-2 rounded-full mb-6 animate-fade-in">
                        <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm text-gray-200">Book Your Slot Today</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
                        Book Your Favorite{" "}
                        <span className="gradient-text">Stadium</span>
                        <br />
                        In Just A Minute
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 animate-slide-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
                        Reserve football, cricket, badminton & more instantly.
                        <br className="hidden sm:block" />
                        Experience seamless booking with real-time availability.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                        <button
                            onClick={scrollToBooking}
                            className="btn-primary w-full sm:w-auto"
                        >
                            Book Now
                            <svg
                                className="inline-block ml-2 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </button>
                        <button className="btn-secondary w-full sm:w-auto">
                            Learn More
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
                        <div className="glass-dark rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                            <div className="text-2xl sm:text-4xl font-bold gradient-text mb-2">50+</div>
                            <div className="text-xs sm:text-sm text-gray-400">Stadiums</div>
                        </div>
                        <div className="glass-dark rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                            <div className="text-2xl sm:text-4xl font-bold gradient-text mb-2">10K+</div>
                            <div className="text-xs sm:text-sm text-gray-400">Bookings</div>
                        </div>
                        <div className="glass-dark rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                            <div className="text-2xl sm:text-4xl font-bold gradient-text mb-2">4.9★</div>
                            <div className="text-xs sm:text-sm text-gray-400">Rating</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg
                    className="w-6 h-6 text-white opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
