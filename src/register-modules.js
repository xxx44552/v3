import router from './router';
import store from './store';

const registerModule = (name, module) => {
    if (module.store?.global) {
        store.registerModule(name, module.store);
    }
    if (module.router) {
        module.router(router);
    }
};

export const registerModules = modules => {
    Object.keys(modules).forEach((moduleKey) => registerModule(moduleKey, modules[moduleKey]));
};
