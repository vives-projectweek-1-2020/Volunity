<template>
    <div class="wrapper">
        <h2>Shopping List</h2>
        <t-datatable
            v-if="order.products"
            checkbox
            :headers="headers"
            :items="order.products"
        />
        <h3>Finished your list? Click "DONE"!</h3>

        <div style="display:flex;justify-content:flex-end;">
            <t-button
                style="margin-top:20px;"
                @click="$router.push('/')"
            >
                Done
            </t-button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    data() {
        return {
            headers: [
                {
                    text: 'Item',
                    value: 'item',
                },
                {
                    text: 'Brand',
                    value: 'brand',
                },
                {
                    text: 'Quantity',
                    value: 'quantity',
                    right: true,
                    width: '1px',
                },
                {
                    text: 'Max price',
                    value: 'maxprice',
                    right: true,
                    width: '1px',
                },
            ],
        }
    },

    computed: {
        ...mapGetters({
            order: 'api/order',
        }),
    },


    beforeMount() {
        this.$store.dispatch('api/order', this.$route.params.id)
    },

}
</script>
<style scoped>

h2 {
    margin:10px;
}

input {
    padding: 3px;
    margin: 0px 0px 0px 20px;
    display:inline-block;
    border-width: 2.5px;
    border-color: black;
    border-radius: 4px;
}

tr {
    margin: 15px 0px 15px 0px;
    padding: 20px;
}

td {
    margin:0px 0px 0px 50px;
    padding:10px 120px 5px 50px;
}

table {
    border-collapse: collapse;
    border-spacing: 40px;
}

h3 {
    margin: 30px;
    text-align:center;
}
</style>
