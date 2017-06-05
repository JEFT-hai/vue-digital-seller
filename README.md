# vuedemo2

> A Vue.js project

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
	      　{path:'forecast',component: ForPage} 子路由没有'/'<br>
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
* < router-link to="/seller">商家< /router-link>(:to="'seller'")(:to="{name:'seller'}") tag="li"可以改变标签 active-class="active"

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

##### awesome-vue 查找vue插件

##### slide插件
1. 图片通过js(data)引入模板，需要用require,eg:src: require('../assets/slideShow/pic1.jpg')
2. @mouseover="clearInv" @mouseout="runInv"鼠标移入移出事件
3. < transition name="slide-trans">
   　< img v-if="isShow" :src="slides[nowIndex].src"><br>
   < /transition><br>
   < transition name="slide-trans-old"><br>
   　< img v-if="!isShow" :src="slides[nowIndex].src"><br>
   < /transition><br>
   css:<br>
   .slide-trans-enter-active {<br>
    　transition: all .5s;<br>
  }<br>
  .slide-trans-enter {<br>
    　transform: translateX(810px);<br>
  }<br>
  .slide-trans-old-leave-active {<br>
    　transition: all .5s;<br>
    　transform: translateX(-810px);<br>
  }
  注意　两个img，一个会把前一个挤下来，所以要设置top: 0；
  
##### dialog
1. < slot>< /slot>在组件中插入插件
2. @on-close="close('showRegDialog')"，
   dialog中通过 close() { this.$emit('on-close')} 将事件传递给父组件<br>
   
##### 路由映射
1. 通过this.$route.path拿到当前页面路由地址 
 * productIcon () { return this.imgMap[this.$route.path];}
 * imgMap: { <br>
          　'/detail/count': require("../assets/images/1.png"),<br>
          　'/detail/forecast': require("../assets/images/2.png"),<br>
          　'/detail/analysis': require("../assets/images/3.png"),<br>
          　'/detail/publish': require("../assets/images/4.png")<br>
        　　}
 * :src="productIcon"
##### 基础组件
 base: select,counter,mutiplyCounter,chooser,dialog
##### 总价计算
1. @on-change="onParamChange('buyNum', $event)" 各个base组件绑定on-change事件 $event 是必须的 子组件（base）通过this.$emit('on-change',val)将值传递给on-change事件
2. onParamChange (attr, val) { this[attr] = val;  this.getPrice() }
3. getPrice () {
      let buyVersionsArray = _.map(this.versions, (item) => {<br>
        return item.value<br>
      }) _引用自lodash方法<br>
      let reqParams = {<br>
        buyNumber: this.buyNum,<br>
        buyType: this.buyType.value,<br>
        period: this.period.value,<br>
        version: buyVersionsArray.join(',') join将Object(array)转化成字符串 (ajs)a.j=>s<br>
      }<br>
      this.$http.post('/api/getPrice', reqParams)<br>
      .then((res) => {<br>
        this.price = res.data.amount<br>
        (返回的res.data格式为Object，如果为字符串还要JSON.parse(res.data)<br>
        })<br>
    }<br>
 4. mounted () { // 初始化，页面载入的状态<br>
    　this.buyNum = 1<br>
    　this.buyType = this.buyTypes[0]<br>
    　this.versions = [this.versionList[0]]<br>
    　this.period = this.periodList[0]<br>
    　this.getPrice()<br>
  　}<br>
 *  支付
 confirmBuy () {<br>
      let buyVersionsArray = _.map(this.versions, (item) => {<br>
        　return item.value<br>
      })<br>
      let reqParams = {<br>
        　buyNumber: this.buyNum,<br>
        　buyType: this.buyType.value,<br>
        　period: this.period.value,<br>
       　 version: buyVersionsArray.join(','),<br>
        　bankId: this.bankId<br>
      }<br>
      this.$http.post('/api/createOrder', reqParams)<br>
      .then((res) => {<br>
        　this.orderId = res.data.orderId<br>
       　 this.isShowCheckOrder = true<br>
       　 this.isShowPayDialog = false<br>
      }, (err) => {<br>
       　 this.isShowBuyDialog = false<br>
       　 this.isShowErrDialog = true<br>
      })<br>
    }<br>
##### 定义全局事件
1. import Vue from 'vue'

　const eventBus = new Vue()<br>

　export { eventBus }<br>
2. resetComponent() {eventBus.$emit('reset-component')}
3. mounted () {
      　eventBus.$on('reset-component', () => {<br>
        　this.isDrop = false<br>
      　})<br>
    }<br>
4. toggleDrop(e) { 多个select组件情况
        　e.stopPropagation()<br>
        　eventBus.$emit('reset-component') <br>
       　 this.isDrop = !this.isDrop<br>
      }<br>
