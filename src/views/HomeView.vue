<template>
  <div class="content">
    <div class="earth img"></div>
    <div class="rick img"></div>
    <div class="out img"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  // methods: {
  // }
});
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 10px;
}
.content {
  margin-top: 20px;
  width: 100%;
  // margin: 20px 20px 0;
  box-sizing: border-box;
}
.img {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
  margin: 0 200px;
}
.earth {
  background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 1) 80%
    ),
    url("../assets/HomeView/earth1.png");
}
.out {
  background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 1) 80%
    ),
    url("../assets/HomeView/output.jpg");
}
.rick {
  background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 1) 80%
    ),
    url("../assets/HomeView/rick.jpg");
}
</style>
