<template>
  <div class="tabbar-item" @click="onItemClick(true)">
      <div class="item-icon" v-if="!simple">
         <slot name="icon" v-if="!simple && !(hasActiveIcon && isActive)"></slot>
         <slot name="icon-active" v-if="!simple && hasActiveIcon && isActive"></slot>
      </div>
      <div class="item-lable">
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
  },
  data() {
    return {
      simple: false,
      hasActiveIcon: false
    };
  },
  mounted() {
    if (!this.$slots.icon) {
      this.simple = true;
    }
    if (this.$slots["icon-active"]) {
      this.hasActiveIcon = true;
    }
    if(this.selected){
        this.isSelect = "selected"
      }
  }
};
</script>
<style lang="less">
.item-icon {
  margin: 2px 0px -7px 0px;
}
.item-lable {
  text-align: center;
  color: #999;
  font-size: 12px;
  line-height: 1.8;
  &.selected{
    color: #4fa7f7;
  }
}
</style>
