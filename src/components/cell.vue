<template>
  <div class="cell-body">
    <div class="cell-title">
      <div class="cell-name">
      {{title}}
      </div>
      <div class="cell-lable">
      {{lable}}
      </div>
    </div>
    <div class="cell-value">
      {{value}}
    </div>
  </div>
</template>
<script>
export default {
  name: "Cell",
  props:{
    title:String,
    lable:String,
    value:String
  }
};
</script>
<style lang="less">
.cell-body {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #dcdcdc;
  padding: 4px 0px;
  .cell-title {
    margin-left: 24px;
    .cell-name {
      font-size: 18px;
      color: #353535;
    }
    .cell-lable {
      font-size: 14px;
      color: #828282;
    }
  }
  .cell-value {
    margin-right: 24px;
  }
}
</style>

