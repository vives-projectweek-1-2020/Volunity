/* eslint-disable no-console */
const os = require('os')

const ENV = {
    NODE_ENV: (process.env.NODE_ENV || 'production').toLocaleLowerCase(),
    BUILD_VERSION: process.env.BUILD_VERSION || os.hostname(),
    AUTH_SECRET: process.env.AUTH_SECRET || 'secret',
    VERSION: process.env.npm_package_version,
}

const settings = {
    mode: 'spa',
    server: {
        port: 9000,
        host: '0.0.0.0',
    },
    /*
    ** Headers of the page
    */
    head: {
        title: 'Volunity',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round' },
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        { src: '~assets/css/main.css' },
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/i18n',
        '~/plugins/components',
    ],
    router: {
        middleware: ['i18n'],
    },
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/netlify-files',
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        withCredentials: true,
    },
    proxy: {
    },
    /*
    ** Build configuration
    */
    build: {
    /*
    ** You can extend webpack config here
    */
        // https://github.com/nuxt/nuxt.js/issues/3828 safari hrm infinite loop
        filenames: {
            app: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
            chunk: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
        },
        extend() {
        },
    },

    env: {
        NODE_ENV: ENV.NODE_ENV,
        BUILD_VERSION: ENV.BUILD_VERSION,
        AUTH_SECRET: ENV.AUTH_SECRET,
        VERSION: ENV.VERSION,
    },

    generate: {
        fallback: true,
    },
}

console.log('Environment:')
console.log(`   ${ENV.NODE_ENV}`)
console.log('Version:')
console.log(`   ${ENV.BUILD_VERSION} ${ENV.VERSION}`)

module.exports = Object.assign(
    settings,
)
