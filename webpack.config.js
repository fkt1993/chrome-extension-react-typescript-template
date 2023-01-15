const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    background: path.join(__dirname, 'src/background.ts'),
    main: path.join(__dirname, 'src/main.tsx')
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '.',
          to: '../',
          context: 'public'
        }
      ]
    })
  ],
  devtool: 'cheap-module-source-map',
  cache: true,
  watchOptions: {
    poll: true
  }
}
