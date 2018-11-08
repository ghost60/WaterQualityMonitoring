<template>
  <div class="card-body">
    <div class="card-border">
      <Select>
        <SelectItem selected @onSelect="onSelect(24)">过去24小时</SelectItem>
        <SelectItem @onSelect="onSelect(7)">过去7天</SelectItem>
        <SelectItem @onSelect="onSelect(30)">过去一个月</SelectItem>
        <SelectItem @onSelect="onSelect(0)">自定义</SelectItem>
      </Select>
    <div class="card-time">
      2018年11月1日-2018年11月11日
    </div>
    </div>
  </div>
</template>
<script>
import Select from "./select/select";
import SelectItem from "./select/select-item";

export default {
  name: "DatePanel",
  components: { Select, SelectItem },
  methods: {
    onSelect(e) {
      debugger;
      //掘金JavaScript 复杂判断的更优雅写法
      //https://juejin.im/post/5bdfef86e51d453bf8051bf8
      // const actions = new Map([
      //   [1, ["processing", "IndexPage"]],
      //   [2, ["fail", "FailPage"]],
      //   [3, ["fail", "FailPage"]],
      //   [4, ["success", "SuccessPage"]],
      //   [5, ["cancel", "CancelPage"]],
      //   ["default", ["other", "Index"]]
      // ]);
      // /**
      //  * 按钮点击事件
      //  * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消
      //  */
      // const onButtonClick = status => {
      //   let action = actions.get(status) || actions.get("default");
      //   sendLog(action[0]);
      //   jumpTo(action[1]);
      // };
    }
  }
};
</script>
<style lang="less">
.card-body {
  background-color: #ffffff;
  padding: 0px 18px;
}
.card-border {
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #dcdcdc;
  padding: 8px 0px;
  .card-time {
    font-size: 12px;
    color: #777777;
    margin-top: 8px;
  }
}
</style>

