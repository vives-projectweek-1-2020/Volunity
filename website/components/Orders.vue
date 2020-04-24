<template>
    <div>
        <h2 style="margin: 15px 0px 15px 0px">
            Select your order.
        </h2>
        <div class="grid">
            <div
                v-for="order in orders"
                :key="order.id"
                class="order"
                @click="$router.push({path: `/orders/${order.id}`})"
            >
                <p v-if="order.store_location != 'NULL'">
                    City: {{ order.store_location }}
                </p>
                <p>Shop: {{ order.store_name }}</p>
                <p>Date: {{ new Date(order.end_time).getDate() }}/{{ new Date(order.end_time).getMonth() }}/{{ new Date(order.end_time).getFullYear() }}</p>
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
}
@media only screen and (max-width: 400px) {
    .grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
.order {
    border: 3px solid black;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
}
.order p {
    margin: 10px 0px;
}
</style>
