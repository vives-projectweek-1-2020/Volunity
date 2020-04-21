<template>
    <div class = "wrapper">
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>E-Mail</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>Street</td>
                    <td><input type="text"></td>
                    <td style="margin:40px">N°</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>City</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>Postal Code</td>
                    <td><input type="text"></td>
                </tr>
            </tbody>
        <div class="container">
            <input type="checkbox">
            <p style="margin: 0px 0px 0px 20px">I accept the policy</p>
            <button style="margin: 0px 0px 0px 20px" type="button">JOIN Volunity</button>
        </div>
            
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

.join {
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
