import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: '',
            redirect: '/home',
            component: layout,
            children: [{
                    path: 'home',
                    name: 'home',
                    component: () => import('@/page/home')
                },
                {
                    path: '/me',
                    name: 'me',
                    component: () => import('@/page/me/index')
                },
                {
                    path: '/recreation',
                    name: 'recreation',
                    component: () => import('@/page/recreation/recreation')
                },
            ]
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('@/page/mainModules/search')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/page/login/index')
        }

    ]
})