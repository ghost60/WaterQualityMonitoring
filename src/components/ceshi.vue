<template>
<div v-bind="$attrs">
  <p>ceshi1</p>
  <input :placeholder="$attrs.placeholder" @change="input">
  <p>ceshi1</p>
  <ceshi2 v-bind="$attrs" v-on="$listeners"/>
  <p>ceshi2</p>
</div>
</template>
<script>
import ceshi2 from "./ceshi2"
export default {
  inheritAttrs: false,
  components:{ceshi2},
  methods:{
     input(event) {
       this.$emit("input", event.target.value)
     }
  }
};
</script>