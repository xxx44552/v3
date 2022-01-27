<template>
    <div id="nav">
        <span><div>{{ $t("message.hello") }}</div></span>
        {{$t('test')}}
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/users">users</router-link> |
        <router-link to="/cabinet">cabinet</router-link>
    </div>
    <router-view/>
</template>
<script src="./index.js"></script>
<style src="./style.sass" lang="sass"></style>
