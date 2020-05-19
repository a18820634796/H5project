import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        message: '大家好，我是stroe的message'
    },
    mutations: {
        setMessage(state, data) {
            state.message = data
        }
    },
    actions: {
        // acSetMessage({ commit }) {
        //     commit('setMessage', value)
        // }
        acSetMessage({ commit }, data) {
            commit('setMessage', data)
        }
    }
})
export default store