import Vue from 'vue'
import Router from 'vue-router'
import products from './views/products.vue'
import productAdd from './views/productAdd.vue'
import article from './views/article.vue'
import articleAdd from './views/articleAdd.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:"",
      redirect:"products"
    },
    {
      path:'/products',
      name:"products",
      component:products
    },
    {
      path:'/productAdd',
      name:"productAdd",
      component:productAdd
    },
    {
      path:'/article',
      name:"article",
      component:article
    },
    {
      path:'/articleAdd',
      name:"articleAdd",
      component:articleAdd
    }
  ]
})
