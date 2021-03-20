const withImages = require('next-images');
module.exports = withImages();

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
});
module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	images: {
		domains: ['cdn.sanity.io'],
	},
});
