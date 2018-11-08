<template>
  <div>
    <Cell :title="title" :lable="lable" :value="value"/>
    <Cell :title="title" :lable="lable" :value="value"/>
    <Cell :title="title" :lable="lable" :value="value"/>
    <Cell :title="title" :lable="lable" :value="value"/>
    <Cell :title="title" :lable="lable" :value="value"/>
  </div>
</template>
<script>
import Cell from "@/components/cell"
  export default{
    name:"Real",
    components:{Cell},
    data(){
      return{
        title:'位置',
        lable:'温度',
        value:'20℃'
      }
    }
  }
</script>