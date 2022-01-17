import * as router from 'vue-router';

const { createRouter } = router;
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home/index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About/index.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404/index.vue'),
    },
];

export default function (history) {
    return createRouter({
        history,
        routes
    });
}
