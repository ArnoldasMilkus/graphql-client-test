const path = require('path');

module.exports = {
    entry: './src/js/app.tsx',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './public/'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        publicPath: './public/',
        host: '0.0.0.0',
        clientLogLevel: 'debug',
        // liveReload: false,
        // lazy: true,
        writeToDisk: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.(ts|js|tsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // failOnWarning: true, // bad ass validation
                    failOnError: true,
                },
            },
        ],
    },
};
