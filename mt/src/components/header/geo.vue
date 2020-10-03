<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"></i>
      <!-- {{ $store.state.position.name }} -->
      {{ position.name }}
      <router-link to="/changecity" class="changeCity">切换城市</router-link>
      [
      <a href="#" class="city-guess">北京</a>
      <a href="#" class="city-guess">涿州</a>
      <a href="#" class="city-guess">固安县</a>
      ]
    </div>
    <div class="m-user">
      <router-link :to="{name: 'login'}" class="login">立即登录</router-link>
      <router-link :to="{name: 'register'}" class="register">注册</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['position'])
  }
};
</script>

<style></style>
