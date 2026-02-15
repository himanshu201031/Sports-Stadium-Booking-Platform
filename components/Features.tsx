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
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Why Choose <span className="gradient-text">Us</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Experience the best stadium booking platform with features designed for your convenience
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-glow group animate-scale-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center animate-fade-in">
                    <div className="glass-dark rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Join thousands of satisfied customers who trust us for their stadium bookings
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center space-x-2 text-primary-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white">Instant Confirmation</span>
                            </div>
                            <div className="flex items-center space-x-2 text-primary-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white">24/7 Support</span>
                            </div>
                            <div className="flex items-center space-x-2 text-primary-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white">Best Prices</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
