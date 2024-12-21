/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    basePath: '/logos',
    assetPrefix: '/logos',
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        domains: ['github.io', 'obrenoluiz.github.io'],
    },
    devIndicators: {
        appIsrStatus: false,
        buildActivity: false,
        buildActivityPosition: 'bottom-right',
    },
};

module.exports = nextConfig;
