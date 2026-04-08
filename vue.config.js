const { defineConfig } = require('@vue/cli-service')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  filenameHashing: true,
  configureWebpack: {
    output: {
      filename: 'js/[name].[contenthash:8].js',
      chunkFilename: 'js/[name].[contenthash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl(us)?$/,
          use: [
            'stylus-loader'
          ]
        }
      ]
    },
    plugins: [
      new CompressionWebpackPlugin({
        test: /\.(svg|js|css)$/,
        algorithm: 'brotliCompress',
        minRatio: 0.8
      })
    ]
  },
  chainWebpack: config => {
    // CSS с contenthash
    config.plugin('extract-css').tap(args => {
      args[0].filename = 'css/[name].[contenthash:8].css'
      args[0].chunkFilename = 'css/[name].[contenthash:8].css'
      return args
    })
    
    // Изображения с contenthash
    config.module
      .rule('images')
      .set('generator', {
        filename: 'img/[name].[contenthash:8][ext]'
      })
  }
})


