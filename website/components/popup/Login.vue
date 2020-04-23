<template>
    <t-dialog
        :value="value"
        closable
        @update:value="close"
    >
        <t-card>
            <t-card-title>LOG IN</t-card-title>
            <t-card-content>
                <table>
                    <tr>
                        <td>E-mail</td>
                        <td>
                            <input
                                v-model="email"
                                type="text"
                            >
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>

                        <td>
                            <input
                                v-model="password"
                                type="password"
                            >
                        </td>
                    </tr>
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
                    Login
                </t-button>
            </t-card-buttons>
        </t-card>
    </t-dialog>
</template>

<script>
/* eslint-disable no-console */

export default {

    props: {

        value: {
            type: Boolean,
            default: false,
        },

    },

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {

        add() {
            this.$store.dispatch('auth/login', {
                email: this.email,
                password: this.password,
            }).then((data) => {
                console.log(data)
                this.close()
            }).catch((reason) => {
                console.log(reason)
                console.log('User Not Found')
            })
        },

        close() {
            this.$emit('update:value', false)
        },

    },

}
</script>


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
