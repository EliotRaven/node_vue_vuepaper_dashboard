import Vue from 'vue'
import Vuex from 'vuex'
import API from '../helpers/api'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        auth: JSON.parse(localStorage.getItem('auth')) || false
    },
    actions: {
        login({commit}, data) {
            API.call('post', 'auth/login', null, data).then(res => {
                JSON.stringify(localStorage.setItem('auth', res.data.auth))
                commit('login', res.data.auth)
            })
        },
        logout({commit}){
            localStorage.removeItem('auth', {path: '/'})
            commit('logout')
        }
    },
    mutations: {
        login(state, data){
            state.auth = data
        },
        logout(state) {
            state.auth = false
        }
    },
    getters: {},
    strict: debug,
})