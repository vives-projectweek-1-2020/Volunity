<template>
    <div class="wrapper">
        <br>
        <h1>
            Create your shopping list here
        </h1>
        <br>
        <div class="maps">
            <h2>Choose your shop : </h2>
                <select v-model="shop">
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
        <div class="othershop" v-if="shop == 'other'">
        <h5>Only fill this is if you have chosen for "others"</h5>
            <input
                v-model="shopname"
                placeholder="Shopname"
            >
            <input
                v-model="streetname"
                placeholder="streetname"
            >
            <input
                v-model="NR"
                placeholder="nr"
            >
            <input
                v-model="city"
                placeholder="city"
            >
            <input
                v-model="postalcode"
                placeholder="Postal Code"
            >
</div>
        <br>
        <div class="deliverydate">
            <h3>Choose the delivery period : </h3>
            <span class="van">From</span><span class="tot">Till</span>
            <br>
            <input
                id="firstday"
                type="date"
                data-date=""
                data-date-format="DD MMMM YYYY"
                value="2015-08-09"
            >
            <input
                id="lastday"
                type="date"
                data-date=""
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
                v-model="item.brand"
                placeholder="brand"
            >
            <input
                v-model="item.name"
                placeholder="item"
            >
            <input
                v-model="item.quantity"
                placeholder="quantity"
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
            <button @click="deleteitem(item.id)">delete</button>
        </div>
        <button @click="add()">
            Add item
        </button>

        <button>Submit order</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            selected: '',shop: '',
            items: [
                {brand: '', name: '', quantity: '', maxprice: '', id: '1'},
            ],
        }
    },

    methods: {
        add() {
            this.items.push({brand: '', name: '', quantity: '', maxprice: '', id: Math.random()})
        },
        deleteitem(id){
            this.items=this.items.filter(item=>{
                return item.id!=id
            })
        }

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
button{
    margin: 10px;
}
.deliverydate{
    margin: 10px;
}
.shoplist{
    margin: 10px;
}
.van{
    margin-right: 160px;
    margin-left: 15px;
}

</style>
