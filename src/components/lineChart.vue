<template>
  <div class="card-body">
    <div class="card-border">
    <div class="card-title">
      {{items.local}}
    </div>
    <div class="card-chart" :id="xid"/>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "line-chart",
  props: {
    items: Object,
    xid: Number
  },
  computed: {
    getxid() {
      return `xid${this.xid}`;
    }
  },
  mounted() {
    const option = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: this.items.x,
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#b5b5b5", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: "#777777" //坐标值得具体的颜色
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: this.items.type,
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#b5b5b5", //左边线的颜色
              width: "1" //坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: "#777777" //坐标值得具体的颜色
            }
          }
        }
      ],
      series: {
        data: this.items.y,
        type: "line",
        itemStyle: {
          normal: {
            color: "#03bddc"
          }
        }
      }
    };
    const chartObj = echarts.init(document.getElementById(this.xid));
    chartObj.setOption(option);
    window.addEventListener("resize", function() {
      chartObj.resize();
    });
  }
};
</script>
<style lang="less">
.card-body {
  background-color: #ffffff;
  padding: 0px 15px;
  .card-title {
    font-size: 14px;
    color: #333333;
  }
  .card-chart {
    width: 100%;
    height: 220px;
    margin-top: -38px;
  }
}
.card-border {
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #e6e6e6;
  padding: 8px 0px;
}
</style>