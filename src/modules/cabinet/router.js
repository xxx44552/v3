const userCard = () => import('./views/UserCard.vue');

const moduleRoute = {
    path: '/user',
    component: () => import('./Module.vue'),
    children: [
        {
            path: '/',
            component: userCard
        },
    ]
};

export default router => {
    router.addRoute(moduleRoute);
};
