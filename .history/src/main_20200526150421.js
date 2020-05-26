// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import api from './api'
import {
    ajax
} from './utils/ajax'
Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$api = api
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
Vue.prototype.$ajax = ajax