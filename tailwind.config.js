module.exports = { content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
], 
    theme: { extend: {
        fontFamily:{
            sans:['var(--font-poppins)']
        },
        fontWeight:{
            regular: '400',
            medium: '500',
            bold: '600',
            black: '700',
        }
    }, }, plugins: [], };
