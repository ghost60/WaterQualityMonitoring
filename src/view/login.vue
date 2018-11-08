<template>
  <div>   
    <p>水质监测系统</p>
    <input label="username" placeholder="Input username" v-model="username" />
    <input label="password" placeholder="Input password" type="password" v-model="password"/>
    <button type="primary" v-on:click="login">primary</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username == "admin") {
        this.$router.push({ path: '/home' });
      }
    }
  }
};
</script>