export default function ({ isHMR, app, store, route, req }) {
    if (isHMR) return

    if (req) {
        if (route.name) {
            let locale = null

            if (req.headers.cookie) {
                const cookies = req.headers.cookie.split('; ').map((stringCookie) => stringCookie.split('='))
                const cookie = cookies.find((cookie) => cookie[0] === 'locale')

                if (cookie) locale = cookie[1]
            }

            if (!locale) locale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2)

            store.commit('i18n/SET_LANG', locale)
            app.i18n.locale = store.state.i18n.locale
        }
    }
}
