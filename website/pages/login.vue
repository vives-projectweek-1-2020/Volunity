<template>
    <div class="wrapper">
        <br>
        <h1>
        Create your shopping list here
        </h1>
        <div class="maps">
            <br>
            <h4>
                Look for the adress of the shop you want to use.
            </h4>
            <div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=supermarkt&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.emojilib.com/jcpenney-coupons/"></a></div><style>.mapouter{position:relative;text-align:right;height:400px;width:400px;}.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:400px;}</style></div>
        </div>
<br>
   <div class="deliverydate" > 
       <h3>Choose the delivery period : </h3>
       <span class="van">van</span><span class="tot">tot</span>
       <br>
       <input id=firstday type="date" data-date="" data-date-format="DD MMMM YYYY" value="2015-08-09">
       <input id=lastday type="date" data-date="" data-date-format="DD MMMM YYYY" value="2015-08-09">
   </div  >
<div class="shoplist" v-for="item in items" :key="item.id">
<input v-model="item.brand" placeholder="brand">
<input v-model="item.name" placeholder="item">
<input v-model="item.quantity" placeholder="quantity">
<input v-model="item.maxprice" placeholder="maxprice">
<select v-model="item.selected">
  <option disabled value="">Please choose one</option>
  <option>pieces</option>
  <option>liters</option>
  <option>kilogram</option>
  <option>gram</option>
</select>
</div>
<button @click="add()" >
    Add item
</button>

<button>Submit order</button>
    </div>
</template>
<script>

export default {
data()
{return {
  selected: "",
  items:[
      {brand:"", name:"",quantity:"",maxprice:"",id:"1"}
  ]
  }},

    methods: { 
        add(){
this.items.push(    {brand:"", name:"",quantity:"",maxprice:"",id:"2"})
        }

    },

}
</script>

<style scoped>

h1 {
    margin-top: 20px;
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
