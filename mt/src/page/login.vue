<template>
  <div class="page-login">
    <div class="login-header">
      <a href="http://www.meituan.com" class="logo"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          alt=""
        />
      </div>
      <div class="form">
        <h4 class="tips" v-if="error">
          <i class="el-lcon-remove"></i>
          {{ error }}
        </h4>
        <p class="title">
          <span>
            账户登录
            <a href="#">
              手机动态登录
              <i class="el-icon-mobile"></i>
            </a>
          </span>
        </p>
        <el-input placeholder="手机号" prefix-icon="profile" v-model="phone">
        </el-input>
        <el-input placeholder="密码" prefix-icon="password" v-model="password">
        </el-input>
        <div class="foot">
          <a href="#">忘记密码?</a>
        </div>
        <el-button type="primary" class="btn-login" @click="submit"
          >登录</el-button
        >
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{ name: 'register' }">免费注册</router-link>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="">关于美团</a></li>
        <li><a href="">加入我们</a></li>
        <li><a href="">商家入驻</a></li>
        <li><a href="">帮助中心</a></li>
        <li><a href="">美团手机版</a></li>
      </ul>
      <p>
        ©<span>2020</span>
        <a href="https://www.meituan.com">美团网团购</a>
        meituan.com
        <a href="http://www.miibeian.gov.cn/" target="_blank"
          >京ICP证070791号</a
        >
        京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>

<script>
import api from "@/axios";
export default {
  data() {
    return {
      phone: "",
      password: "",
      error: "",
    };
  },
  methods: {
    submit() {
      if (!this.phone) {
        this.error = "请输入手机号";
        return false;
      }
      if (!this.password) {
        this.error = "请输入密码";
        return false;
      }
      const { password } = this;
      api.login({
        params: {
          userName: this.phone,
          password: this.password,
        },
      })
      .then((res) => {
        if (res.status === 'success') {
          console.log(res);
        } else {
          this.error = res.msg;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>
