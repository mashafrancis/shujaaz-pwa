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
  workBoxPlugin,
  copyPlugin,
  imageinPlugin,
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
    extensions: ['.ts', '.tsx', '.js', '.scss', '.gif', '.png', '.jpg', '.jpeg', '.svg'],
    alias: {
      '@pages': path.resolve(__dirname, '..', 'src/pages/'),
      '@components': path.resolve(__dirname, '..', 'src/components/'),
      '@placeholders': path.resolve(__dirname, '..', 'src/placeholders/'),
      '@context': path.resolve(__dirname, '..', 'src/context'),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: !isDevMode
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
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
    copyPlugin,
    imageinPlugin,
    // workBoxPlugin,
  ]
};
