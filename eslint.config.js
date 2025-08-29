const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const eslintPluginReactNative = require("eslint-plugin-react-native");

module.exports = {
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
