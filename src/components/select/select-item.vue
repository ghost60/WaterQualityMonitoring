<template scope="scope-props">
  <div class="card-item" :class="classes" @click="onItemClick('callback')">
    <slot></slot>
  </div>
</template>
<script>
import { childMixin } from "../../mixins/multi-items";

export default {
  name: "SelectItem",
  mixins:[childMixin],
  computed: {
    classes() {
      return {
        "current":this.currentIndex === this.$parent.currentIndex,
        "first": this.currentIndex === 0,
        "last":this.currentIndex === this.$parent.$children.length - 1,
        "middle":this.currentIndex > 0 && 
        this.currentIndex !== this.$parent.$children.length - 1
      };
    }
  }
};
</script>
<style lang="less">
.card-item {
  height: 25px;
  width: 83px;
  text-align: center;
  line-height: 25px;
  border-style: solid;
  border-width: 1px 0px 1px 1px;
  border-color: #00bcdc;
  &.first{
    border-radius: 2px 0px 0px 2px;
  }
  &.last {
    border: 1px solid #00bcdc;
    border-radius: 0px 2px 2px 0px;
  }
  &.current {
    background-color: #00bcdc;
    color: #ffffff;
  }
}
</style>

