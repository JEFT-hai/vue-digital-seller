<template>
  <div class="multiplyChooser-component">
    <div class="multiplyChooser-list">
      <ul>
        <li v-for="(item,index) in selections" @click="select(index)" :class="{active: checkActive(index)}">{{ item. label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
  export default {
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    data() {
      return {
        nowIndexes: [0]
      }
    },
    methods: {
      select(index) {
        if (this.nowIndexes.indexOf(index) == -1) {
          this.nowIndexes.push(index)
        } else {
          this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
            return idx !== index
          })
        }
        let nowObjArray = _.map(this.nowIndexes, (idx) => {
          return this.selections[idx]
        })
        this.$emit('on-change',nowObjArray)
      },
      checkActive(index) {
        return this.nowIndexes.indexOf(index) !== -1
      }
    }
  };
</script>

<style scoped>
.multiplyChooser-component {
  display: inline-block;
  margin-top: 3px;
}
.multiplyChooser-list {
  background:#fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
}
.multiplyChooser-list li {
  display: inline-block;
  font-size: 14px;
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  border-radius: 1px;
  cursor: pointer;
}
</style>
