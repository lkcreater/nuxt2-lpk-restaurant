<template>
    <a-upload-dragger
        v-model:fileList="fileList"
        name="file"
        :multiple="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange" >

            <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text">
                {{ label.textHead }}
                <!-- Click or drag file to this area to upload -->
            </p>
            <p class="ant-upload-hint">
                {{ label.textHint }}
            </p>

    </a-upload-dragger>
</template>

<script>
export default {
    computed: {
        label() {
            return {
                textHead: 'คลิกหรือลากไฟล์มายังพื้นที่อัปโหลดที่นี่',
                textHint: 'อัปโหลดได้ทีละ 1 ไฟล์ รองรับไฟล์ที่มีขนาดไม่เกิน 2MB เท่านั้น และต้องเป็นไฟล์ภาพที่มีนามสกุลดังนี้ .jpg, .png, .gif, .jpeg เท่านั้น'
            }
        }
    },
    data() {
        return {
            fileList: []
        };
    },
    methods: {
        handleChange(info) {
            const status = info.file.status;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                this.$message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                this.$message.error(`${info.file.name} file upload failed.`);
            }
        },
    },
};
</script>

<style lang="scss" scoped>

</style>