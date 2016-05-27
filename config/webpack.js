const path = require('path')

module.exports = {
  options: {
    resolve: {
      root: path.join(__dirname, '../')
    },
    entry: [
      './assets/js/index.js'
    ],
    output: {
      path: path.join(__dirname, './../dist'),
      filename: 'index.js',
      publicPath: '/dist/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['transform-runtime']
          }
        }
      ]
    }
  }
}
