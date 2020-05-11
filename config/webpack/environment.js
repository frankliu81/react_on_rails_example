const { environment } = require('@rails/webpacker')

environment.splitChunks((config) => Object.assign({}, config, { 
  optimization: {
    // The value 'single' instead creates a runtime file to be shared for all 
    // generated chunks. This setting is an alias for:
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            // Tells webpack to ignore splitChunks.minSize, splitChunks.minChunks, 
            // splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests 
            // options and always create chunks for this cache group.
            enforce: true,
            // https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0
            // “webpack, I don’t care if it is a dynamically imported module or 
            // non-dynamically imported module. Apply optimization over all of them.
            chunks: 'all'
        }
      }
    }
  }
}));


module.exports = environment
