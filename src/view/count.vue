<template>
<div>
  <ceshi placeholder="xx" cc1="cc1-" cc2="cc2-" @input="oninput" @test="onTest"/>
  <div>{{inputListeners}}</div>
</div>
</template>
<script>
import ceshi from "../components/ceshi"
  export default{
    components:{ceshi},
    data(){
      return{
        inputListeners:''
      }
    },
    methods:{
      oninput(e){
        debugger
        this.inputListeners=e
      },
      onTest(e){
        debugger
        this.inputListeners=e
      }
    },

  }
</script>