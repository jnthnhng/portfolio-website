import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default ({ mode }) => {
	// process.env = {...process.env, ...loadEnv(mode, process.cwd())};
	return defineConfig({
		plugins: [sveltekit()]
	})
};
