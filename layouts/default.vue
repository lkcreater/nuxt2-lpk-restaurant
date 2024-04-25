<template>
    <a-layout class="lk-layout-app">

        <a-layout-sider
            breakpoint="lg"            
            @collapse="onCollapse"
            @breakpoint="onBreakpoint">               
            <LogoVue :size="40" :break-point="breakpoint"/>
            <MenuSider :break-point="breakpoint" />
        </a-layout-sider>

        <a-layout>
            <a-layout-header v-if="false">
                
            </a-layout-header>

            <a-layout-content>   
                <HeaderSider /> 
                <div style="padding: 15px;">         
                    <Nuxt />
                </div>   
            </a-layout-content>

            <a-layout-footer>
                Footer
            </a-layout-footer>
        </a-layout>

    </a-layout>
</template>

<script>
import LogoVue from '@/components/logo/logo.vue';
import MenuSider from '@/layouts/include/MenuSider';
import HeaderSider from '@/layouts/include/HeaderSider';

export default {
    components: {
        MenuSider,
        HeaderSider,
        LogoVue
    },
    data() {
        return {
            breakpoint: false
        }
    },
    methods: {
        onCollapse(collapsed, type) {
            console.log(collapsed, type);
        },
        onBreakpoint(broken) {
            this.breakpoint = broken;
            console.log(broken);
        },
    },
}
</script>

<style lang="scss" scoped>

</style>