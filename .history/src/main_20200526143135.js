// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import api from './api'
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
Vue.prototype.$ajax = ajax()

function ajax(data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        var paramsUrl = "";
        if (
            JSON.stringify(data.params) !== "{}" ||
            data.params !== undefined
        ) {
            for (let index in data.params) {
                paramsUrl += index + "=" + data.params[index] + "&";
            }
            paramsUrl = paramsUrl.slice(0, paramsUrl.length - 1);
            data.url = data.url + "?" + paramsUrl;
        }

        xhr.open(data.method, data.url, true);
        xhr.send(data.params);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText);
                } else {
                    reject("出错啦" + xhr.status);
                }
            }
        };
    });
}