/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: 'output: export' was tried here and reverted — static export forbids
  // Server Actions (the contact form's submitEnquiry) and next.config redirects,
  // and forces next/image to skip optimization. If static hosting is genuinely
  // needed, the contact form has to be redesigned first (e.g. posted to an
  // external form service) rather than flipping this flag.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      // No app/home route exists — this is the only thing serving it.
      { source: '/home', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;
