import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入重置样式文件,公共SCSS文件
import '@/assets/css/reset.css'
import '@/assets/css/common.scss'

// 注册bootstrap组件
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
