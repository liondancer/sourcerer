import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'cheap-module-source-map',
    debug: true,
    // bundle up code in a way that "WEB" browser can understand
    target: 'web',
    noInfo: false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client', //note that if reloads the page if hot module reloading fails
        './app/index'
    ],
    output: {
        path: __dirname + '/dist', // Note: physical files are only output by the production build task 'npm run build'
        publicPath: '/',
        filename: 'bundle.js'
    },
    // tell webpacks devserver where our code is
    devServer: {
        contentBase: './app'
    },
    plugins: [
        // replace modules without full refresh
        new webpack.HotModuleReplacementPlugin(),
        // keep errors from breaking our hot reload
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            // loaders --> use babel to transpile our code
            {test: /\.js$/, include: path.join(__dirname, 'app'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},

        ]
    }
};