import { appTools, defineConfig } from "@modern-js/app-tools";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";
import { moduleFederationPlugin } from "@module-federation/modern-js";

export default defineConfig({
	source: {
		globalVars: Object.fromEntries(
			Object.entries(process.env).filter(([key]) =>
				key.startsWith("NX_PUBLIC_"),
			),
		),
		define: {
			"process.env": Object.fromEntries(
				Object.entries(process.env)
					.filter(([key]) => key.startsWith("NX_PUBLIC_"))
					.map(([key, value]) => [key, JSON.stringify(value)]),
			),
		},
	},
	html: {
		favicon: "./public/favicon.ico",
	},
	dev: {
		port: 3001,
	},
	runtime: {
		router: true,
	},
	plugins: [
		appTools({
			bundler: "rspack",
		}),
		tailwindcssPlugin(),
		moduleFederationPlugin(),
	],
});
