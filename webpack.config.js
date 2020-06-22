const path = require('path');
const NODE_ENV = JSON.stringify(
    process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
);
const devtool = NODE_ENV == '"development"' ? 'source-map' : undefined;
const isDev = NODE_ENV == '"development"';

const webpackConfig = {
    devtool,
    optimization: {
        usedExports: true,
        minimize: false,
    },
    entry: { 'GetMessage/index': './api/GetMessage/index.ts' },
    output: {
        path: path.join(__dirname, '/api/'),
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.func.json',
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = webpackConfig;
