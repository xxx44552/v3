const path = require('path');
const express = require('express');
const fs = require('fs');
const { renderToString, pipeToWebWritable } = require('@vue/server-renderer');
const { renderHeadToString } = require('@vueuse/head')
const manifest = require('./build/server/ssr-manifest.json');

const server = express();

const appPath = path.join(__dirname, './build', 'server', manifest['app.js']);
const createApp = require(appPath).default;

server.use('/img', express.static(path.join(__dirname, './build/client', 'img')));
server.use('/js', express.static(path.join(__dirname, './build/client', 'js')));
server.use('/css', express.static(path.join(__dirname, './build/client', 'css')));
server.use('/favicon.ico', express.static(path.join(__dirname, './build/client', 'favicon.ico')));

server.get('*', async (req, res) => {
    const { app, router } = createApp();

    await router.push(req.url);
    await router.isReady();
    const meta = router?.currentRoute?._value?.meta;
    console.log(meta)

    const ctx = {}
    const appContent = await renderToString(app, ctx);
    fs.readFile(path.join(__dirname, '/build/client/index.html'), (err, html) => {
        if (err) {
            throw err;
        }

        html = html
            .toString()
            .replace('<div id="app">', `<div id="app">${appContent}`);
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    });
})

console.log('Start on port 8082...');

server.listen(8082);
