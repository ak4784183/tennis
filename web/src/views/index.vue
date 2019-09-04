<template>
  <div id="index">
    <header1></header1>
    <router-view></router-view>
     <!-- 底部栏 -->
    <footer1></footer1>
  </div>
</template>
<script>
import header1 from "@/components/Header.vue";
import footer1 from "@/components/Footer.vue";
export default {
  name: "index",
  components: {
    header1: header1,
    footer1: footer1
  },
  data() {
    return {
    };
  }
};
</script>