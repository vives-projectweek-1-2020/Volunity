<template>
    <header class="container justify-space-between">
        <div class="wrapper">
            <div class="flex">
                <div class="header-title noselection">
                    <div
                        class="header-title-img"
                        @click="$router.push('/')"
                    />
                </div>
                <t-button
                    v-if="$store.getters['auth/isAuthenticated']"
                    @click="logout()"
                >
                    logout
                </t-button>
            </div>
        </div>
    </header>
</template>

<script>
export default {

    methods: {

        logout() {
            this.$store.dispatch('auth/logout')
        },

    },

}
</script>


<style scoped>
header {
    height: 64px;
    width: 100%;
    display: flex;
    background-color: #B1FFF2;
    padding: 8px;
    align-items: center;
    position: fixed;
    z-index: 100;
    border-bottom: 1px solid #dadce0;
}
.header-title {
    display: flex;
    align-items: center;
    min-width: 200px;
}
.header-title-img {
    background-image: url('/img/volunity_long.png');
    background-repeat: no-repeat;
    height: 64px;
    width: 175px;
    background-position: center;
    background-size: 175px;
    cursor: pointer;
}
.flex {
    display: flex;
    justify-content: space-between;
}
</style>
