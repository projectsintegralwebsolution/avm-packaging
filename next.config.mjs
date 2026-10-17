/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/vaccum-sealing-machine.php',
        destination: '/vacuum-sealing-machine.php',
        permanent: true,
      },
      {
        source: '/vaccum-sealing-machine',
        destination: '/vacuum-sealing-machine',
        permanent: true,
      },
      {
        source: '/disclaimer.php',
        destination: '/disclamier.php',
        permanent: true,
      },
      {
        source: '/disclaimer',
        destination: '/disclamier',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Map all legacy .php requests seamlessly to the App Router clean routes
      {
        source: '/:slug.php',
        destination: '/:slug',
      },
    ];
  },
};

export default nextConfig;
