<template>
    <div class = "wrapper">
        <h1>LOG IN</h1>
        <table>
        <tr>
            <td>E-mail</td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td><button type="button">Login</button></td>
        </tr>   
        </table>
    </div>
</template>






<style scoped>

.container {
    margin: 20px 10px 10px 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
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
    padding:5px;
}

table {
    border-collapse: collapse;
    border-spacing: 40px;
}

</style> 