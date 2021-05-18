const path = require("path");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      components: path.resolve(__dirname, "components"),
      sass: path.resolve(__dirname, "sass"),
      static: path.resolve(__dirname, "static")
    };
    return config;
  },
};
