<template>
    <div class="header">
      {{title}}
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
  font-size: 16px;
  color: #333333;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 100; 
  box-shadow: 0px 6px 5px -5px #d9d9d9;
}
</style>
