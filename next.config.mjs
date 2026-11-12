/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // 1. Homepage index.php redirect to root
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      // 2. Cannibalization Consolidation: Merge packing-machine into flagship packaging-machine
      {
        source: '/packing-machine',
        destination: '/packaging-machine',
        permanent: true,
      },
      {
        source: '/packing-machine.php',
        destination: '/packaging-machine',
        permanent: true,
      },
      // 3. Cannibalization Consolidation: Merge vacuum-sealers into vacuum-sealing-machine
      {
        source: '/vacuum-sealers',
        destination: '/vacuum-sealing-machine',
        permanent: true,
      },
      {
        source: '/vacuum-sealers.php',
        destination: '/vacuum-sealing-machine',
        permanent: true,
      },
      // 4. Spelling correction: vaccum -> vacuum
      {
        source: '/vaccum-sealing-machine',
        destination: '/vacuum-sealing-machine',
        permanent: true,
      },
      {
        source: '/vaccum-sealing-machine.php',
        destination: '/vacuum-sealing-machine',
        permanent: true,
      },
      // 5. Disclaimer typo resolution - redirect legacy typo URL and legacy php URLs to clean canonical /disclaimer
      {
        source: '/disclamier',
        destination: '/disclaimer',
        permanent: true,
      },
      {
        source: '/disclamier.php',
        destination: '/disclaimer',
        permanent: true,
      },
      {
        source: '/disclaimer.php',
        destination: '/disclaimer',
        permanent: true,
      },
      // 6. Global 301 Migration: Redirect all legacy .php requests to clean Next.js extensionless routes
      {
        source: '/:slug.php',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
