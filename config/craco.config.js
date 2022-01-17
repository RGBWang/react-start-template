const path = require('path')
const CracoAlias = require("craco-alias")
const CracoRawLoaderPlugin = require("@baristalabs/craco-raw-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports ={
   plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: ".",
        aliases: {
            "@": "./src/",
        }
      }
    },
    {
      plugin: CracoRawLoaderPlugin,
      options: {
        test: /(\.glsl$)|(\.raw$)/,
      }
    }
  ],
   devServer: {
    open:false,
    compress: true,
    port: 8505,
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig
    }
  }
}