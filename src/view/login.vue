<template>
  <div>   
    <p>水质监测系统</p>
    <mt-field label="username" placeholder="Input username" v-model="username"></mt-field>
    <mt-field label="password" placeholder="Input password" type="password" v-model="password"></mt-field>
    <mt-button type="primary" v-on:click="login">primary</mt-button>
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