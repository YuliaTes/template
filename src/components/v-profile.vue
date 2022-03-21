<template>
    <div class="v-profile">
        <v-header></v-header>
        <v-swiper></v-swiper>
    </div>
</template>

<script>
import { useUserStore } from '../store/index'

import vHeader from './v-header'
import vSwiper from './v-swiper'

export default {
    setup() {
        const main = useUserStore();
        const { counter, name } = main;
        return {
            main,
        }
    },
    name: 'v-profile',
    components: {
        vHeader,
        vSwiper
    },
    beforeCreate() {
        const main = useUserStore();
        if (localStorage.getItem('email') == null && localStorage.getItem('password') == null) {
            this.$router.push('/');
        }
    },
}
</script>

<style>
.v-profile {
    display: block;
}
</style>