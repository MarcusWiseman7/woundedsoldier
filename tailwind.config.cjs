// z-index scheme
// z-10
// z-20
// z-30 mobile menu
// z-40 popups
// z-50 app messages

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'dark-body': '#3c3737',
                'dark-page': '#332d2d',
                'dark-hover': '#514c4c',
                'dark-border': '#484c51',
                'dark-text': '#ffffff',
                'dark-text-2': '#999faa',
                'light-body': '#e5e5e5',
                'light-page': '#ffffff',
                'light-hover': '#f2f4f8',
                'light-border': '#dddddd',
                'light-text': '#3c3737',
                'light-text-2': '#999faa',
                'main-color': '#fb6d3a',
            },
        },
    },
    plugins: [],
};
