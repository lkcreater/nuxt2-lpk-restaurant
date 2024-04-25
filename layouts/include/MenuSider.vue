<template>
     <a-menu 
        :class="{ 'lk-short-menu': breakPoint }"
        :theme="theme" 
        mode="inline" 
        :default-selected-keys="[`${firstMenuId}`]">
      
            <a-menu-item v-for="item in dataMenus" :key="item.id" @click="goto(item.path)">
                <a-icon :type="item.icon" />            
                <span class="nav-text">{{ item.label }}</span>
            </a-menu-item>
        
    </a-menu>
</template>

<script>
export default {
    props: {
        breakPoint: {
            type: Boolean
        },
    },
    computed: {
        label() {
            return {
                home: 'หน้าหลัก',
                products: 'รายการอาหาร',
                category: 'จัดการหมวดหมู่'
            }
        },
        theme(){
            return 'light'; // light || dark
        }
    },
    mounted () {
        this.dataMenus = this.itemsMenu();
    },
    data() {
        return {
            firstMenuId: '',
            menuIds: [],
            dataMenus: []
        }
    },
    methods: {
        itemsMenu(){
            this.firstMenuId = '1';

            const menus = [
                {
                    id: this.firstMenuId,
                    icon: 'appstore',
                    label: this.label.home,
                    path: '/'
                },
                {
                    id: '2',
                    icon: 'reconciliation',
                    label: this.label.products,
                    path: '/products'
                },
                {
                    id: '3',
                    icon: 'block',
                    label: this.label.category,
                    path: '/category'
                }
            ];

            return menus;
        },        
        goto(path){
            this.$router.push({
                path: path
            })
        }
    }    
}
</script>

<style lang="scss" scoped>

</style>