/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#646cff',
                secondary: '#535bf2',
                accent: '#ff4081',
                'bg-dark': '#0a0a0a',
                'glass-bg': 'rgba(255, 255, 255, 0.05)',
                'glass-border': 'rgba(255, 255, 255, 0.1)',
                'neon-pink': '#ff2b9d',
                'neon-blue': '#00f2ff',
                'neon-purple': '#bc13fe',
            },
            boxShadow: {
                'neon-pink': '0 0 10px #ff2b9d, 0 0 20px #ff2b9d',
                'neon-blue': '0 0 10px #00f2ff, 0 0 20px #00f2ff',
                'neon-purple': '0 0 10px #bc13fe, 0 0 20px #bc13fe',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
