import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'loading-bar': 'loading-bar 2s linear infinite'
            },
            keyframes: {
                'loading-bar': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)s' },
                },
            },
            colors: {
                primary: {
                    DEFAULT: "#FF0000",
                    hover: "#E60000",
                    active: "#CC0000",
                    blue: ""
                },
                secondary: {
                    DEFAULT: colors.neutral[100],
                    hover: colors.neutral[200],
                    border: colors.neutral[400],
                    text: colors.neutral[500],
                    dark: colors.neutral[800],
                    "dark-hover": colors.neutral[900],
                },
            }
        },
    },
    plugins: [],
}