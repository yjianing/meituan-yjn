<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo">美团</a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="ruleForm.rePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button 
            type="primary" 
            @click="submitForm('ruleForm')"
            class="btn"
          >
            同意以下协议并注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from '@/axios';

export default {
  data() {
    const validateuserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码必须为6-16位"));
      } else {
        callback();
      }
    }
    const validateCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        userName: '',
        password: '',
        rePassword: ''
      },
      rules: {
        userName: [{ validator: validateuserName, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        rePassword: [{ validator: validateCheck, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.register({
            params: this.ruleForm
          }).then(res => {
            // console.log(res);
            this.$router.push({
              name: 'login'
            });
          });
        } else {
          alert("error submit!");
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>
