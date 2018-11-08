<template>
  <div class="panel">
    <div class="null"></div>
    <div v-for="(item,index) in dataList" :key=index>
    <Cell :title="item.location" :lable="item.cn_name" :value="item.num+item.unit"/>
    </div>
    <toast v-model="warnToast" type="warn" >服务端异常</toast>
  </div>
</template>

<script>
import Cell from "@/components/cell";
import axios from "axios";
import { Toast } from "vux";

export default {
  name: "Real",
  components: { Cell, Toast },
  data() {
    return {
      dataList: [],
      warnToast: false
    };
  },
  mounted() {
    this.getSensorsStationId();
  },
  methods: {
    getSensorsStationId() {
      const _vm = this;
      axios({
        method: "get",
        url: "/cw/sensors-stationId/" + "1",
        headers: {
          username: localStorage.getItem("username"),
          stationId: "1",
          token: localStorage.getItem("token"),
          uri: "test",
          type: "API"
        }
      })
        .then(response => {
          if (response.data) {
            var oldlist = response.data.data;
            for (let i = 0; i < oldlist.length; i++) {
              if (oldlist[i].unit == "暂时没有单位") {
                oldlist[i].unit = "";
              }
            }
            this.getSensorData(oldlist, _vm);
          }
        })
        .catch(error => {
          this.warnToast = true;
        });
    },

    getSensorData(oldlist, _vm) {
      let ws = null;
      let list = oldlist;
      if ("WebSocket" in window) {
        ws = new WebSocket("ws://192.168.0.220:18888" + "//webSocket/123456");
        ws.onopen = function() {
          let id = [];
          list.forEach(element => {
            id.push(element.equipId);
          });
          ws.send(JSON.stringify({ type: "recyclewater", data: id }));
        };
        ws.onmessage = function(evt) {
          let num = JSON.parse(evt.data);
          for (let i = list.length - 1; i >= 0; i--) {
            for (let j = num.length - 1; j >= 0; j--) {
              if (list[i].equipId == num[j].id) {
                list[i].num = num[j].value;
              }
            }
          }
          _vm.dataList = list;
        };
      }
    }
  }
};
</script>
