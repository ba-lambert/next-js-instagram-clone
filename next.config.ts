import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['upload.wikimedia.org', 'avatars.githubusercontent.com', 'vehicle-images.dealerinspire.com', 'images.unsplash.com', 'res.cloudinary.com', 'i.pinimg.com'],
    disableStaticImages: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf|mp4|webm|wav|mp3|m4a|aac|oga|svg|png|jpg|jpeg|gif|webp)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
