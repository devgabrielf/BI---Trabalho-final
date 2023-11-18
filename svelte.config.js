import preprocess from "svelte-preprocess";

import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({ postcss: true })],
	kit: {
		adapter: adapter(),
		alias: {
			$actions: "src/lib/actions",
			$api: "src/lib/api",
			$assets: "src/lib/assets",
			$components: "src/lib/components",
			$enums: "src/lib/enums",
			$stores: "src/lib/stores",
			$types: "src/lib/types",
			$utils: "src/lib/utils",
		},
	},
};

export default config;
