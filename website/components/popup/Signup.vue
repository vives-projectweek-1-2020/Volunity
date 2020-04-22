<template>
    <t-dialog
        :value="value"
        closable
        @update:value="close"
    >
        <t-card>
            <t-card-title>SIGN UP</t-card-title>
            <t-card-content>
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
                            <td><input type="password"></td>
                        </tr>
                        <tr>
                            <td>Street</td>
                            <td><input type="text"></td>
                            <td style="margin:40px">
                                N°
                            </td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>Postal Codes</td>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <td>Please choose who you are</td>
                            <td> <select v-model="type">
                            <option>Volunteer</option>
                            <option>Vulnerable</option>
                    </select></td>
                        </tr>
                    </tbody>
                    <t-checkbox
                        v-model="accept"
                        label="I accept the policy"
                    />
                </table>
            </t-card-content>
            <t-card-buttons>
                <t-button @click="close">
                    Back
                </t-button>
                <t-button
                    outline
                    @click="add"
                >
                    Sign Up
                </t-button>
            </t-card-buttons>
        </t-card>
    </t-dialog>
</template>

<script>
export default {

    props: {

        value: {
            type: Boolean,
            default: false,
        },

    },

    data() {
        return {
            accept: false,
            type: "",
        }
    },

    methods: {

        add() {
            this.close()
        },

        close() {
            this.$emit('update:value', false)
        },

    },

}
</script>

<style scoped>
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
