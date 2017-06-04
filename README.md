# vuedemo2

> A Vue.js project

## Build Setup

##### 安装vue-cli
 1. npm install vue-cli -g
 2. vue init webpack my-project
 3. npm install 生成package.json
 4. npm run dev 或 npm run build 上线

##### vue-router
 1. import VueRouter from 'vue-router'
 2. Vue.use(VueRouter)
 3. let router = new VueRouter({
	  mode: 'history',<br>
	  routes: [<br>
	    {path:'/',component: IndexPage},<br>
	    {path:'/orderList',component: orderListPage},<br>
	    {path:'/detail',component: DetailPage,redirect:'/detail/analysis',<br>
	      children: [<br>
	        {path:'forecast',component: ForPage},<br>
	        {path:'analysis',component: AnaPage},<br>
	        {path:'count',component: CouPage},<br>
	        {path:'publish',component: PubPage}<br>
	      ]<br>
	      }<br>
	    ]<br>
    })<br>
