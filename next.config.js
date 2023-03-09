/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "ucarecdn.com",
      "cdn.buymeacoffee.com",
      "res.cloudinary.com",
      "imgur.com",
      "i.imgur.com",
      "cutt.ly",
      "activity-graph.herokuapp.com",
      "images.unsplash.com",
      "source.unsplash.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};
