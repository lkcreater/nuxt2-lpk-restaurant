<template>
    <div>

    </div>
</template>

<script>
export default {
    beforeMount () {
        this.$nav([
            {
                path: '/',
                breadcrumbName: 'หน้าหลัก',
            },
            {
                path: '/products',
                breadcrumbName: 'รายการเมนู',
            }
        ]);
    },
}
</script>

<style lang="scss" scoped>

</style>