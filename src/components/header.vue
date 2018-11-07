<template>
  <div>
    <div class="header">
      {{title}}
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String,
    cc:String
  }
};
</script>
<style>
.header {
  height: 48px;
  background-color: #26a2ff;
  text-align: center;
  line-height: 48px;
}
</style>
