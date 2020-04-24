<template>
    <div class="wrapper">
        <h1>
            This is your order to complete
        </h1>
        <div class="maps">
            <p>Please go to this shop <strong>{{ order.store_name }}</strong></p>
            <div>
                <h3>Rating : ok</h3>
            </div>
        </div>
        <div class="deliveryadress">
            <p>Delivery adress: <strong>{{ order.store_location == 'NULL' ? order.store_name : order.store_location }}</strong></p>
        </div>
        <div class="deliverydate">
            <p>
                Please complete the order within this time period:
                <strong>{{ new Date(order.end_time).getDate() }}/{{ new Date(order.end_time).getMonth() }}/{{ new Date(order.end_time).getFullYear() }}</strong>
                <strong>- {{ new Date(order.end_time).getDate() }}/{{ new Date(order.end_time).getMonth() }}/{{ new Date(order.end_time).getFullYear() }}</strong>
            </p>
        </div>
        <div class="shoppinglist">
            <h2>Shopping list :</h2>
        </div>
        <t-datatable
            v-if="order.products"
            checkbox
            :headers="headers"
            :items="order.products"
        />
        <div style="display:flex;justify-content:flex-end;">
            <t-button
                style="margin-top:20px;"
                @click="$router.push({name: 'orders-id-shoppinglist', params: $route.params})"
            >
                Accept order
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

h1 {
    margin-top: 20px;

}

.maps{
    align-items: center;
}
.maps h2 {
    margin-left: 20px;
}
.maps h3{
    margin-left: 200px;
    padding: 20px;
    border: 3px solid black;
}

.othershop input{
    border: 2px solid grey;

}
.maps{
    display: flex;
    justify-content: space-between;
}
input,select,button{
    font-size: 15px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 5px;
}
button:hover{
    background: green;
}
.shoppinglist {
    margin-top: 50px;
    margin-bottom: 10px;
}
.deliveryadress{
    margin-top: 30px;
}
.van{
    margin-right: 160px;
    margin-left: 15px;
}

</style>
