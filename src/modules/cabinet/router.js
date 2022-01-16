const moduleRoute = {
    path: '/cabinet',
    component: () => import('./Module.vue'),
    children: [
        {
            path: '',
            component: () => import('./views/Cabinet/index.vue')
        },
    ]
};

export default router => {
    router.addRoute(moduleRoute);
};
