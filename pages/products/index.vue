<template>
    <div>
        <a-card 
            class="lk-card"
            :loading="loading" 
            title="Card title">

            <template #extra>
                <a-dropdown>
                    <a-button type="primary" style="margin-left: 8px">
                        <a-icon type="plus-circle" />
                        {{ label.buttonDropDawn }}
                        <a-icon type="down" /> 
                    </a-button>
                    <a-menu slot="overlay">
                        <template v-for="menu in extraCardMenu"> 
                            <a-menu-item @click="onOpenDrawer(menu.drawerNameForm)"> 
                                <a-icon :type="menu.icon" />
                                {{ menu.label }}
                            </a-menu-item>
                        </template>
                    </a-menu>
                </a-dropdown>
            </template>

            whatever content
        </a-card>

        <a-drawer
            class="lk-layout-app"
            :title="getTitleDrawer"
            width="520"
            :closable="false"
            :visible="drawer"
            @close="onCloseDrawer" >
            
                <FormProduct v-if="chooseForm === 'product'"/>

                <FormCategory v-if="chooseForm === 'category'" />
        </a-drawer>
    </div>
</template>

<script>
import FormProduct from '@/components/forms/FormProduct';
import FormCategory from '@/components/forms/FormCategory';

export default {
    components: {
        FormProduct,
        FormCategory
    },
    computed: {
        label(){
            return {
                buttonDropDawn: 'จัดการรายการอาหาร'
            }
        }
    },
    data() {
        return {
            loading: false,
            drawer: false,
            extraCardMenu: [
                {
                    icon: 'medicine-box',
                    label: 'เพิ่มเมนูอาหาร',
                    type: 'drawer',
                    drawerNameForm: 'product'
                },
                {
                    icon: 'profile',
                    label: 'เพิ่มหมวดหมู่อาหาร',
                    type: 'drawer',
                    drawerNameForm: 'category'
                }
            ],
            chooseForm: 'product'
        }
    },
    methods: {
        getTitleDrawer(){
            const title = {
                product: 'เพิ่มเมนูอาหาร',
                category: 'เพิ่มหมวดหมู่อาหาร'
            }

            return (title[this.chooseForm]) ? title[this.chooseForm] : 'Header';
        },
        onOpenDrawer(choose) {
            this.chooseForm = choose;
            this.drawer = true;
        },
        onCloseDrawer() {
            this.drawer = false;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>