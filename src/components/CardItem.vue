<template>
  <div class="item">
    <img
      v-bind:src="link"
      v-bind:alt="name || 'Sorry, but image is lost'"
      class="item__img"
    />
    <div class="item__desc">
      <p class="item__title">{{ name }}</p>
      <button class="item__like"></button>
    </div>
    <p class="item__subtitle">{{ numb }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardItem",
  props: {
    link: String,
    name: String,
    numb: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.item {
  background: $bgc-secondary;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  max-width: 270px;
  padding: 0 0 14px;
}
.item__img {
  list-style-type: none;
  padding: 0;
}
.item__desc {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 10px 12px;
}

.item__title {
  @include sub-text();
}
.item__subtitle {
  @include help-text();
}
</style>
