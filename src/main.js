// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'

import '@/assets/icons'
// import svgIcon from '@/components/svgIcon'
// Vue.component('svg-icon', svgIcon)

Vue.use(Vant)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})

// Vue.prototype.$axios = axios


router.beforeEach((to, from, next) => {
    console.log(router, to, from)
    if (to.name === 'login') {
        console.log(to.name)
        next()
    } else {
        if (localStorage.getItem('tokenID')) {
            next()
        } else {
            console.log('请先登录')
            next({
                path: '/login'
            })
        }
    }


})