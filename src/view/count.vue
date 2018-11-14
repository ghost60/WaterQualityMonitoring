<template>
  <div class="panel">
      <div class="null"></div>
      <DatePanel @selectDate="queryMonitorData"/>
      <div v-for="(item,index) in dataList" :key=index>
        <LineChart :xid="index" :items="item"/>
      </div>
       <toast v-model="cancelToast" type="cancel"  width="50%">暂时没有数据</toast>
       <toast v-model="warnToast" type="warn"  width="50%">服务端异常</toast>
  </div>
</template>
<script>
import DatePanel from "@/components/datePanel";
import LineChart from "@/components/lineChart";
import { Toast } from "vux";
import axios from "axios";
import { url } from "../common/global";

export default {
  name: "Count",
  components: { DatePanel, LineChart, Toast },
  data() {
    return {
      cancelToast: false,
      warnToast: false,
      dataList: []
    };
  },
  methods: {
    queryMonitorData(startTime, endTime) {
      const _vm = this;
      axios({
        method: "get",
        // url: "http://192.168.0.145:8080/sensors-history-stationId/" + localStorage.getItem("stationId"),
        url: "/cw/sensors-history-stationId/" + "1",
        params: {
          startTime: startTime,
          endTime: endTime
        },
        headers: {
          username: localStorage.getItem("username"),
           stationId: localStorage.getItem("stationId"),
          token: localStorage.getItem("token"),
          uri: "sensors-history-stationId",
          type: "API"
        }
      })
        .then(res => {
          console.log(JSON.stringify(res));
          if (res.data.message == "服务端异常") {
            this.warnToast = true;
          } else if (res.data.message == "暂时没有数据!") {
            _vm.dataList=[]
            this.cancelToast = true;
          } else if (res.data) {
            _vm.dataList = this.parseData(res.data.data);
          }
        })
        .catch(error => {
          console.log(JSON.stringify(error));
          this.warnToast = true;
        });
    },
    parseData(dt) {
      let list = [];
      dt.map(item => {
        item.data.map(e => {
          let itemObj = {};
          itemObj.type = item.type;
          itemObj.local = e.name;
          let data = [];
          for (let i = 0; i <= e.x.length - 1; i++) {
            let xy = {};
            xy.x = e.x[i].substr(5,11);
            xy.y = e.y[i];
            data.push(xy);
          }
          itemObj.data = data;
          list.push(itemObj);
        });
      });
      return list;
    }
    // parseData(dt) {
    //   let list = [];
    //   dt.map(item => {
    //     item.data.map(e => {
    //       let itemObj = {};
    //       itemObj.type = item.type;
    //       itemObj.local = e.name;
    //       itemObj.x = e.x;
    //       itemObj.y = e.y;
    //       list.push(itemObj);
    //     });
    //   });
    //   return list;
    // }
  }
};
</script>

