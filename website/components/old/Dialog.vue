<template>
    <div
        v-if="value"
        class="t-dialog"
        :class="{ 'closing': closing }"
    >
        <div
            class="t-dialog-overlay"
            @click="close"
        />
        <div
            class="t-dialog-mondal"
            :class="{ 'closable-animation': closableAnimation }"
        >
            <slot />
        </div>
    </div>
</template>

<script>
export default {

    props: {
        value: Boolean,
        closable: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    data() {
        return {
            closableAnimation: false,
            closing: false,
        }
    },

    watch: {

        value(value) {
            if (value) {
                document.addEventListener('keyup', this.onEscape)
                this.closing = false
            } else document.removeEventListener('keyup', this.onEscape)
        },

    },

    mounted() {
        document.addEventListener('keyup', this.onEscape)
    },

    methods: {

        close() {
            if (this.closable) {
                this.closing = true
                this.$emit('update:value', false)
            } else {
                this.closableAnimation = true
                setTimeout(() => { this.closableAnimation = false }, 100)
            }
        },

        onEscape(event) {
            if (event.keyCode === 27) this.close()
        },

    },

}
</script>


<style scoped>
.t-dialog {
    transition: opacity 200ms;
}
.t-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #212121;
    opacity: .45;
    z-index: 300;
    animation: 350ms appearOverlay;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.t-dialog-mondal {
    width: 720px;
    max-width: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 400;
    animation: 250ms appear;
}
@keyframes appear {
    from {opacity: 0;}
    to {opacity: 1;}
}
@keyframes appearOverlay {
    0% {opacity: 0;}
    30% {opacity: 0;}
    100% {opacity: .45;}
}
.closing {
    opacity: 0;
}
</style>
<style>
.t-dialog-mondal .t-card {
    transition: transform 100ms;
}
.t-dialog-mondal.closable-animation .t-card {
    transform: scale(1.02)
}
</style>
