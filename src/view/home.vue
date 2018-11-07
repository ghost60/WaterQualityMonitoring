<template>
  <div>
    <Header title="沙坪二级鱼道"></Header>
    <router-view></router-view>
    <tabbar>
      <tabbar-item selected link="/home/real">
        <img slot="icon" src="../assets/real.png">
        <img slot="icon-active" src="../assets/realed.png">
        <span slot="label">实时</span>
      </tabbar-item>
      <tabbar-item link="/home/count">
        <img slot="icon" src="../assets/count.png">
        <img slot="icon-active" src="../assets/counted.png">
        <span slot="label">统计</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar/tabbar";
import TabbarItem from "@/components/tabbar/tabbar-item";
import Header from "@/components/header";

export default {
  name: "Login",
  components: { Tabbar,  Header, TabbarItem },
  data() {
    return {
    };
  },
  created () {
      this.$router.push('/home/real')
    },
  methods: {}
};
</script>
