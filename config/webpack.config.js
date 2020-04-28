const path = require('path');
const {materialImporter} = require('./webpack.util');
const autoprefixer = require('autoprefixer');
const {
  definePlugin,
  cleanWebpack,
  htmlWebpack,
  miniCssExtract,
  miniCssExtractPlugin,
  hashedPlugin,
  manifestPlugin,
  // workBoxPlugin,
  copyPlugin
} = require('./webpack.plugins');

const isDevMode = process.env.APP_ENV !== 'production';
const PUBLIC_PATH = process.env.PUBLIC_URL;

module.exports = {
  entry: {
    main: path.join(__dirname, '..', 'src', 'index.tsx'),
    styleGlobals: path.join(__dirname, '..', 'src/assets/scss/globals.scss')
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: "[name].[hash:8].bundle.js",
    publicPath: '/'
  },
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      chunks: "all",
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@pages': path.resolve(__dirname, '..', 'src/pages/'),
      '@components': path.resolve(__dirname, '..', 'src/components/'),
      '@placeholders': path.resolve(__dirname, '..', 'src/placeholders/'),
      '@utils': path.resolve(__dirname, '..', 'src/utils'),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isDevMode ? 'style-loader' : miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({
                'overrideBrowserslist': ['> 1%', 'last 2 versions']
              })],
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              importer: materialImporter,
              // Prefer Dart Sass
              implementation: require('sass'),
              sassOptions: {
                includePaths: ['./node_modules']
              },
            }
          },
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /node_modules\/@material/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            sourceMap: true,
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          /node_modules\/@material/
        ],
      },
    ]
  },
  plugins: [
    definePlugin,
    htmlWebpack,
    hashedPlugin,
    cleanWebpack,
    miniCssExtract,
    manifestPlugin,
    // workBoxPlugin,
    copyPlugin
  ]
};
