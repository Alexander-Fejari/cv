/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'black': '#1B1B1B',
            'orange': '#FFB800',
        },
        fontFamily: {
            sans: ['Nunito Sans, sans-serif']
        },
        extend: {},
    },
    plugins: [],
}