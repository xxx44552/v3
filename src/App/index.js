import { useMeta } from 'vue-meta';

export default {
    name: 'App',
    serverPrefetch() {
        console.log('serverPrefetch.....')
    },
    setup() {
        useMeta({
            title: 'Main page',
            htmlAttrs: { lang: 'en' },
            description: 'Main page description'
        })
    },
};
