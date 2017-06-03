// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import orderListPage from './pages/orderList'
import ForPage from './pages/detail/forecast'
import AnaPage from './pages/detail/analysis'
import CouPage from './pages/detail/count'
import PubPage from './pages/detail/publish'
Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
	mode: 'history',
	routes: [
	  {path:'/',component: IndexPage},
	  {path:'/orderList',component: orderListPage},
	  {path:'/detail',component: DetailPage,redirect:'/detail/analysis',
	    children: [
	      {path:'forecast',component: ForPage},
	      {path:'analysis',component: AnaPage},
	      {path:'count',component: CouPage},
	      {path:'publish',component: PubPage}
	    ]
	  }
	]
})

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: { layout }
})
