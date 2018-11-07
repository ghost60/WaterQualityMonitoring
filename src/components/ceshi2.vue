<template>
<div v-bind="$attrs">
  <p>{{$attrs.cc2}}</p>
</div>
</template>
<script>
export default {
  inheritAttrs: false,
  mounted() {
    this.$emit('test',"bb");
  }
};
</script>