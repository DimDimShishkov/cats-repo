<template>
  <div class="item">
    <img
      v-bind:src="link"
      v-bind:alt="name || 'Sorry, but image is lost'"
      class="item__img"
    />
    <p class="item__title">{{ name }}</p>
    <div class="item__info">
      <span
        class="item__status"
        :style="{
          backgroundColor:
            status === 'Dead' ? 'red' : status === 'unknown' ? 'gray' : 'green',
        }"
      />
      <p class="item__subtitle">{{ status }} / {{ race }}</p>
      <button class="item__like"></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardItem",
  props: {
    link: String,
    name: String,
    status: String,
    race: String,
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
  border-radius: 10px 10px 0 0;
  width: 100%;
}
.item__status {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.item__title {
  @include sub-text();
  padding: 5px 12px;
}
.item__subtitle {
  @include help-text();
  text-transform: capitalize;
}
.item__info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 0 12px;
}
.item__like {
  background: url(../assets/movies-card_like.svg) center no-repeat;
  background-size: 16px 16px;
  width: 16px;
  height: 16px;
  border: none;
  transition: all 0.3s ease;
  padding: 0;
  margin-left: auto;
  &:hover {
    transform: scale(1.2);
  }
  &_active {
    background: url(../assets/movies-card_like_active.svg) center no-repeat;
  }
}
</style>
