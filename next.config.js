/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: [],
    },
    devIndicators: {
        appIsrStatus: false,
        buildActivity: false,
        buildActivityPosition: 'bottom-right',
    },
};

module.exports = nextConfig;
