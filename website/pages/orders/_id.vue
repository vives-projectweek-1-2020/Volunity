<template>
    <div class="wrapper">
        <h1>
            This is your order to complete
        </h1>
        <br>
        <div class="maps">
            <h2>Please go to this shop</h2>
            <p>{{ order.store_name }}</p>
            <div>
                <h3>Rating : ok</h3>
            </div>
        </div>
        <div class="deliveryadress">
            <h2>Delivery adress!</h2>
            <div class="adress">
                {{ order.store_location || order.store_name }}
            </div>
        </div>
        <br>
        <div class="deliverydate">
            <h3>Please complete the order within this time period : </h3>
            <span class="van">From</span><span class="tot">Till</span>
            <br>
            <input
                id="firstday"
                v-model="order.start_time"
                type="date"
                data-date=""
                data-date-format="DD MMMM YYYY"
            >
            <input
                id="lastday"
                v-model="order.end_time"
                type="date"
                data-date=""
                data-date-format="DD MMMM YYYY"
            >
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
        <button>Accept order</button>
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
    margin: 50px;

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
.deliverydate,.shoppinglist,.shoplist{
    margin: 10px;
}
.deliveryadress{
    margin-top: 30px;
}
.van{
    margin-right: 160px;
    margin-left: 15px;
}

</style>
