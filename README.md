# vuedemo2

> A Vue.js project

## Build Setup

##### 安装vue-cli
 1. npm install vue-cli -g
 2. vue init webpack my-project
 3. npm install 生成package.json
 4. npm run dev 或 npm run build 上线

##### vue-router
* import VueRouter from 'vue-router'
* Vue.use(VueRouter)
* let router = new VueRouter({
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
