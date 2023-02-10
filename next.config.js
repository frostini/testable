/** @type {import('next').NextConfig} */
const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc()({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});

// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     scrollRestoration: true,
//   },
// }

// module.exports = nextConfig
