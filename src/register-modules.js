import store from './store';

const registerModule = (name, module, router) => {
    if (module.store?.global) {
        store.registerModule(name, module.store);
    }
    if (module.router) {
        module.router(router);
    }
};

export const registerModules = (modules, router) => {
    // eslint-disable-next-line max-len
    Object.keys(modules).forEach((moduleKey) => registerModule(moduleKey, modules[moduleKey], router));
};
