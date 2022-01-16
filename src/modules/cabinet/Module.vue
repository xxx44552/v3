<template>
    <router-view/>
</template>

<script>
import store from './store';

export default {
    name: 'Cabinet',
    created() {
        this.$store.registerModule('cabinet', store);
    }
};
</script>
