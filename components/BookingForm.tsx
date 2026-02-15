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
        <section id="booking" className="py-20 sm:py-32 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Book Your <span className="gradient-text">Slot</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Fill in the details below to reserve your stadium slot
                    </p>
                </div>

                {/* Form Container */}
                <div className="max-w-2xl mx-auto">
                    <div className="glass-dark rounded-3xl p-8 sm:p-12 animate-scale-in">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-white font-medium mb-2"
                                >
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className={errors.name ? "ring-2 ring-red-500" : ""}
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-sm mt-2 flex items-center">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Sport Type Field */}
                            <div>
                                <label
                                    htmlFor="sport"
                                    className="block text-white font-medium mb-2"
                                >
                                    Sport Type *
                                </label>
                                <select
                                    id="sport"
                                    name="sport"
                                    value={formData.sport}
                                    onChange={handleChange}
                                    className={errors.sport ? "ring-2 ring-red-500" : ""}
                                >
                                    <option value="">Select a sport</option>
                                    {sports.map((sport) => (
                                        <option key={sport} value={sport}>
                                            {sport}
                                        </option>
                                    ))}
                                </select>
                                {errors.sport && (
                                    <p className="text-red-400 text-sm mt-2 flex items-center">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {errors.sport}
                                    </p>
                                )}
                            </div>

                            {/* Date Field */}
                            <div>
                                <label
                                    htmlFor="date"
                                    className="block text-white font-medium mb-2"
                                >
                                    Booking Date *
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    min={new Date().toISOString().split("T")[0]}
                                    className={errors.date ? "ring-2 ring-red-500" : ""}
                                />
                                {errors.date && (
                                    <p className="text-red-400 text-sm mt-2 flex items-center">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {errors.date}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn-primary w-full text-lg">
                                Book Stadium
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
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </button>
                        </form>

                        {/* Success Message */}
                        {showSuccess && (
                            <div className="mt-6 bg-primary-500/20 border border-primary-500 rounded-lg p-4 animate-scale-in">
                                <div className="flex items-center">
                                    <svg
                                        className="w-6 h-6 text-primary-400 mr-3"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div>
                                        <h4 className="text-white font-semibold">
                                            Booking Successful!
                                        </h4>
                                        <p className="text-gray-300 text-sm">
                                            Your stadium slot has been reserved. Check your email for
                                            confirmation.
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
