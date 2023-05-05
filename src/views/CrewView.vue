<template>
  <div class="home">
    <SideBar />
    <div class="content">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      <CardItem name="test" numb="10" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CardItem from "@/components/CardItem.vue";
import SideBar from "@/components/SideBar.vue";

export default defineComponent({
  name: "CrewView",
  components: {
    HelloWorld,
    CardItem,
    SideBar,
  },
  // methods: {
  // }
});
</script>

<style>
.home {
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 10px;
}
.content {
  margin-top: 20px;
}
</style>
