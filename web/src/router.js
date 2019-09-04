import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from '@/views/home.vue';
import story from '@/views/story.vue';
const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // 打开项目自动跳转到首页
      name:'',
      path:'/',
      redirect:"index/home"
    },
    {
      // 首页
      name:'index',
      path:'/index',
      component:()=>import('@/views/index.vue'),
      children:[
        {
          path:"home",
          name:"home",         
          component:home
        },
        {
          path:"story",
          name:"story",         
          component:story
        }
      ]
    }
  
  ]
})

export default router;