<template>
    <div class="wrapper">
        <br>
        <h3>
        Create your shopping list here
        </h3>
        <div class="maps">
            <br>
            <p>
                Look for the adress of the shop you want to use.
            </p>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=supermarkt&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.emojilib.com/jcpenney-coupons/"></a></div><style>.mapouter{position:relative;text-align:right;height:400px;width:400px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:400px;}</style></div>
        </div>
<br>

<input v-model="brand" placeholder="brand">
<input v-model="item" placeholder="item">
<input v-model="quantity" placeholder="quantity">
<input v-model="maxprice" placeholder="maxprice">
<select v-model="selected">
  <option disabled value="">Please choose one</option>
  <option>pieces</option>
  <option>liters</option>
  <option>kilogram</option>
  <option>gram</option>
</select>
<span>Selected: {{ selected }}</span>

<button @click="login()" >
    submit
</button>

    </div>
</template>


<script>

export default {
data()
{return {
    brand: "",item: "",selected: "",quantity: "",maxprice: "",}},

    methods: { 
        login(){
            console.log(this.brand)
            console.log(this.item)
            console.log(this.selected)
            console.log(this.maxprice)
            console.log(this.quantity)
            }

    },

}
</script>
