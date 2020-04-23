<template>
    <div class="wrapper">
        <p>logged in content page here</p>
        <p>{{ $store.getters['auth/authData'] }}</p>
        <Volunteer />
        <t-button
            style="margin-top: 20px;"
            @click="$router.push('/orders/submit')"
        >
            create new
        </t-button>
    </div>
</template>

<script>
import Volunteer from '~/components/Volunteer'

export default {

    components: {
        Volunteer,
    },

}
</script>
