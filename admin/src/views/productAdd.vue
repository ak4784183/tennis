<template>
    <div style="width:70%;margin:0 auto;padding-top:30px;">
        <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="产品名称">
    <el-input v-model="form.productName"></el-input>
  </el-form-item>
  <el-form-item label="产品介绍">
    <el-input type="textarea" v-model="form.message"></el-input>
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
          productName: '123',
          message:'666'
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>