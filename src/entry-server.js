import { createSSRApp } from 'vue';
import { createMemoryHistory } from 'vue-router';
import createRouter from './router/index.js';
import store from './store';
import App from './App/index.vue';

// modules
import users from './modules/users';
import cabinet from './modules/cabinet';

import { registerModules } from './register-modules';

export default function () {
    const app = createSSRApp(App);
    const router = createRouter(createMemoryHistory());

    registerModules({
        users,
        cabinet,
    }, router);

    app.use(router).use(store);

    return {
        app,
        router
    };
}
