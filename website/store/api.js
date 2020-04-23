import axios from 'axios'

const url = 'https://api.volunity.be'

export const state = () => ({
    orders: [],
    order: {},
})

export const mutations = {

    setOders(store, orders) {
        store.orders = orders
    },

    setOrder(store, order) {
        store.order = order
    },

}

export const getters = {

    orders(store) {
        return store.orders
    },

}

export const actions = {

    async orders(context) {
        return new Promise((resolve, reject) => {
            axios.get(`${url}/orders`, {withCredentials: true}).then((res) => {
                if (res.data.success) {
                    context.commit('setOrders', res.data.results)
                    resolve(res.data)
                } else reject(res.data)
            })
        })
    },

    async order(context, orderId) {
        return new Promise((resolve, reject) => {
            axios.get(`${url}/orders/${orderId}`, {withCredentials: true}).then((res) => {
                if (res.data.success) {
                    context.commit('setOrder', res.data.results[0])
                    resolve(res.data)
                } else reject(res.data)
            }).catch((reason) => {
                reject(reason)
            })
        })
    },

}
