<template>
  <div class="tabbar-item" @click="onItemClick('link')">
      <div class="item-icon">
         <slot name="icon" v-if="!isActive"></slot>
         <slot name="icon-active" v-if="isActive"></slot>
      </div>
      <div class="item-lable" :class="classes">
        <slot name="label"></slot>
      </div>
    </div>
</template>

<script>
import { childMixin } from "../../mixins/multi-items";

export default {
  name: "tabbar-item",
  mixins: [childMixin],
  props: {
    link: [String, Object]
  },
  computed: {
    isActive() {
      return this.$parent.index === this.currentIndex;
    },
    classes() {
      return {
        "current": this.$parent.index === this.currentIndex
      };
    }
  }
};
</script>
<style lang="less">
.item-icon {
  margin: 2px 0px -7px 0px;
  img {
    width: 22px;
    height: 22px;
  }
}
.item-lable {
  text-align: center;
  color: #999;
  font-size: 12px;
  line-height: 1.8;
  &.current {
    color: #00BCD4;
  }
}
</style>
