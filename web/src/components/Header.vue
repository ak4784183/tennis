<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="dark" style="padding:10px 10%;">
      <b-navbar-brand href="#">
        <i class="iconfont icon-wangqiu1"></i>Tennis
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">首页概述</b-nav-item>
          <b-nav-item href="#">产品装备</b-nav-item>
          <b-nav-item href="#">网球科普</b-nav-item>
          <b-nav-item href="#">赛事新闻</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>用户</em>
            </template>
            <b-dropdown-item href="#">登录</b-dropdown-item>
            <b-dropdown-item href="#">退出</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "header1"
};
</script>