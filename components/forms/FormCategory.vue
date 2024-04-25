<template>
    <div class="lk-form-horizontal">
        <a-form-model
            ref="ruleForm"
            :model="models"
            :rules="rules"> 

            <lk-title label="รายละเอียดของหมวดหมู่" :desc="pageLabel.detailAlart" banner style="margin-top: 0px;"/>

            <a-form-model-item :label="inputLabel.title" prop="title">
                <a-input v-model:value="models.title" autocomplete="off" />
            </a-form-model-item>

            <a-form-model-item :label="inputLabel.desc" prop="desc">
                <a-textarea v-model:value="models.desc" autocomplete="off" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-model-item>

        </a-form-model>
    </div>
</template>

<script>
const initializeModels = () => ({
    title: '',
    desc: '',
})

export default {
    computed: {
        pageLabel(){
            return {
                detailAlart: 'สินค้าแต่ละรายการในเมนูจะถูกจัดเป็นหมวดหมู่เมื่อแสดงแก่ลูกค้า กรุณาตรวจสอบชื่อและคำอธิบายสินค้าให้ถูกต้องเนื่องจากเป็นข้อมูลที่ลูกค้ามองเห็น',
            }
        },
        inputLabel(){
            return {
                title: 'ชื่ออาหาร',
                desc: 'รายละเอียด',
            }
        }
    },
    data() {
        return {
            models: initializeModels(),
            rules: {
                title: [{ required: true, trigger: 'blur' }]
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>