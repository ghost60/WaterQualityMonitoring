<template>
  <div class="login-back">   
    <img class="logo" src="../assets/login_logo.png">
    <p class="login-title">水质监测系统</p>
    <div class="login-input-panel up">
    <img src="../assets/user.png">
    <input class="login-input user" label="username" placeholder="输入用户名" v-model="username" />
    </div>
    <div class="login-input-panel down">
    <img src="../assets/password.png">
    <input class="login-input user" label="password" placeholder="输入密码" type="password" v-model="password"/>
    </div>
    <check-icon class="login-check" :value.sync="checked" type="plain">记住密码</check-icon>
    <button class="login-sublim" type="primary" v-on:click="login">登 录</button>
    <div class="login-foot">© 2017 易科捷（武汉）生态科技有限公司</div>
    <toast v-model="showToast" type="warn" width="80%">{{this.msg}}</toast>
  </div>
</template>

<script>
import { CheckIcon, Toast } from "vux";
import axios from "axios";
import { url } from "../common/global";
import { error } from "util";

export default {
  name: "Login",
  components: {
    CheckIcon,
    Toast
  },
  data() {
    return {
      username: "",
      password: "",
      checked: false,
      showToast: false,
      msg: ""
    };
  },
  mounted() {
    this.getCookie();
  },
  methods: {
    login() {
      axios({
        method: "get",
        // url: "http://192.168.0.145:8080/login",
        url: "/cw/login",
        data: {},
        headers: {
          username: this.username,
          password: this.password,
          projectEnglishName: "recycledwater"
        }
      })
        .then(res => {
          debugger
          console.log(JSON.stringify(res));
          if (res.data.status == true) {
            localStorage.setItem("username", this.username);
            localStorage.setItem("token", res.data.token);
            if(res.data.stationId){
              localStorage.setItem("stationId", res.data.stationId);
              localStorage.setItem("stationName", res.data.stationName);
            }
            if (this.checked == true) {
              this.setCookie(this.username, this.password, 7);
            } else {
              this.clearCookie();
            }
            this.$router.push({ path: "/home" });
          } else {
            this.msg = "用户名或密码错误！";
            this.showToast = true;
          }
        })
        .catch(error => {
          console.log(JSON.stringify(error));
          this.msg = "服务端异常！";
          this.showToast = true;
        });
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "checked" + "=" + this.checked + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.username = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.password = arr2[1];
          } else if (arr2[0] == "checked") {
            this.checked = arr2[1];
          }
        }
      }
    },
    //清除cookie
    clearCookie() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    }
  }
};
</script>

<style lang="less">
.login-back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #2a3342;
  .logo {
    width: 91px;
    height: 45px;
    margin-top: 42px;
  }
  .login-title {
    font-size: 16px;
    color: #ffffff;
    margin-top: 16px;
  }
  .login-input-panel {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 260px;
    height: 35px;
    border-radius: 18px;
    border: 1px solid #777777;
    &.up {
      margin-top: 38px;
    }
    &.down {
      margin-top: 18px;
      margin-bottom: 12px;
    }
    img {
      width: 24px;
      height: 24px;
      margin-left: 20px;
    }
    .login-input {
      border: none;
      background-color: #2b3441;
      width: 180px;
      height: 35px;
      margin-left: 12px;
      color: #777777;
    }
  }
  .login-check {
    margin-left: -176px;
    margin-bottom: 8px;
    .weui-icon-success {
      font-size: 18px;
      color: #00c2e0;
    }
    .weui-icon-success-circle {
      font-size: 18px;
      color: #00c2e0;
    }
    .weui-icon-success-circle:before {
      color: #00c2e0;
    }
    .weui-icon-circle {
      font-size: 18px;
      color: #777777;
    }
    span {
      font-size: 14px;
      line-height: 14px;
      color: #777777;
      vertical-align: middle;
    }
  }
  .login-sublim {
    width: 260px;
    height: 35px;
    background-color: #00c2e0;
    border: none;
    border-radius: 18px;
    color: #ffffff;
    font-size: 14px;
  }
  .login-foot {
    font-size: 12px;
    color: #c1c1c1;
    margin-top: 154px;
  }
}
</style>
