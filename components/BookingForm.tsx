"use client";

import { useState, FormEvent } from "react";

interface FormData {
    name: string;
    sport: string;
    date: string;
}

interface FormErrors {
    name?: string;
    sport?: string;
    date?: string;
}

export default function BookingForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        sport: "",
        date: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [showSuccess, setShowSuccess] = useState(false);

    const sports = [
        "Football",
        "Cricket",
        "Badminton",
        "Basketball",
        "Tennis",
        "Volleyball",
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        // Sport validation
        if (!formData.sport) {
            newErrors.sport = "Please select a sport";
        }

        // Date validation
        if (!formData.date) {
            newErrors.date = "Date is required";
        } else {
            const selectedDate = new Date(formData.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                newErrors.date = "Date cannot be in the past";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Save to localStorage
            const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
            const newBooking = {
                ...formData,
                id: Date.now(),
                timestamp: new Date().toISOString(),
            };
            bookings.push(newBooking);
            localStorage.setItem("bookings", JSON.stringify(bookings));

            // Show success message
            setShowSuccess(true);

            // Reset form
            setFormData({ name: "", sport: "", date: "" });
            setErrors({});

            // Hide success message after 5 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section id="booking" className="py-20 sm:py-32 relative bg-brand-deep overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-lime/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white/40 italic">
                        Reservation System
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-display tracking-tighter uppercase italic">
                        Book Your <span className="text-brand-lime">Arena</span>
                    </h2>
                    <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-bold italic max-w-lg mx-auto leading-relaxed">
                        Secure your position on our elite infrastructure through our high-performance scheduling interface.
                    </p>
                </div>

                {/* Form Container */}
                <div className="max-w-2xl mx-auto">
                    <div className="glass-morphism rounded-[3rem] p-8 sm:p-12 border border-white/10 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 italic"
                                >
                                    Athletic Practitioner Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/10 focus:outline-none focus:border-brand-lime/30 transition-all font-medium ${errors.name ? "border-red-500/50" : ""}`}
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest mt-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">error</span>
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Sport Type Field */}
                                <div>
                                    <label
                                        htmlFor="sport"
                                        className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 italic"
                                    >
                                        Discipline *
                                    </label>
                                    <select
                                        id="sport"
                                        name="sport"
                                        value={formData.sport}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-lime/30 transition-all font-medium appearance-none cursor-pointer ${errors.sport ? "border-red-500/50" : ""}`}
                                    >
                                        <option value="" className="bg-brand-deep">Select Discipline</option>
                                        {sports.map((sport) => (
                                            <option key={sport} value={sport} className="bg-brand-deep">
                                                {sport}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.sport && (
                                        <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest mt-3 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {errors.sport}
                                        </p>
                                    )}
                                </div>

                                {/* Date Field */}
                                <div>
                                    <label
                                        htmlFor="date"
                                        className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4 italic"
                                    >
                                        Execution Date *
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split("T")[0]}
                                        className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-lime/30 transition-all font-medium [color-scheme:dark] ${errors.date ? "border-red-500/50" : ""}`}
                                    />
                                    {errors.date && (
                                        <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest mt-3 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {errors.date}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn-lime w-full py-5 text-sm tracking-[0.3em] font-display flex items-center justify-center gap-3">
                                SECURE RESERVATION
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </form>

                        {/* Success Message */}
                        {showSuccess && (
                            <div className="mt-10 bg-brand-lime/10 border border-brand-lime/20 rounded-2xl p-6 animate-scale-in">
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-brand-lime flex items-center justify-center shadow-lg shadow-brand-lime/20">
                                        <span className="material-symbols-outlined text-brand-deep font-black">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black uppercase tracking-tight font-display mb-1 italic">
                                            Transmission Successful
                                        </h4>
                                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                                            Your session has been synchronized with our core servers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
