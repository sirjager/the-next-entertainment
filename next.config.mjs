/** @type {import('next').NextConfig} */
const nextConfig = {
	compress: true,
	reactStrictMode: false,
	images: {
		remotePatterns: [{hostname: "**"}],
	},
};

export default nextConfig;
