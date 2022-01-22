import { useMeta } from 'vue-meta';

export default {
    name: 'Users',
    setup() {
        useMeta({
            title: 'Users page',
            htmlAttrs: { lang: 'en' },
            description: 'Users page description'
        })
    },
};
