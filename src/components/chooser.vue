<template>
  <div class="chooser-component">
    <div class="chooser-list">
      <ul>
        <li v-for="(item,index) in selections" @click="choose(index)" :class="{active: nowIndex === index}">{{ item. label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
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
        nowIndex: 0
      }
    },
    methods: {
      choose(index) {
        this.nowIndex = index,
        this.$emit('on-change',this.selections[this.nowIndex])
      }
    }
  };
</script>

<style scoped>
.chooser-component {
  display: inline-block;
  margin-top: 3px;
}
.chooser-list {
  background:#fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
}
.chooser-list li {
  display: inline-block;
  font-size: 14px;
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  border-radius: 1px;
  cursor: pointer;
}
</style>
