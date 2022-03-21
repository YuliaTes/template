<template>
    <div class="v-authorization">
        <v-form></v-form>
        <v-content></v-content>
        <v-footer></v-footer>
    </div>
</template>

<script>

import vForm from './v-form'
import vContent from './v-content'
import vFooter from './v-footer'


export default {
    name: 'v-authorization',
    components: {
        vForm,
        vContent,
        vFooter
    },
    data() {
        return {
        }
    },
}
</script>

<style>
.v-authorization {
    display: block;
}
</style>