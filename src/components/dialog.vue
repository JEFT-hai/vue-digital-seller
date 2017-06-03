<template>
  <div class="dialog-wrap" v-if="isShow">
    <div  @click="close" class="dialog-cover" v-if="isShow"></div>
    <transition name = "drop">
      <div class="dialog-content" v-if="isShow">
        <p @click="close" class="dialog-close">X</p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: Boolean,
      default: false
    },
    methods: {
      close() {
        this.$emit('on-close')
      }
    }
  };
</script>

<style>
  .drop-enter {
    transform: translateY(-500px);
  }
  .drop-enter-active {
    transition: all .5s ease;
  }
  .drop-leave-active {
    transition: all .3s ease;
    transform: translateY(-500px);
  }
  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover { 
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3)
  }
  .dialog-content {
    position: fixed;
    z-index: 200;
    width: 50%;
    max-height: 50%;
    padding: 2%;
    line-height: 1.6;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    border-radius: 2px solid #464068;
    background: #fff;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>
