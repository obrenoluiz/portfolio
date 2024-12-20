/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
    },
    trailingSlash: true,
    devIndicators: {
        appIsrStatus: false,
        buildActivity: false,
        buildActivityPosition: 'bottom-right',
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
