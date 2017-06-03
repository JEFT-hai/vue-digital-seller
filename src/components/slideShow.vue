<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img clearfix" >
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li class="lt" @click="decrease">&lt;</li>
      <li v-for="(item, index) in slides">
        <a @click="NowIndex(index)" :class="{on: index===nowIndex}">{{ index + 1 }}</a>
      </li>
      <li class="lt" @click="increase">&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type:Array,
        default: []
      },
      inv: {
        type:Number,
        defaullt: 2000
      }
    },
    data() {
      return {
        nowIndex: 0,
        isShow: true
      }
    },
    mounted() {
      this.runInv()
    },
    computed: {
      PrevIndex() {
        if (this.nowIndex === 0) {
          return this.slides.length - 1;
        } else {
          return this.nowIndex - 1;
        }
      },
      NextIndex() {
        if (this.nowIndex === this.slides.length - 1) {
          return 0;
        } else {
          return (this.nowIndex + 1);
        }
      }
    },
    methods: {
      NowIndex(index) {
          this.isShow = false;
          setTimeout(()=> {
            this.isShow = true;
            this.nowIndex = index;
          },10)
      },
      decrease() {
        this.NowIndex(this.PrevIndex);
      },
      increase() {
        this.NowIndex(this.NextIndex);
      },
      runInv() {
        this.invId = setInterval(()=> {
          this.increase()
        },this.inv)
      },
      clearInv() {
        clearInterval(this.invId)
      }
    }
  };
</script>

<style>
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(810px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-810px);
  }
  .slide-show {
    width: 810px;
    height: 500px;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .slide-img {
    width: 100%;
  }
  .slide-img img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0
  }
  .slide-show h2 {
    position: absolute;
    height: 24px;
    line-height: 24px;
    bottom: 0;
    left: 15px;
    color: #eee;
    z-index: 5;
  }
  .slide-show ul {
    text-align: right;
    padding-right: 15px;
    box-sizing: border-box;
  }
  .slide-show ul li {
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    height: 24px;
    font-size: 14px;
    color:#eee;
    cursor: pointer;
    padding: 0 10px;
  }
  .slide-pages {
    position: absolute;
    width: 100%;
    height: 24px;
    background: rgba(0,0,0,0.8);
    bottom:0;
  }
  .on {
    text-decoration: underline
  }
</style>
