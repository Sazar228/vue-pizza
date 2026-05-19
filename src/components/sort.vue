<template>

    
  <div class="flex justify-between items-center p-5">
    <SortMenu :filters="filters"/>
    <div class="flex">
      <img src="/Vector.svg" alt="" class="mr-1" />
      <p class="font-bold">Сортировка по :</p>
      <vueSelect v-model="filters.sortBy"/>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import SortMenu from "./sortMenu.vue";

export default {
  components: {
    SortMenu,
  },
  props:{
    filters:Object
  },

};
</script>

<style lang="scss" scoped></style>
