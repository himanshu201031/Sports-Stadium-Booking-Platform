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
                primary: {
                    50: '#e6f7f0',
                    100: '#b3e6d1',
                    200: '#80d5b2',
                    300: '#4dc493',
                    400: '#1ab374',
                    500: '#00a35c',
                    600: '#008a4d',
                    700: '#00713e',
                    800: '#00582f',
                    900: '#003f20',
                },
                dark: {
                    50: '#f5f5f5',
                    100: '#e0e0e0',
                    200: '#bdbdbd',
                    300: '#9e9e9e',
                    400: '#757575',
                    500: '#616161',
                    600: '#424242',
                    700: '#303030',
                    800: '#1a1a1a',
                    900: '#0a0a0a',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'stadium-gradient': 'linear-gradient(135deg, #0a4d2e 0%, #1a5c3a 50%, #0f3d28 100%)',
                'hero-gradient': 'linear-gradient(to bottom, rgba(10, 77, 46, 0.9), rgba(15, 61, 40, 0.95))',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'glow': '0 0 20px rgba(0, 163, 92, 0.5)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

export default config;
