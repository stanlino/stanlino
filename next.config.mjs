/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/51935002',
        port: ''
      }
    ]
  }
};

export default nextConfig;
