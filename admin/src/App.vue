<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>内容管理</template>
        <el-menu-item index="/products">产品列表</el-menu-item>
        <el-menu-item index="/productAdd">添加产品</el-menu-item>
        <el-menu-item index="/article">文章列表</el-menu-item>
        <el-menu-item index="/articleAdd">添加文章</el-menu-item>
        <el-menu-item index="1-5">赛事列表</el-menu-item>
        <el-menu-item index="1-6">添加赛事</el-menu-item>
      </el-submenu>
      
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>李林衡</span>
    </el-header>
    <router-view></router-view>
    
  </el-container>
</el-container>

  </div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    
  };
</script>
<style>
  html,body{
    padding: 0;
    margin: 0;
  }
</style>