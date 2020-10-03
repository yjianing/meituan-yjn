<template>
  <div class="map">
    <div class="map-1">
      <img
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1180991607,2645758304&fm=26&gp=0.jpg"
        alt=""
      />
    </div>
    <div class="map-2">
      <love />
    </div>
  </div>
</template>

<script>
import api from "@/axios";
import love from './love'
export default {
  components: {
    love,
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/mapRecommended.scss";
</style>
