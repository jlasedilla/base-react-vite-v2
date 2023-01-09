import { defineConfig } from 'cypress';

export default defineConfig({
    video: false,
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
    },

    // TODO: update for stage
    e2e: {
        baseUrl: 'http://localhost:5173',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
