import Home from "@/pages/home.vue";
import Order from "@/pages/order.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/orders',
        component:Order
    }
]



const router = createRouter({
    routes,
    history:createWebHistory()
})
export default router