const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, 'build'),
    configureWebpack: {
        resolve: {
            extensions: ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.sass', '.css']
        },
    }
};
