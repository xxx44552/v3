const moduleRoute = {
    path: '/users',
    component: () => import('./Module.vue'),
    children: [
        {
            path: '',
            component: () => import('./views/Users/index.vue')
        },
        {
            path: ':user',
            component: () => import('./views/User/index.vue')
        }
    ]
};

export default router => {
    router.addRoute(moduleRoute);
};
