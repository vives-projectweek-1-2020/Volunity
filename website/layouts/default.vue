<template>
    <div class="app theme--green">
        <div v-if="loaded">
            <Header />

            <div class="app-content">
                <NotLoggedIn v-if="!$store.getters['auth/isAuthenticated']" />
                <nuxt v-else />
            </div>

            <Footer />
        </div>

        <div v-else>
            <span>loading...</span>
        </div>
    </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import NotLoggedIn from '~/components/NotLoggedIn'

export default {

    components: {
        Header,
        Footer,
        NotLoggedIn,
    },

    data() {
        return {
            loaded: false,
        }
    },

    mounted() {
        this.loaded = true
    },

}
</script>

<style>
.app-content {
    position: absolute;
    top: 64px;
    width: 100%;
    height: calc(100% - 64px - 32px);
    padding-bottom: 16px;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
