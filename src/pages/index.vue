<template>
  <div class="index-wrap clearfix">
    <div class="index-left clearfix">
      <div class="index-left-block">
        <h2>全部产品</h2>

        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list"><a :href="item.url">{{item.name}}</a>
              <span v-show="item.hot" class="hot">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList"><a :href="item.url" class="new-item">{{item.title}}</a></li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show class="clearfix" :slides="slides" :inv="inv"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item clearfix" v-for="(item,index) in boardList" :class="[{'line-last':index%2 !== 0},'index-board-' + item.id]">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <a href="" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow'
export default {
  components: {
    slideShow
  },
  created() {
    this.$http.get('api/getNewsList')
    .then((res) => {
      this.newsList = res.data
    }, (err) => {
      console.log(err)
    })
  },
  data() {
    return {
      inv: 2000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'detail/publish'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      newsList: [],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
    }
  }
}
</script>
  
<style scoped>
  .clearfix:after {
    clear:both;
    content:'';
    display:block;
    height: 0;
    visibility: hidden;
  }
  .index-wrap {
    width: 1200px;
    margin:0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    margin-right: 10px;
    margin-top: 10px;
    width: 300px;
    min-height: 800px;
    background: #fff;
  }
  .index-left-block h2 {
    height: 30px;
    line-height: 30px;
    padding-left: 12px;
    margin-bottom: 10px;
    font-size: 15px;
    color:#eee;
    background: #41b883;
    border-radius: 1px;
  }
  .index-left-block h3 {
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    padding: 0 0 0 12px;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block ul li {
    padding : 3px 0;
  }
  .index-left-block ul li a{
    font-size: 12px;
    height: 12px;
    line-height: 12px;
    color: rgb(7,17,27);
    text-decoration: none;
  }
  .hot {
    display: inline-block;
    margin-top: 2px;
    vertical-align: top;
    background: #f00;
    color: #fff;
    height: 15px;
    font-size: 14px;
    border-radius: 1px;
  }
  .hr {
    width: 100%;
    height: 1px;
    margin: 5px 0;
    background: rgba(0,0,0,0.1);
  }
  .index-right {
    margin-top: 10px;
  }
  .slide-show {
    
  }
  .index-board-item {
    width: 400px;
    float: left;
    margin: 0 10px 10px 0;
    padding: 20px;
    background:#fff;
    box-shadow: 0 0 1px #ddd;
    box-sizing: border-box;
  }
  .index-board-item-inner {
    padding: 0 0 10px 120px;
  }
  .index-board-car .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat
  }
  .index-board-hill .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat
  }
  .index-board-item-inner h2 {
    font-size: 15px;
    font-weight: bold;
    padding: 5px 0;
  }
  .index-board-item-inner p {
    line-height: 20px;
    font-size: 12px;
    padding: 5px 0;
  }
  .index-board-button {
    margin: 15px auto;
  }
  .index-board-button a{
    font-size: 13px;
    color: #eee;
    text-decoration: none;
    padding: 8px 15px;
    background: #41b883;
    border-radius: 1px;
  }
  .line-last {
    margin-right: 0;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

</style>
