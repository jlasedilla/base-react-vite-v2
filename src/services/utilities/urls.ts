// The API Endpoint for Backend
const getAPIEndpointUrl = (): string => {
    switch (String(import.meta.env.MODE)) {
        case 'development':
            return '';
        case 'staging':
            return '';
        case 'test':
            return '';
        case 'production':
            return '';
        default:
            return '';
    }
};

// API Endpoint URL
export const API_ENDPOINT_URL = getAPIEndpointUrl();
