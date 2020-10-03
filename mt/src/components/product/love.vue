<template>
  <div>
    <h4>猜你喜欢</h4>
    <div v-for="item of productList" :key="item.itemId">
      <img :src="item.image" alt="" />
      {{ item.title }}
      <p>
        <span v-for="(data, index) of item.tab" :key="data">
          {{ data + (index < item.tab.length - 1 ? " /" : "") }}
        </span>
      </p>
      <p>
        <span>￥{{ item.avgPrice }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/axios";
export default {
  data() {
    return {
      productList: [],
    };
  },
  created() {
    api.getProductList().then((res) => {
      this.productList = res;
    });
  },
};
</script>

<style></style>
