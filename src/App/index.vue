<template>
    <metainfo>
        <template v-slot:title="{ content }">{{ content  }}</template>
    </metainfo>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/users">users</router-link> |
        <router-link to="/cabinet">cabinet</router-link>
    </div>
    <router-view/>
</template>
<script src="./index.js"></script>
<style src="./style.sass" lang="sass"></style>
