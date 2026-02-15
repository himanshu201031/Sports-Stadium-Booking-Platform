import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BookingForm from "@/components/BookingForm";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <BookingForm />

            {/* Footer */}
            <footer className="bg-dark-900 border-t border-white/10 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">S</span>
                                </div>
                                <span className="text-white font-bold text-xl">
                                    Stadium<span className="gradient-text">Book</span>
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Your trusted platform for booking sports stadiums quickly and easily.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#booking" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                                        Book Now
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-center space-x-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span>support@stadiumbook.com</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>+1 (555) 123-4567</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-white/10 pt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} StadiumBook. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
