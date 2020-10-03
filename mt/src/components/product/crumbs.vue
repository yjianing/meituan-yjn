<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>{{ position.name }}美团</el-breadcrumb-item>
    <template v-if="$route.params.product">
      <el-breadcrumb-item>{{ position.name }}{{ $route.params.product }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.params.detail.title }}</el-breadcrumb-item>
    </template>
    <template v-else>
      <el-breadcrumb-item>{{ position.name }}{{ $route.params.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
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
