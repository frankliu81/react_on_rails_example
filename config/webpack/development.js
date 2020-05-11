process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if (process.env.WEBPACK_ANALYZE) {
  environment.plugins.prepend(
  'BundleAnalyzer',
   new BundleAnalyzerPlugin()
  )
}

console.log(environment)

module.exports = environment.toWebpackConfig()
