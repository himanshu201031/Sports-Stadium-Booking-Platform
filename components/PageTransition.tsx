"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        // Slide up and fade in entrance
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                clearProps: "all"
            }
        );
    }, [pathname]);

    return (
        <div ref={containerRef} className="w-full">
            {children}
        </div>
    );
}
