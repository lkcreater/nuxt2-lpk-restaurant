<template>
    <div class="lk-form-horizontal">
        <a-form-model
            ref="ruleForm"
            :model="models"
            :rules="rules"> 
            
            <lk-title label="รูปภาพประกอบ" style="margin-top: 0px;"/>
            <DragDropUpload style="margin-bottom: 20px;"/>


            <lk-title label="ข้อมูลอาหาร" />
            <a-form-model-item :label="inputLabel.title" prop="title">
                <a-input v-model:value="models.title" autocomplete="off" />
            </a-form-model-item>

            <a-form-model-item :label="inputLabel.desc" prop="desc">
                <a-textarea v-model:value="models.desc" autocomplete="off" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-model-item>


            <lk-title label="ราคา และตัวเลือกราคา" banner desc="เพิ่มตัวเลือกราคาถ้าสินค้ามีขนาดต่าง ๆ (เช่นเล็ก กลาง ใหญ่) หรือเพิ่มตัวเลือก (เช่นน้ำ แห้ง) คำนวณ GST/VAT รวมในราคาถ้ามี"/>
            <template v-for="(object, idx) in models.prices">                
                <div class="lk-box-content">
                    <a-row justify="end">
                        <a-col span="10" style="padding-left: 15px;">
                            <a-form-item 
                                style="margin-bottom: 0px;"
                                :label="inputLabel.prices.label" >
                                    <a-input v-model:value="object.label" />
                            </a-form-item>
                        </a-col>

                        <a-col span="10" style="padding-left: 15px;">
                            <a-form-item                                 
                                style="margin-bottom: 0px;"
                                :label="inputLabel.prices.price">
                                    <a-input type="number" v-model:value="object.price" />
                            </a-form-item>
                        </a-col>

                        <a-col span="4" style="padding-left: 15px; padding-top: 27px;">
                            <BtnDelPopConfirm 
                                v-if="idx > 0" 
                                :hidden-confirm="visibleOptionPrice[object.id]"
                                @confirm="removeOptionPrice(object.id)"
                                />
                        </a-col>
                    </a-row>    
                </div>            
            </template>                
                
            <div class="lk-box-content br-primary" style="text-align: center; padding: 0px; margin-bottom: 20px;">
                <a-button type="link" @click="addOptionPrice">เพิ่มตัวเลือกราคา</a-button>
            </div>

            <lk-title label="ข้อมูลตัวเสริมอาหาร" desc="เพิ่มตัวเสริมอาหาร ตัวอย่าง เพิ่มลูกชิ้น, เพิ่มไข่ดาว เป็นต้น และระบุราคาตามตัวเสริม"/>           

        </a-form-model>
    </div>
</template>

<script>
import DragDropUpload from '@/components/inputs/DragDropUpload';
import BtnDelPopConfirm from '@/components/buttons/BtnDelPopConfirm';

const initializeModels = () => ({
    title: '',
    desc: '',
    prices: [{
        id: Date.now(),
        label: 'ราคาปกติ',
        price: '100'
    }]
})

export default {
    components: {
        DragDropUpload,
        BtnDelPopConfirm
    },
    computed: {
        inputLabel(){
            return {
                title: 'ชื่ออาหาร',
                desc: 'รายละเอียด',
                prices: {
                    label: 'ชื่อตัวเลือก',
                    price: 'ราคา'
                }
            }
        }
    },
    data() {
        return {
            models: initializeModels(),
            visibleOptionPrice: [],
            rules: {
                title: [{ required: true, trigger: 'blur' }]
            }
        }
    },
    methods: {
        addOptionPrice(){
            const uid = Date.now();        
            this.models.prices.push({
                id: uid,
                label: '',
                price: ''
            });

            this.visibleOptionPrice[uid] = false;
        },
        removeOptionPrice(uid){
            const idx = this.models.prices.findIndex(item => item.id === uid);
            this.models.prices.splice(idx, 1); 
        }
    }
}
</script>

<style lang="scss" scoped>

</style>