import { createSSRApp } from 'vue';
import { createWebHistory } from 'vue-router';
import createRouter from './router';
import store from './store';
import App from './App/index.vue';

// modules
import users from './modules/users';
import cabinet from './modules/cabinet';

import { registerModules } from './register-modules';

const app = createSSRApp(App);
const router = createRouter(createWebHistory());

registerModules({
    users,
    cabinet,
}, router);

app.use(router).use(store);

router.isReady().then(() => {
    app.mount('#app');
});
