<template>
    <div class="wrapper">
        <h2>Shopping List</h2>
        <table>
            <tr>
                <td><u>Check?</u></td>
                <td><u>Brand</u></td>
                <td><u>Item</u></td>
                <td><u>Quantity/Weight</u></td>
                <td><u>Max Price/Item</u></td>
            </tr>
            <tr
                v-for="item in items"
                :key="item.id"
            >
                <td><input type="checkbox"></td>
                <td><input v-model="item.brand"></td>
                <td><input v-model="item.name"></td>
                <td><input v-model="item.quantity"></td>
                <td><input v-model="item.maxprice"></td>
            </tr>
        </table>
        <h3>Finished your list? Click "DONE"!</h3>
        <t-button
            style="float:right; margin:10px;"
            @click="done"
        >
            DONE
        </t-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
        }
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
