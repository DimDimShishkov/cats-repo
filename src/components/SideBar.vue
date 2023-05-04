<template>
  <div class="sidebar">
    <AccordionList open-multiple-items>
      <AccordionItem>
        <template #summary><p class="sidebar__text">test1</p></template>
        сюда вставить ссылки
      </AccordionItem>
      <AccordionItem>
        <template #summary><p class="sidebar__text">фильтры</p></template>
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
