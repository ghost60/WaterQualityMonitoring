<template>
  <div class="select-body">
    <slot></slot>
  </div>
</template>
<script>
import { parentMixin } from "../../mixins/multi-items";
export default {
  name: "Select",
  mixins:[parentMixin],
};
</script>
<style lang="less">
.select-body {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #00bcdc;
}
</style>

