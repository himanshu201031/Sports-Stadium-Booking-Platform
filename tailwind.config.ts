import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    lime: '#D9FF32',
                    green: '#16A34A',
                    deep: '#0A0C0A',
                    surface: '#141714',
                    border: 'rgba(255, 255, 255, 0.1)',
                    muted: '#8e9e90',
                },
                "neon-green": "#D9FF32",
                "background-dark": "#0A0C0A",
            },
            backgroundImage: {
                'stadium-hero': "linear-gradient(rgba(10, 12, 10, 0.7), rgba(10, 12, 10, 0.9)), url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop')",
                'stadium-view': "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=2000&auto=format&fit=crop')",
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            fontFamily: {
                display: ['var(--font-outfit)', 'Inter', 'sans-serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};

export default config;
