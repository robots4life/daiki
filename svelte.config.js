// import adapter from '@sveltejs/adapter-auto';

// import adapter from '@sveltejs/adapter-node';

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Adapter Auto
		// @sveltejs/adapter-auto
		// adapter: adapter(),

		// Adapter Node
		// https://github.com/sveltejs/kit/tree/master/packages/adapter-node
		// adapter: adapter({ out: 'build' }),
		// Adapter Node end

		// https://github.com/sveltejs/kit/issues/962
		// inline all stylesheets smaller than 1kb
		inlineStyleThreshold: 1024000,

		// Adapter Static
		// https://github.com/sveltejs/kit/tree/master/packages/adapter-static
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build'
			// fallback: null,
			// precompress: false
		}),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},
		// Adapter Static end
		vite: {
			server: {
				host: '0.0.0.0',
				port: 3000
			},
			define: {
				// env-cmd https://blog.hdks.org/Environment-Variables-in-SvelteKit-and-Vercel/
				'process.env': process.env
			}
		}
	}
};

export default config;
