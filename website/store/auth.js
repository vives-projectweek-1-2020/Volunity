import axios from 'axios'

const url = 'https://api.volunity.be'

export const state = () => ({

    isAuthenticated: false,
    authData: {},

})

export const getters = {

    isAuthenticated(state) {
        return state.isAuthenticated
    },

    authData(state) {
        return state.authData
    },

}

export const mutations = {

    setAuthenticated(state, value) {
        state.isAuthenticated = value
        if (!value) state.authData = {}
    },

    setAuthData(state, data) {
        state.authData = data
    },

}

export const actions = {

    async signup(context, user) {
        return new Promise((resolve, reject) => {
            axios.post(`${url}/signup`, user).then((response) => {
                if (!response.data.key) return reject(response.data)
                const maxAge = 60 * 60 * 24 * 7
                const cookie = `_volunity_auth=${response.data.key};Max-Age=${maxAge};Domain=.${window.location.hostname.replace('www.', '')};`

                document.cookie = cookie
                resolve(response.data.key)
                setTimeout(() => window.location.reload(), 100)
            })
        })
    },

    async login(context, user) {
        return new Promise((resolve, reject) => {
            axios.post(`${url}/login`, user).then((response) => {
                if (!response.data.key) return reject(response.data)

                const maxAge = 60 * 60 * 24 * 7
                const cookie = `_volunity_auth=${response.data.key};Max-Age=${maxAge};Domain=.${window.location.hostname.replace('www.', '')};`

                document.cookie = cookie
                resolve(response.data.key)
                setTimeout(() => window.location.reload(), 100)
            }).catch((reason) => {
                reject(reason)
            })
        })
    },

    async logout(context) {
        document.cookie.split(';').forEach((c) => { document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`) })

        context.commit('setAuthenticated', false)
    },

}
