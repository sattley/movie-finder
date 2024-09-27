/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
          },
          {
            protocol: 'https',
            hostname: 'ia.media-imdb.com',
          },
        ],
      },
      webpack(config) {
        // Add rule to handle SVGs as React components
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        });
    
        return config;
      },
};

export default nextConfig;
