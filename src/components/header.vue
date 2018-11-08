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
    title: String
  }
};
</script>
<style>
.header {
  height: 48px;
  background-color: #ffffff;
  text-align: center;
  line-height: 48px;
  margin-bottom: 13px;
  font-size: 18px;
  color: #333333;
}
</style>
