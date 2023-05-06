<template>
  <div class="home">
    <SideBar />
    <div class="content">
      <p>Hire your crew</p>
      <div class="grid-container">
        <CardItem
          v-for="card in cards"
          :key="card.id"
          :name="card.name"
          :link="card.image"
          :status="card.status"
          :race="card.species"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CardItem from "@/components/CardItem.vue";
import SideBar from "@/components/SideBar.vue";

declare interface ICharacter {
  gender: string;
  image: string;
  name: string;
  species: string;
  status: string;
  id: number;
}

export default defineComponent({
  name: "CrewView",
  components: {
    CardItem,
    SideBar,
  },
  data() {
    return {
      cards: [] as ICharacter[],
      isLoading: false,
    };
  },
  methods: {
    getCharacters() {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => (this.cards = data.results))
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getCharacters();
  },
});
</script>

<style>
.home {
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 0;
}
.content {
  margin: 20px 10px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
