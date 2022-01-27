import { createSSRApp } from 'vue';
import { createWebHistory } from 'vue-router';
import {createI18n} from 'vue-i18n'
import createRouter from './router';
import store from './store';
import App from './App/index.vue';

// modules
import users from './modules/users';
import cabinet from './modules/cabinet';

import { registerModules } from './register-modules';

const app = createSSRApp(App);
const router = createRouter(createWebHistory());
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
const i18n = createI18n({
    locale: 'ru',
    messages
})
registerModules({
    users,
    cabinet,
}, router);

app.use(router).use(store).use(i18n);

router.isReady().then(() => {
    app.mount('#app');
});
