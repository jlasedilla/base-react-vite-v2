import { defineConfig } from 'cypress';

export default defineConfig({
    video: false,
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
    },

    // TODO: update for testing stage
    e2e: {
        baseUrl: 'http://localhost:5173',
        video: false,
        // setupNodeEvents(on, config) {
        //     // implement node event listeners here
        // },
    },
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: false,
        json: true,
    },
});
