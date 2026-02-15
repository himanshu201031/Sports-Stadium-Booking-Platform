import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "STADIUMBOOK | Elite Sports Venue Reservation",
    description: "The world's leading sports facility booking platform. Reserve football, tennis, and basketball courts instantly.",
    keywords: ["sports", "stadium", "booking", "stadiumbook", "reservation", "arenas"],
    authors: [{ name: "STADIUMBOOK Team" }],
    openGraph: {
        title: "STADIUMBOOK - Reserve Your Arena",
        description: "Book Your Favorite Stadium in Minutes",
        type: "website",
    },
};

import GSAPInitializer from "@/components/GSAPInitializer";
import PageTransition from "@/components/PageTransition";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased bg-brand-deep text-white selection:bg-brand-lime selection:text-brand-deep">
                <GSAPInitializer />
                <PageTransition>
                    {children}
                </PageTransition>
            </body>
        </html>
    );
}
