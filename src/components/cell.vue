<template>
  <div class="cell-body">
    <div class="cell-border">
    <div class="cell-title">
      <div class="cell-name">
      {{title}}-{{lable}}
      </div>
      <div class="cell-lable">
      </div>
    </div>
    <div class="cell-value">
      {{value}}
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cell",
  props: {
    title: String,
    lable: String,
    value: String
  }
};
</script>
<style lang="less">
.cell-body {
  background-color: #ffffff;
  padding: 0px 15px;
  .cell-title {
    .cell-name {
      font-size: 14px;
      color: #333333;
    }
    .cell-lable {
      font-size: 14px;
      color: #333333;
    }
  }
  .cell-value {
    color: #00BCD4;
    font-size: 16px;
  }
}
.cell-border {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #E6E6E6;
  padding: 16px 0px;
}
</style>

