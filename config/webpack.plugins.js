const dotenv = require('dotenv');

// importing webpack dependencies
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const ImageminWebP = require('imagemin-webp');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const PUBLIC_PATH = process.env.PUBLIC_URL;

/**
 * Parses environment variables into a format acceptable by the webpack DefinePlugin
 * @param {object} configs Object literal containing configuration variables to
 * parse before sending them to react
 */
const parseConfigs = configs => Object.keys(configs || {}).reduce(
  (acc, val) => ({ ...acc, [val]: JSON.stringify(configs[val]) }),
  {},
);

// fetch system environment variables
const systemVariables = parseConfigs(process.env);

// fetch environment variables from the dotenv file
const { parsed: dotenvConfigs } = dotenv.config();

// process the environment variables from the dotenv file
const processedDotenvConfigs = parseConfigs(dotenvConfigs);

const definePlugin = new webpack.DefinePlugin({
  'process.env': { ...processedDotenvConfigs, ...systemVariables },
});

// const definePlugin = new webpack.DefinePlugin({
//   'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
//   'process.env.SASS_PATH': JSON.stringify(process.env.SASS_PATH)
// });


// instantiating webpack dependencies
const cleanWebpack = new CleanWebpackPlugin();
const htmlWebpack = new htmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
  title: 'Superheroes',
  favicon: './public/favicon.ico',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
});
const miniCssExtract = new miniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[scheduleId].[hash].css',
});
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const hashedPlugin = new webpack.HashedModuleIdsPlugin();
const manifestPlugin = new ManifestPlugin({
  fileName: './public/asset-manifest.json', // Not to confuse with manifest.json
});

const copyPlugin = new CopyWebpackPlugin([
  { from: 'public' },
  { from: 'src/assets/images/*', to: 'src/assets/images/[name].webp' }
]);

const imageinPlugin = new ImageminPlugin({
  // imagemin-webp docs: https://github.com/imagemin/imagemin-webp
  plugins: [ImageminWebP({quality: 50})]
});

const workBoxPlugin = new InjectManifest({
  swSrc: './public/service-worker.js',
  // include: [
  //   /\.html$/,
  //   /\.js$/,
  //   /\.css$/,
  //   /\.woff2$/,
  //   /\.jpg$/,
  //   /\.png$/
  // ],
  // exclude: ['/node_modules'],
  exclude: [ /\.map$/, /^manifest.*\.js(?:on)?$/ ],
  maximumFileSizeToCacheInBytes: 5000000,
});

module.exports = {
  cleanWebpack,
  definePlugin,
  htmlWebpack,
  miniCssExtract,
  miniCssExtractPlugin,
  hotModuleReplacementPlugin,
  hashedPlugin,
  manifestPlugin,
  copyPlugin,
  workBoxPlugin,
  imageinPlugin,
};
