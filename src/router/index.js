import {createRouter,createWebHashHistory} from "vue-router";

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:() => import('../views/home/index.vue')
        },
        {
            path:'/home',
            component:() => import('../views/home/index.vue')
        },
        {
            path:'/cart',
            component:() => import('../views/cart/index.vue')
        },
        {
            path:'/mine',
            component:() => import('../views/mine/index.vue')
        },
        {
            path:'/order',
            component:() => import('../views/order/index.vue')
        },
        {
            path:'/store',
            component:() => import('../views/store/index.vue')
        }
    ]
})

export default router
