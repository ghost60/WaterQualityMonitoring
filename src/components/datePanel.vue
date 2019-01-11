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
      <datetime @on-change="endChange" clear-text="结束时间">
        <span class="card-time-defult">{{endTime}}</span>
      </datetime>
    </div>
    </div>
     <toast v-model="warnToast" type="warn" width="80%">{{msg}}</toast>
  </div>
</template>
<script>
import Select from "./select/select";
import SelectItem from "./select/select-item";
import { Datetime, Toast } from "vux";

Date.prototype.format = function(format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    S: this.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format))
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return format;
};

export default {
  name: "DatePanel",
  components: { Select, SelectItem, Datetime, Toast },
  data() {
    return {
      showTime: false,
      startTime: "选择开始时间",
      endTime: "选择结束时间",
      warnToast:false,
      msg:''
    };
  },
  watch: {
    startTime() {
      this.ifTime()
    },
    endTime() {
      this.ifTime()
    }
  },
  mounted(){
    this.onSelect(24)
  },
  methods: {
    onSelect(e) {
      let endTime = new Date();
      let startTime24 = new Date(endTime - 24 * 60 * 60 * 1000).format("yyyy-MM-dd hh:mm:ss");
      let startTime7 = new Date(endTime - 7 * 24 * 60 * 60 * 1000).format("yyyy-MM-dd hh:mm:ss");
      let startTime30 = new Date(endTime - 30 * 24 * 60 * 60 * 1000).format("yyyy-MM-dd hh:mm:ss");
      switch (e) {
        case 24:
          this.showTime = false;
          this.$emit("selectDate", startTime24, endTime.format("yyyy-MM-dd hh:mm:ss"));
          break;
        case 7:
          this.showTime = false;
          this.$emit("selectDate", startTime7, endTime.format("yyyy-MM-dd hh:mm:ss"));
          break;
        case 30:
          this.showTime = false;
          this.$emit("selectDate", startTime30, endTime.format("yyyy-MM-dd hh:mm:ss"));
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
    },
    ifTime(){
      debugger
      if (
        this.endTime != "选择结束时间" &&
        new Date(this.startTime) < new Date(this.endTime)
      ) {
        if((new Date(this.endTime) - new Date(this.startTime))/( 1000 * 60 * 60 * 24)>90){
          this.msg="时间间隔不能超过90天！"
          this.warnToast=true
        }else{
          this.$emit("selectDate", this.startTime + " 00:00:00", this.endTime + " 00:00:00");
        }
      }else if(
        this.endTime != "选择结束时间" &&
        new Date(this.startTime) > new Date(this.endTime)
      ){
        this.msg="开始时间不能大于结束时间！"
        this.warnToast=true
      }
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
    a{
      display: inline;
    }
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

