import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};


export default {
    debug: true,
    // bundle up code in a way that "WEB" browser can understand
    target: 'web',
    noInfo: false,
    devtool: 'source-map',
    entry: [
        './app/index'
    ],
    output: {
        path: __dirname + '/dist', // Note: physical files are only output by the production build task 'npm run build'
        publicPath: '/',
        filename: 'bundle.js'
    },
    // tell webpacks devserver where our code is
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // optimizes the order that our files are bundled in order for optimal minification
        new webpack.optimize.OccurenceOrderPlugin(),
        // DefinePlugin lets us define variables that are then made available to the libraries that Webpack is bundling
        // if in production, omits PropTypes when we're running in production, reduces bundle size
        new webpack.DefinePlugin(GLOBALS),
        // extracts CSS into a separate file
        new ExtractTextPlugin('styles.css'),
        // eliminates duplicate packages for small bundle sizes
        new webpack.optimize.DedupePlugin(),
        // minifies JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            // loaders --> use babel to transpile our code
            {test: /\.js$/, include: path.join(__dirname, 'app'), loaders: ['babel']},
            {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
        ]
    }
};