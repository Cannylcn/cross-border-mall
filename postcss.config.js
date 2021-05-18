const pxtorem = require("postcss-pxtorem");
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 144,
      propList: ["*"],
      selectorBlackList: [/^\.nop2r/, /^\.am/, "html"], //排除样式
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
};
