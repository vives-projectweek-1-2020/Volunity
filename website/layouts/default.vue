<template>
    <div class="app">
        <div v-if="loaded">
            <Header />

            <div class="app-content">
                <nuxt />
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

export default {

    components: {
        Header,
        Footer,
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
    height: calc(100% - 64px);
    padding-bottom: 16px;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
