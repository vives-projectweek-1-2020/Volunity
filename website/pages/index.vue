<template>
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
                Volunity is a platform to help the vulnerable people in the community by doing the shopping for them
                This way the people in need don't have to go outside and risk getting infected in het supermarket for example.

                Become a volunteer sign-up NOW!
            </p>
        </div>
        <div id="concept">
            <h1>CONCEPT</h1>
            <hr>
            <p>On this platform there are 2 groups, the volunteers and the vulnerable(clients)</p>
            <p style="white-space: pre-line;">
                Volunteers are people who are willing to go shopping.

                The clients are people who are not mobile/risicogroup to go shopping,
                because of COVID-19 it would be fatal for some of them if they got infected.
            </p>
            <p style="white-space: pre-line;">
                Volunity needs volunteers to go grocery shopping for the vulnerable.
                You can contribute to our purpose by volunteering, just click the sign-up button.
                There you can make an account as volunteer or as client.
                As client you can put a shopping request on our site for a volunteer to complete,
                this request can only consist out of a shopping list.
            </p>
        </div>
        <div id="about">
            <h1>ABOUT</h1>
            <hr>
            <p style="white-space: pre-line;">
                We are student from Vives Brugge who want to tackle a problem that this crisis
                brings upon us. We are developing this platform for our project week.
            </p>
        </div>
        <div id="contact">
            <h1>CONTACT</h1>
            <hr>
            <p style="margin-bottom:20px;">
                <strong>Email</strong>: info@volunity.be
            </p>
            <span><strong>Address</strong>: Spoorwegstraat 12</span><br>
            <span style="margin-left:70px;">8000 Brugge</span><br>
            <span style="margin-left:70px;">Campus KULeuven</span>
        </div>
    </div>
</template>

<script>
export default {

    methods: {

        scrollTo(id) {
            const elmnt = document.getElementById(id)
            elmnt.scrollIntoView({ behavior: 'smooth' })
        },

    },

}
</script>

<style scoped>
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
</style>
