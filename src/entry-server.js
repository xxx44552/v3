import { createSSRApp } from 'vue';
import { createMemoryHistory } from 'vue-router';
import {createI18n} from 'vue-i18n';
import createRouter from './router/index.js';
import store from './store';
import App from './App/index.vue';

// modules
import users from './modules/users';
import cabinet from './modules/cabinet';

import { registerModules } from './register-modules';

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ru: {
        message: {
            hello: 'Таки здравствуйте'
        }
    }
}
export default function () {
    const app = createSSRApp(App);
    const router = createRouter(createMemoryHistory());
    const i18n = createI18n({
        locale: 'ru',
        messages
    })
    registerModules({
        users,
        cabinet,
    }, router);

    app.use(router).use(store).use(i18n);

    return {
        app,
        router
    };
}
