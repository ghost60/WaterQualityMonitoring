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
    height: 48px;
    background-color: #FFFFFF;
    box-shadow: 0px -6px 5px -5px #D9D9D9;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
}
</style>