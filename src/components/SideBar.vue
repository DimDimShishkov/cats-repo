<template>
  <div class="sidebar">
    <AccordionList>
      <AccordionItem>
        <template #summary><p class="sidebar__text">Сharacters</p></template>
        <AccordionList open-multiple-items>
          <input type="text" placeholder="put name of character" />
          <AccordionItem>
            <template #summary><p class="sidebar__text">status</p></template>
            <label> <input type="checkbox" />Alive </label>
            <label> <input type="checkbox" />Dead </label>
            <label> <input type="checkbox" />unknown </label>
          </AccordionItem>
          <AccordionItem>
            <template #summary><p class="sidebar__text">gender</p></template>
            Female, Male, Genderless or unknown
          </AccordionItem>
          <AccordionItem>
            <template #summary><p class="sidebar__text">species</p></template>
            "Human", "Alien", "Humanoid", "unknown", "Poopybutthole",
            "Mythological Creature", "Animal", "Robot", "Cronenberg", "Disease"
          </AccordionItem>
        </AccordionList>
      </AccordionItem>
      <AccordionItem>
        <template #summary><p class="sidebar__text">Episodes</p></template>
        Here some text of nested item-2
      </AccordionItem>
    </AccordionList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar {
  padding: 5px;
  border-right: 1px solid black;
  height: 100vh;
}
.sidebar__text {
  @include text();
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
