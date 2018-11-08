<template>
  <div>
      <DatePanel/>
      <LineChart xid="idx" :items="vdata"/>
      <LineChart xid="idx1" :items="vdata"/>
      <LineChart xid="idx2" :items="vdata"/>
      
  </div>
</template>
<script>
import DatePanel from "@/components/datePanel";
import LineChart from "@/components/lineChart";

export default {
  name: "Count",
  components: { DatePanel, LineChart },
  data() {
    return {
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
        local: "鱼道口",
      }
    };
  }
};
</script>