/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true, 
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'lovepik.com',
          pathname: '**',
        }
      ],
    },
  }
