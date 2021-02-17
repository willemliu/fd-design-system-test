module.exports = {
    target: process.env.NOW_SERVERLESS === 'false' ? 'server' : 'serverless',
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    images: {
        domains: ['fd-external-development.imgix.net', 'images.fd.nl'],
    },
    future: { webpack5: true },
    webpack: (config, options) => {
        // SVG
        config.module.rules.push({
            test: /\.svg$/,
            loader: 'raw-loader',
        });

        /**
         * This config replaces React with PreactX (3KB gzipped).
         * PreactX should be a 100% drop-in replacement for React.
         * If PreactX is causing problems we can just turn this config off.
         */
        // config.resolve.alias = Object.assign({}, config.resolve.alias, {
        //     react: 'preact/compat',
        //     react$: 'preact/compat',
        //     'react-dom': 'preact/compat',
        //     'react-dom$': 'preact/compat',
        // });

        /**
         * Generate webpack bundle report.
         */
        if (process.env.WEBPACK_BUNDLE_ANALYZER == 'true') {
            const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: 'static',
                    reportFilename: options.isServer
                        ? '../../dist/analyzer/server.html'
                        : '../dist/analyzer/client.html',
                    openAnalyzer: false,
                })
            );
        }

        return config;
    },
};
