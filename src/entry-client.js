import { createSSRApp } from 'vue';
import { createWebHistory } from 'vue-router';
import createRouter from './router';
import App from './App/index.vue';

const app = createSSRApp(App);
const router = createRouter(createWebHistory());

app.use(router);

router.isReady().then(() => {
    app.mount('#app');
});
