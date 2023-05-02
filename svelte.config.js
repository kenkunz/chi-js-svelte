import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	preprocess: preprocess({
		postcss: {
			plugins: [postcssPresetEnv({ features: { 'nesting-rules': true } })]
		}
	})
};

export default config;
