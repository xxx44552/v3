const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    outputDir: path.resolve(__dirname, 'build'),
    configureWebpack: {
        resolve: {
            extensions: ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.sass', '.css'],
            alias: {
                '@assets': path.resolve(__dirname, 'src/assets/'),
                '@style': path.resolve(__dirname, 'src/style/'),
                '@helpers': path.resolve(__dirname, 'src/helpers/'),
                '@mixins': path.resolve(__dirname, 'src/mixins/'),
                '@components': path.resolve(__dirname, 'src/components/'),
                '@': path.resolve(__dirname, 'src/'),
            },
        },
    },
    transpileDependencies: ['vue-meta'],
    chainWebpack: config => {
        config.module.rule('vue').uses.delete('cache-loader');
        config.module.rule('js').uses.delete('cache-loader');
        config.module.rule('ts').uses.delete('cache-loader');
        config.module.rule('tsx').uses.delete('cache-loader');

        if (!process.env.SSR) {
            config
                .entry('app')
                .clear()
                .add('./src/entry-client.js');
            return;
        }

        config
            .entry('app')
            .clear()
            .add('./src/entry-server.js');

        config.target('node');
        config.output.libraryTarget('commonjs2');

        config
            .plugin('manifest')
            .use(new WebpackManifestPlugin({ fileName: 'ssr-manifest.json' }));

        config.externals(nodeExternals({ allowlist: /\.(css|vue|sass)$/ }));

        config.optimization.splitChunks(false).minimize(false);

        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.plugins.delete('progress');
        config.plugins.delete('friendly-errors');

        config.plugin('limit').use(
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        );
    }
};
