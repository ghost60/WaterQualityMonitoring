<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from '../../mixins/multi-items'

export default {
  name: 'tabbar',
  mixins: [parentMixin]
}
</script>

<style lang="less">
.tabbar{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    height: 52px;
    background-color: #f7f7fa;
}
</style>