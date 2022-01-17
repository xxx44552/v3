import { createSSRApp } from 'vue';
import { createMemoryHistory } from 'vue-router';
import createRouter from './router/index.js';
import App from './App/index.vue';

export default function () {
    const app = createSSRApp(App);
    const router = createRouter(createMemoryHistory());

    app.use(router);

    return {
        app,
        router
    };
}
