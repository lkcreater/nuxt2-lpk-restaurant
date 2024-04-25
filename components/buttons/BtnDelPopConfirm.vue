<template>
    <div>
        <a-popconfirm
            v-if="hiddenConfirm == false"
            title="Are you sure delete this task?"
            ok-text="Yes"
            cancel-text="No"
            @confirm="confirmPopConfirm"
            @cancel="cancelPopConfirm" >
                <a-button type="dashed">
                    <a-icon type="delete" />
                </a-button>
        </a-popconfirm>

        <a-button 
            v-else
            type="dashed"
            @click="confirmPopConfirm">
                <a-icon type="delete" />
        </a-button>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Are you sure delete this task?'
            },
            okText: {
                type: String,
                default: 'Yes'
            },
            cancelText: {
                type: String,
                default: 'No'
            },
            hiddenConfirm: {
                type: Boolean,
                default: () => false
            }
        },
        methods: {
            confirmPopConfirm(){
                this.$emit('confirm')
            },
            cancelPopConfirm(){
                this.$emit('cancel')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>