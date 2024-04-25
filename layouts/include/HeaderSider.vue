<template>
    <div>
        <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="Title"
            :breadcrumb="{ props: { routes } }"
            sub-title="This is a subtitle" />
    </div>
</template>

<script>
export default {
    mounted () {
        this.routes = this.$nav();
    },
    data() {
        return {
            routes: [
                {
                    path: 'index',
                    breadcrumbName: 'First-level Menu',
                },
                {
                    path: 'first',
                    breadcrumbName: 'Second-level Menu',
                },
                {
                    path: 'second',
                    breadcrumbName: 'Third-level Menu',
                },
            ],
        };
    },
}
</script>

<style lang="scss" scoped>

</style>