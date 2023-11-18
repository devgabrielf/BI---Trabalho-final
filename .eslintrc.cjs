module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "eslint-plugin-import-helpers", "unused-imports"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	globals: {
		NodeJS: true,
		$$Generic: "readable",
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
	],
	rules: {
		"@typescript-eslint/no-explicit-any": 0,
		"import-helpers/order-imports": [
			"error",
			{
				groups: [
					["/^(?!$)svelte/"],
					"module",
					[
						"/^\\$actions/",
						"/^\\$api/",
						"/^\\$assets/",
						"/^\\$enums/",
						"/^\\$lib/",
						"/^\\$stores/",
						"/^\\$types/",
						"/^\\$utils/",
					],
					["/^\\$components/"],
				],
				newlinesBetween: "always",
				alphabetize: { order: "asc", ignoreCase: true },
			},
		],
		"no-multiple-empty-lines": 1,
		"@typescript-eslint/no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"warn",
			{
				vars: "all",
				varsIgnorePattern: "^(?:_|\\$\\$)",
				args: "after-used",
				argsIgnorePattern: "^(?:_|\\$\\$)",
			},
		],
	},
};
