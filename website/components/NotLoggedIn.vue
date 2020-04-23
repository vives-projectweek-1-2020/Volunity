<template>
    <div>
        <SignupPopup
            v-if="popup.signup"
            :value.sync="popup.signup"
            class="popup"
        />
        <LoginPopup
            v-if="popup.login"
            :value.sync="popup.login"
            class="popup"
        />
        <div class="wrapper">
            <nav>
                <ul>
                    <li @click="scrollTo('concept')">
                        Concept
                    </li>
                    <li @click="scrollTo('about')">
                        About
                    </li>
                    <li @click="scrollTo('contact')">
                        Contact
                    </li>
                </ul>
            </nav>
            <div class="content">
                <p style="white-space: pre-line;">
                    Volunity is a platform to help the vulnerable in the community by doing the groceries for them.
                    This way the people at risk don't have to go outside and risk getting exposed to COVID-19 when going out for food.

                    Become a volunteer and sign-up NOW!
                </p>
                <div
                    class="signup-login"
                >
                    <t-button @click="signup()">
                        signup
                    </t-button>
                    <t-button @click="login()">
                        login
                    </t-button>
                </div>
            </div>
            <div id="concept">
                <h1>CONCEPT</h1>
                <hr>
                <p>On this platform there are 2 groups, the volunteers and the vulnerable at risks.</p>
                <p style="white-space: pre-line;">
                    Volunteers are people who want to go shopping in their spare time to help out the community.

                    The vulnerable at risk are people who are vulnerable to the current crisis or aren't as mobile as they used to be.
                    Because of COVID-19 this could be catastrophic for this high risk group.
                </p>
                <p style="white-space: pre-line;">
                    Volunity needs volunteers and we need any help we can get, so we can diminish the effects of this crisis together.
                    You can contribute to our purpose by volunteering, just click the sign-up button!
                    There you can make an account as volunteer or as vulnerable.
                    As vulnerable you can put a shopping request on our site for a volunteer to complete, this request can only consist out of a shopping list.
                </p>
            </div>
            <div id="about">
                <h1>ABOUT</h1>
                <hr>
                <p style="white-space: pre-line;">
                    We are students from Vives Brugge who want to tackle a problem that this crisis
                    brings upon us. We are developing this platform for our project week.
                </p>
            </div>
            <div id="contact">
                <h1>CONTACT</h1>
                <hr>
                <table>
                    <thead>
                        <td />
                        <td />
                    </thead>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td>info@volunity.be</td>
                    </tr>
                    <tr>
                        <td><strong>Address</strong></td>
                        <td>Spoorwegstraat 12</td>
                    </tr>
                    <tr>
                        <td />
                        <td>8000 Brugge</td>
                    </tr>
                    <tr>
                        <td />
                        <td>Campus KULeuven</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import SignupPopup from '~/components/popup/Signup'
import LoginPopup from '~/components/popup/Login'

export default {

    components: {
        LoginPopup,
        SignupPopup,
    },

    data() {
        return {
            popup: {
                signup: false,
                login: false,
            },
        }
    },

    methods: {

        scrollTo(id) {
            const elmnt = document.getElementById(id)
            elmnt.scrollIntoView({ behavior: 'smooth' })
        },

        signup() {
            this.popup.signup = true
            this.popup.login = false
        },

        login() {
            this.popup.signup = false
            this.popup.login = true
        },

    },

}
</script>

<style scoped>
.popups {
    position: fixed;
    /* background-color: rgba(0, 0, 0, .15); */
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
hr {
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid #eee;
}
h1 {
    margin-top: 20px;
}
.content {
    margin-top: 100px;
}
#concept {
    margin-top: 200px;
}
nav {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0px;
}
ul {
    list-style: none;
    display: flex;
    flex-direction: row;
}
ul li {
    margin-left: 20px;
    text-transform: uppercase;
    font-family: 'Product Sans Medium';
    cursor: pointer;
}
.signup-login {
    display: flex;
    margin-top: 20px;
}
.signup-login .t-btn {
    margin-left: 20px;
}
.signup-login .t-btn:first-child {
    margin-left: 0px;
}
</style>
