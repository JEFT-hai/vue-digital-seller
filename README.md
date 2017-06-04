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
	mode: 'history',(访问地址就没有哈希了'#'）<br>
	routes: [<br>
	  　{path:'/',component: IndexPage},<br>
	  　{path:'/orderList/:color',component: orderListPage},<br>
     　* 加参数形式<br>
     　* this.$route.params获取参数，渲染$route.params.color<br>
     　* 加参数必须有参数，不然匹配不到路由<br>
	  　{path:'/detail',component: DetailPage,redirect:'/detail/analysis'(重定向),<br>
	   　 children: [<br>
	      　{path:'forecast',component: ForPage}<br>
	    　]<br>
	  　}<br>
	]<br>
})
* new Vue({<br>
  　el: '#app',<br>
  　router,<br>
  　template: '<layout/>',<br>
  　components: { layout }<br>
　})
* < router-view :seller="seller">< /router-view> < keep-alive>< /keep-alive>可以缓存资源
* < router-link to="/seller">商家< /router-link>(:to="'seller'")(:to="{name:'seller'}")

##### vue-resource
* import VueResource from 'vue-resource'
* Vue.use(VueResource)
* created() { //直接在页面里使用<br>
    　this.$http.get('api/getNewsList')<br>
    　.then((res) => {<br>
     　 　this.newsList = res.data<br>
    　}, (err) => {<br>
      　　console.log(err)<br>
    　})<br>
  }
##### express.Router
var apiServer = express()<br>
var bodyParser = require('body-parser')<br>
apiServer.use(bodyParser.urlencoded({extended: true}))<br>
apiServer.use(bodyParser.json())<br>
var apiRouter = express.Router()<br>
var fs = require('fs')<br>
apiRouter.get('/',function(req,res) {<br>
  res.json({message:'hooray!'})<br>
});<br>
apiRouter.route('/:apiName')<br>
.all(function (req, res){<br>
  　fs.readFile('./db.json','utf8', function(err, data) {<br>
    　　if (err) throw err<br>
    　　var data = JSON.parse(data)<br>
    　　if (data[req.params.apiName]) {<br>
      　　　res.json(data[req.params.apiName])<br>
    　　}<br>
    　　else {<br>
      　　　res.send('no such api name')<br>
    　　}<br>
  　})<br>
})<br>
apiServer.use('/api', apiRouter)<br>
apiServer.listen(port + 1, function() {<br>
  　console.log('JSON Server is running')<br>
})<br>
