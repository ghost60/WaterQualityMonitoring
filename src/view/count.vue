<template>
  <div class="panel">
      <div class="null"></div>
      <DatePanel @selectDate="queryMonitorData"/>
      <div v-for="(item,index) in dataList" :key=index>
        <LineChart :xid=index :items="item"/>
      </div>
       <toast v-model="cancelToast" type="cancel" >暂时没有数据</toast>
       <toast v-model="warnToast" type="warn" >服务端异常</toast>
  </div>
</template>
<script>
import DatePanel from "@/components/datePanel";
import LineChart from "@/components/lineChart";
import { Toast } from "vux";
import axios from "axios";

export default {
  name: "Count",
  components: { DatePanel, LineChart, Toast },
  data() {
    return {
      cancelToast: false,
      warnToast: false,
      dataList: [],
      vdata: {
        unit: "℃",
        name: "温度",
        xData: [
          "2018-10-23",
          "2018-10-23",
          "2018-10-23",
          "2018-10-23",
          "2018-10-23",
          "2018-10-23",
          "2018-10-23",
          "2018-10-23"
        ],
        yData: [19.7, 19.7, 19.7, 19.7, 19.7, 19.7, 19.7, 19.7],
        key: "temperature-001",
        local: "鱼道口"
      }
    };
  },
  methods: {
    queryMonitorData(startTime, endTime) {
      const _vm = this;
      axios({
        method: "get",
        url: "/cw/sensors-history-stationId/" + "1",
        params: {
          startTime: startTime,
          endTime: endTime
        },
        headers: {
          username: localStorage.getItem("username"),
          stationId: "1",
          token: localStorage.getItem("token"),
          uri: "test",
          type: "API"
        }
      }).then(res => {
        if (res.data.message == "服务端异常") {
          this.warnToast = true;
        } else if (res.data.message == "暂时没有数据!") {
          this.cancelToast = true;
        } else if(res.data){
          _vm.dataList = this.parseData(res.data.data);
        }
      }).catch(error=>{
        this.warnToast = true;
      })
    },
    parseData(dt) {
      let list = [];
      dt.map(item => {
        item.data.map(e => {
          let itemObj = {};
          itemObj.type = item.type;
          itemObj.local = e.name;
          itemObj.x = e.x;
          itemObj.y = e.y;
          list.push(itemObj);
        });
      });
      return list;
    }
  }
};
</script>

