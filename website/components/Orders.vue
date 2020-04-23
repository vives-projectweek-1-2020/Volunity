<template>
    <div>
        <h2 style="margin: 15px 0px 15px 0px">
            Select your order.
        </h2>
        <div class="grid">
            <div
                v-for="order in orders"
                :key="order.id"
                class="box"
            >
                <p>City: {{ order.store_location }}</p>
                <p>Shop: {{ order.store_name }}</p>
                <p>Number of items:</p>
                <p>MaxDeliveryDate: {{ order.end_time }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    computed: {
        ...mapGetters({
            orders: 'api/orders',
        }),
    },

    beforeMount() {
        this.$store.dispatch('api/orders')
    },

}
</script>

<style scoped>

.grid {
    display:grid;
    grid-gap: 10px;
    grid-template-columns: 200px 200px 200px 200px;
    border-width: 3px;
    border-color: black;
}

.content {
    position: absolute;
    height:80%;
    width:90%;
    padding: 10% 5%;
}

.box {
    border:4px solid black;
    border-radius:5px;
    padding:10px;
}

p {
    margin: 10px 10px;
}
</style>
