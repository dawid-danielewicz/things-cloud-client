import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from "./pages/IndexPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ThingsPage from "./pages/ThingsPage";
import ThingDetails from "./pages/ThingDetails";
import CreateThing from "./pages/CreateThing";
import EditThing from "./pages/EditThing";

import store from "./store";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: IndexPage },
        { path: '/register', component: RegisterPage, meta: { noAuth: true } },
        { path: '/login', component: LoginPage, meta: { noAuth: true } },
        { path: '/things', component: ThingsPage, meta: { auth: true } },
        { path: '/things/:id', component: ThingDetails, meta: { auth: true } },
        { path: '/things/create', component: CreateThing, meta: { auth: true } },
        { path: '/things/:id/edit', component: EditThing, meta: { auth: true } },
    ]
})

router.beforeEach(function(to, _ ,next) {
    if (to.meta.auth && !store.state.auth.token) {
        next('/login')
    } else if (to.meta.noAuth && store.state.auth.token) {
        next('/')
    } else {
        next()
    }
})

export default router