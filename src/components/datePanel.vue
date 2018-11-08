<template>
  <div class="card-body">
    <div class="card-border">
      <Select>
        <SelectItem selected @onSelect="onSelect(24)">过去24小时</SelectItem>
        <SelectItem @onSelect="onSelect(7)">过去7天</SelectItem>
        <SelectItem @onSelect="onSelect(30)">过去一个月</SelectItem>
        <SelectItem @onSelect="onSelect(0)">自定义</SelectItem>
      </Select>
    <div class="card-time" v-if="showTime">
      <datetime @on-change="startChange" clear-text="开始时间">
        <span class="card-time-defult">{{startTime}}</span>
      </datetime>
      --
      <datetime @on-change="endChange" clear-text="开始时间">
        <span class="card-time-defult">{{endTime}}</span>
      </datetime>
    </div>
    </div>
  </div>
</template>
<script>
import Select from "./select/select";
import SelectItem from "./select/select-item";
import { Datetime } from "vux";

export default {
  name: "DatePanel",
  components: { Select, SelectItem, Datetime },
  data() {
    return {
      showTime: false,
      startTime: "选择开始时间",
      endTime: "选择结束时间"
    };
  },
  watch: {
    startTime() {
      if (
        this.endTime != "选择结束时间" &&
        new Date(this.startTime) < new Date(this.endTime)
      ) {
        this.$emit("selectDate", this.startTime + " 00:00:00", this.endTime + " 00:00:00");
      }
    },
    endTime() {
      if (
        this.startTime != "选择开始时间" &&
        new Date(this.startTime) < new Date(this.endTime)
      ) {
        this.$emit("selectDate", this.startTime + " 00:00:00", this.endTime + " 00:00:00");
      }
    }
  },
  mounted(){
    this.onSelect(24)
  },
  methods: {
    onSelect(e) {
      let endTime = new Date();
      let startTime24 = new Date(endTime - 24 * 60 * 60 * 1000);
      let startTime7 = new Date(endTime - 7 * 24 * 60 * 60 * 1000);
      let startTime30 = new Date(endTime - 30 * 24 * 60 * 60 * 1000);
      switch (e) {
        case 24:
          this.$emit("selectDate", startTime24, endTime);
          break;
        case 7:
          this.$emit("selectDate", startTime7, endTime);
          break;
        case 30:
          this.$emit("selectDate", startTime30, endTime);
          break;
        case 0:
          this.showTime = true;
      }
    },
    startChange(e) {
      this.startTime = e;
    },
    endChange(e) {
      this.endTime = e;
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
    .card-time-defult {
      color: #777777;
    }
  }
}
.dp-container {
  .dp-header {
    .dp-item {
      color: #00bcdc;
      font-size: 14px;
      &.vux-datetime-clear {
        color: #00bcdc;
        font-size: 14px;
      }
      &.vux-datetime-confirm {
        color: #00bcdc;
        font-size: 14px;
      }
    }
  }
}
</style>

