const path = require("path");

const defaultConfig = require("@wordpress/scripts/config/webpack.config.js");

module.exports = {
	...defaultConfig,
	...{
		entry: {
			index: path.resolve(process.cwd(), "src", "index.js"),
			rating: path.resolve(process.cwd(), "src", "rating.js"),
		},
	},
};
