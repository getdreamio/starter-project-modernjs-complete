const { withBaseRspack } = require("@dream.mf/bundlers");

const config = withBaseRspack(
	{
		devServer: { port: 3011 },
		federationConfig: {
			name: "remote_about",
			filename: "remoteEntry.js",
			exposes: {
				"./AboutPage": "./src/_app",
			},
		},
	},
	true,
);

module.exports = config;
