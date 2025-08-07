/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "wlscwbcqtcouoejldvpv.supabase.co",
			},
		],
	},
};

module.exports = nextConfig;
