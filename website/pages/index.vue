<template>
    <div class="wrapper">
        <Orders />
        <t-button
            style="margin-top: 20px;"
            @click="$router.push('/orders/new')"
        >
            create new
        </t-button>
    </div>
</template>

<script>
import Orders from '~/components/Orders'

export default {

    components: {
        Orders,
    },

}
</script>
