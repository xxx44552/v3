const path = require('path');

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
    }
};
