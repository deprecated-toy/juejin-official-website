import {createRouter, createWebHistory} from "vue-router";
import Details from "../views/Details.vue";
import Index from "../views/Index.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Index
        },
        {
            path: "/details",
            component: Details
        }
    ],
})