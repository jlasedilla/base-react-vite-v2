/** @type {import('tailwindcss').Config} */

// Opacity function ready for future usage with theming
// function withOpacity(variableName) {
//     return ({ opacityValue }) => {
//         if (opacityValue === undefined) return `rgb(var(${variableName}))`;
//         return `rgba(var(${variableName}), ${opacityValue})`;
//     };
// }

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: {
                blue: '#164A9A',
                red: '#D81421',
                black: '#000000',
                'light-gray': '#E1E1E6',
                white: '#FFFFFF',
                cream: '#F8F3EB',
                grey: '#E1E1E6',
            },
            secondary: {
                'light-blue': {
                    100: '#7BA0E3',
                    50: '#BDD0F1',
                    20: '#E4ECF9',
                },
                'light-red': {
                    100: '#F05555',
                    50: '#F7AAAB',
                    20: '#FCDDDD',
                },
            },
            tertiary: {
                teal: {
                    100: '#7BA0E3',
                    50: '#7BA0E3',
                },
                jade: {
                    100: '#BDD0F1',
                    50: '#BDD0F1',
                },
                green: {
                    100: '#E4ECF9',
                    50: '#E4ECF9',
                },
                yellow: {
                    100: '#F05555',
                    50: '#F05555',
                },
                orange: {
                    100: '#F7AAAB',
                    50: '#F7AAAB',
                },
                pink: {
                    100: '#FCDDDD',
                    50: '#FCDDDD',
                },
                purple: {
                    100: '#FCDDDD',
                    50: '#FCDDDD',
                },
            },
        },
        extend: {},
    },
    plugins: [],
};
