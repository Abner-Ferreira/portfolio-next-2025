/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|jpeg|gif|webp|avif|woff|woff2|css|js)', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 ano
          },
        ],
      },
    ];
  },
};

export default nextConfig;
