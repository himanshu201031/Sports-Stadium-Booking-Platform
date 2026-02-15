"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RevealProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    textReveal?: boolean;
}

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 1,
    textReveal = false
}: RevealProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const vars = {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
            force3D: true
        };

        if (textReveal) {
            // For text reveal, we can do a mask or just a cleaner slide
            gsap.fromTo(el,
                { ...vars, clipPath: "inset(0 0 100% 0)" },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    clipPath: "inset(0 0 0% 0)",
                    duration,
                    delay,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        } else {
            gsap.fromTo(el,
                vars,
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }

    }, [direction, delay, duration, textReveal]);

    return (
        <div ref={sectionRef} className="will-change-transform">
            {children}
        </div>
    );
}
