import { createModuleFederationConfig } from "@module-federation/modern-js";

export default createModuleFederationConfig({
	name: "host",
	filename: "remoteEntry.js",
	shared: {
		react: {
			singleton: true,
		},
		"react-dom": {
			singleton: true,
		},
	},
});
