<template>
    <div class="lk-l-title">
        <h4>{{ label }}</h4>        
        <hr>
        <span v-if="desc != '' && banner == false">{{ desc }}</span>
        <a-alert v-if="desc != '' && banner == true" :message="desc" type="info" banner />
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            desc: {
                type: String,
                default: ''
            },
            banner: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>