<template>
  <div class="detail-wrapper">
    <div class="detail-left">
      <div class="product-board">
        <img :src="productIcon">
        <ul>
          <router-link v-for="item in products" :to="{path: item.path}" tag="li" active-class="active">{{item.name}}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            name: '数据统计',
            path: 'count',
            icon: require('../assets/images/1.png'),
            active: false
          },
          {
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            name: '流量分析',
            path: 'analysis',
            active: false
          },
          {
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        imgMap: {
          '/detail/count': require("../assets/images/1.png"),
          '/detail/forecast': require("../assets/images/2.png"),
          '/detail/analysis': require("../assets/images/3.png"),
          '/detail/publish': require("../assets/images/4.png")
        }
      }
    },
    computed: {
      productIcon () {
        return this.imgMap[this.$route.path];
      }
    }
  }
</script>

<style>
  .detail-wrapper{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    height: 800px;
  }
  .detail-left {
    float: left;
    width: 200px;
    background: #fff;
    margin-right: 10px;
    margin-top: 10px;
  }
  .product-board img{
    display: block;
    margin: 0 auto;
    padding: 20px 0;
  }
  .product-board ul{
    padding: 10px 0;
  }
  .product-board ul li {
    padding: 10px 15px;
    cursor: pointer;
  }
  .product-board ul li:hover,li.active {
    background: #41c08d;
    color: #fff;
  }
  .detail-right{
    float: left;
    margin-top: 10px;
  }
  .sales-board{
    width: 910px;
  }
  .sales-board-intro,.sales-board-des{
    background:#fff;
    padding: 0 20px;
  }
  .sales-board-intro h2,.sales-board-des h2 {
    font-weight: normal;
    padding-top: 20px;
  }
  .sales-board-intro p,.sales-board-des p{
    padding: 20px 0;
    font-size: 12px;
    opacity: 0.8;
    line-height: 20px;
  }
  .sales-board-form {
    padding: 0 20px 30px;
    background:#fff;
  }
  .sales-board-line {
    width: 100%;
    height: 30px;
    padding-bottom: 10px;
    clear: both;
  }
  .sales-board-line-left {
    float: left;
    width: 100px;
    font-size: 13px;
    line-height: 30px;
    font-weight: bold;
    opacity: .8;
    overflow: hidden;
  }
  .sales-board-line-right {
     
  }
  .button {
    width: 100px;
    margin-left: 100px;
    background: #41b883;
    color: #fff;
    text-align: center;
    padding: 6px 0 5px 0;
    border-radius: 1px;
  }
  .sales-board-des {
    margin-top: 10px;
    padding-bottom: 40px;
  }
  .sales-board-des h3 {
    font-size: 15px;
    line-height: 20px;
    padding: 5px 0;
  }
  .sales-board-des p {
    font-size: 12px;
    line-height: 24px;
  }
  .sales-board-des ul{
    padding-bottom: 10px;
  }
  .sales-board-des ul li{
    font-size: 13px;
    line-height: 20px;
  }
  .sales-board-table {
    width: 100%;
  }
  .ui-table-row{
    display: flex;
    font-size: 12px;
    opacity: .9;
  }
  .ui-table-row td{
    flex: 1;
    padding: 15px;
  }
</style>
