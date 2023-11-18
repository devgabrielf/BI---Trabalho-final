module.exports = {
	arrowParens: "avoid",
	useTabs: true,
	singleQuote: false,
	trailingComma: "all",
	printWidth: 100,
	plugins: [require("prettier-plugin-svelte"), require("prettier-plugin-tailwindcss")],
	pluginSearchDirs: ["."],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
