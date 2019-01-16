import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import {auth} from "../helpers/auth";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.checkAuth()) {
        next({ path: '/auth/login', query: { redirect: to.fullPath }});
    } else if (to.matched.some(record => record.meta.requiresNoAuth) && auth.checkAuth()) {
        next({ path: '/', query: { redirect: to.fullPath }})
    } else {
        next();
    }
});

export default router;
