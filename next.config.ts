import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	env: {
		CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
		CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
	},
	images: {
		remotePatterns: [new URL('https://images.ctfassets.net/**')],
	},
}

export default nextConfig
