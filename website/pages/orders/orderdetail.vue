<template>
    <div class="wrapper">
        <h1>
            This is your order to complete
        </h1>
        <br>
        <div class="maps">  
            <h2>Please go to this shop</h2>
            <div>
                <input
                 v-model="shoptype"
                 placeholder="shoptype"
                 >  
            </div>
            <div>
                <h3>Rating : ok</h3>
            </div>
        </div>
        <h5>if the shop is "others" please go to this adress</h5>
        <div class="othershop">
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
        <div class="deliveryadress">
            <h2>Delivery adress!</h2>
            <div class="adress">
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
        </div>
        <br>
        <div class="deliverydate">
            <h3>Please complete the order within this time period : </h3>
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
        <div class="shoppinglist">
            <h2>Shopping list :</h2>
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
        </div>
        <button>Accept order</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            selected: '',
            items: [
                {brand: '', name: '', quantity: '', maxprice: '', id: '1'},
            ],
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
