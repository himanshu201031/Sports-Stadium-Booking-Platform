import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sports Stadium Booking Platform | Book Your Favorite Stadium",
    description: "Reserve football, cricket, badminton & more instantly. Book stadium slots quickly with our easy and secure booking platform.",
    keywords: ["sports", "stadium", "booking", "football", "cricket", "badminton", "basketball", "reservation"],
    authors: [{ name: "Sports Stadium Booking" }],
    openGraph: {
        title: "Sports Stadium Booking Platform",
        description: "Book Your Favorite Stadium in Minutes",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
