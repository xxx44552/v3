import { createApp } from 'vue';
import App from './App/index.vue';
import router from './router';
import store from './store';

// modules
import users from './modules/users';
import cabinet from './modules/cabinet';

import { registerModules } from './register-modules';

registerModules({
    users,
    cabinet,
});

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');

console.log(app);
