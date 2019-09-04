<template>
    <div style="width:75%;margin:0 auto;padding-top:30px;">
        <el-form ref="form" :model="form" label-width="80px" enctype="multipart/form-data">
  <el-form-item label="文章标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="科普主角">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
   <el-form-item label="图片上传">
    <el-upload
  action="http://localhost:3000/article/addArticle"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>
  
  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="form.message" rows="10"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '123',
          title:'233',
          message:'666'
        },
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      onSubmit() {
        console.log(this.dialogImageUrl);
      },handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>