<template>
    <div class="wrapper">
        <br>
        <h1>
            Create your shopping list here
        </h1>
        <br>
        <div class="maps">
            <h2>Choose your shop : </h2>
            <select v-model="storename">
                <option
                    disabled
                    value=""
                >
                    Please choose the shop
                </option>
                <option>Colruyt</option>
                <option>Carrefour</option>
                <option>Delhaize</option>
                <option>Aldi</option>
                <option>Lidl</option>
                <option>Spar</option>
                <option>other</option>
            </select>
        </div>
        <div
            v-if="storename == 'other'"
            class="othershop"
        >
            <input
                v-model="convert.storename"
                placeholder="Shopname"
            >
            <input
                v-model="convert.streetname"
                placeholder="Streetname"
            >
            <input
                v-model="convert.streetnumber"
                placeholder="Nr"
                type="number"
            >
            <input
                v-model="convert.city"
                placeholder="City"
            >
            <input
                v-model="convert.postalcode"
                placeholder="Postal Code"
                type="number"
            >
        </div>
        <br>
        <div class="deliverydate">
            <h3>Choose the delivery period : </h3>
            <span class="van">From</span><span class="tot">Till</span>
            <br>
            <input
                id="firstday"
                v-model="order.starttime"
                type="date"
                data-date=""
                placeholder="dd/mm/yyyy"
                data-date-format="DD MMMM YYYY"
                value="2015-08-09"
            >
            <input
                id="lastday"
                v-model="order.endtime"
                type="date"
                data-date=""
                placeholder="dd/mm/yyyy"
                data-date-format="DD MMMM YYYY"
                value="2015-08-09"
            >
        </div>
        <div
            v-for="item in items"
            :key="item.id"
            class="shoplist"
        >
            <input
                v-model="item.item"
                placeholder="item"
            >
            <input
                v-model="item.brand"
                placeholder="brand"
            >
            <input
                v-model="item.quantity"
                placeholder="quantity"
                type="number"
            >
            <input
                v-model="item.maxprice"
                placeholder="maxprice"
            >
            <select v-model="item.selected">
                <option
                    disabled
                    value=""
                >
                    Please choose one
                </option>
                <option>pieces</option>
                <option>liters</option>
                <option>kilogram</option>
                <option>gram</option>
            </select>
            <div class="spacer" />
            <t-button
                outline
                @click="deleteitem(item.id)"
            >
                delete
            </t-button>
        </div>
        <div style="display:flex;justify-content:flex-end;">
            <t-button @click="add()">
                Add Item
            </t-button>
            <t-button
                style="margin-left:20px;"
                @click="submit()"
            >
                Submit Order
            </t-button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            storename: '',
            convert: {},
            order: {
                products: [],
            },
            items: [
                {brand: '', name: '', quantity: 1, maxprice: '', id: 1},
            ],
        }
    },

    methods: {

        submit() {
            if (this.storename === 'other') {
                this.order.storename = this.convert.storename
                this.order.storelocation = `${this.convert.streetname} ${this.convert.streetnumber}, ${this.convert.city} ${this.convert.postalcode}`
            } else {
                this.order.storename = this.storename
                this.order.storelocation = 'NULL'
            }

            this.order.minprice = 0
            this.order.maxprice = 0

            this.items.forEach((product) => {
                this.order.products.push(product)
            })

            this.$store.dispatch('api/addOrder', this.order).then((result) => {
                this.$router.push('/')
            })
        },

        add() {
            this.items.push({brand: '', name: '', quantity: 1, maxprice: '', id: Math.random()})
        },

        deleteitem(id) {
            this.items = this.items.filter((item) => {
                return item.id !== id
            })
        },

    },

}
</script>

<style scoped>


h1 {
    margin-top: 20px;

}

.maps{
    display: flex;
    justify-content: space-between;
}
.maps{
    display: flex;
}
input,select,button{
    font-size: 15px;
}
button:hover{
    background: green;
}
button{
    margin: 10px;
}
.deliverydate{
    margin-top: 10px;
}
.shoplist{
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}
.shoplist input {
    margin-right: 10px;
}
.van{
    margin-right: 160px;
    margin-left: 15px;
}

</style>
