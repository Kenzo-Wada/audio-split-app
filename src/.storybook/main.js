const path = require('path')

module.exports = {
  "typescript" : { reactDocgen: false },
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  features: {
    emotionAlias: false,
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['~'] = path.resolve(__dirname, '../');
    return config;
  },
}