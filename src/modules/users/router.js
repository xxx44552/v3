const moduleRoute = {
    path: '/users',
    component: () => import('./Module.vue'),
    children: [
        {
            path: '',
            component: () => import('./views/Users.vue')
        },
        {
            path: ':user',
            component: () => import('./views/User.vue')
        }
    ]
};

export default router => {
    router.addRoute(moduleRoute);
};
