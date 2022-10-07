/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import VueRouter from "vue-router";

window.Vue = require("vue");

window.Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        component: require("./components/pages/HomePage.vue").default,
    },
    {
        path: "/about",
        component: require("./components/pages/AboutPage.vue").default,
    },
    {
        path: "/contacts",
        component: require("./components/pages/ContactsPage.vue").default,
    },
    {
        path: "/posts/:id",
        component: require("./components/pages/PostDetailPage.vue").default,
        name: "post-detail",
    },
];

const router = new VueRouter({
    routes: routes,
    mode: "history",
});

import App from "./components/App.vue";

const root = new Vue({
    el: "#root",
    router,
    render: (h) => h(App),
});
