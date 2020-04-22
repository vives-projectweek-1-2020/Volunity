import axios from 'axios'
import jwt from 'jsonwebtoken'

export default function ({ store, route, redirect }) {
    const cookies = document.cookie.split('; ').map((stringCookie) => stringCookie.split('='))
    const cookie = cookies.find((cookie) => cookie[0] === '_volunity_auth')
    const nonAuthPages = ['index']
    let isAuth = false

    if (cookie) {
        isAuth = jwt.verify(cookie[1], process.env.AUTH_SECRET || 'secret', (err, decoded) => {
            if (err) return false
            store.commit('auth/setAuthenticated', true)
            store.commit('auth/setAuthData', decoded)
            axios.defaults.withCredentials = true
            axios.defaults.headers = {
                Authorization: `Bearer ${cookie[1]}`,
            }
            return true
        })
    }
    if (!nonAuthPages.includes(route.name) && !isAuth) {
        redirect('/')
    }
}
