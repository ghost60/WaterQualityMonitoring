<template>
  <div class="panel">
    <div class="null"></div>
    <div class="account-bg">
      <div class="account-list">
        <span>{{this.name}}</span>
      </div>
      <div class="account-list">
        <span>{{this.role}}</span>
      </div>
      <div class="account-list logout">
        <span class="login-sublim" type="primary" v-on:click="logout">退出登录</span>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";
import { url } from "../common/global";

export default {
  name: "Account",
  data() {
    return {
      name: localStorage.getItem("username"),
      role: localStorage.getItem("roleName"),
    };
  },
  methods: {
    logout() {
       axios({
        method:'get',
        url:'http://120.78.180.96:8080/logout',
        headers:{
          username : localStorage.getItem('account'),
          token:localStorage.getItem("token"),
          projectEnglishName: 'recycledwater'
        }
      }).then(res => {
        if(res.data.message == '退出成功'){
          this.$router.push('/')
        }else if(res.data.message == '已经退出,无需重复退出'){
          this.$router.push('/')
        }
      })
    }
  }
};
</script>

<style lang="less">
.account-bg {
  background-color: #f3f3f3;
  height: 100vh;
}
.account-list {
  background-color: #ffffff;
  height: 45px;
  line-height: 45px;
  margin: 2px 0;
  font-size: 14px;
  &.logout {
    margin: 12px 0;
    background-color: #f53f3f;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>


