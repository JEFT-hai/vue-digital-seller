<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus"> - </div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="fixNumber">
    </div>
    <div class="counter-btn" @click="add"> + </div>
  </div>
</template>

<script>
import _ from 'lodash'
  export default {
    props: {
      max: {
        type: Number,
        default: 5
      },
      min: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        number: this.min
      }
    },
    watch: {
      number() {
        this.$emit('on-change',this.number)
      }
    },
    methods: {
      fixNumber() {
        let fix
        if (typeof this.number === 'string') {
          fix = Number(this.number.replace(/\D/g,''))
        }
        else {
          fix = this.number
        }
        if (fix > this.max || fix < this.min) {
          this.fix = this. min
        }
        this.number = fix
      },
      minus () {
        if (this.number <= this.min) {
          return
        }
        this.number --
      },
      add () {
        if (this.number >= this.max) {
          return
        }
        this.number ++
      }
    }
  };
</script>

<style scoped>
.counter-component {
  display: inline-block;
  margin-top: 3px;
}
.counter-btn {
  display: inline-block;
  border: 1px solid #e3e3e3;
  width: 15px;
  height: 15px;
  text-align: center;
  cursor: pointer;
}
.counter-show {
  display: inline-block;
}
.counter-show input {
  border: none;
  width: 20px;
  text-align: center;
}
</style>
