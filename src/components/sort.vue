<template>
  <div class="flex justify-between items-center p-5 sort-header">
    <SortMenu :filters="filters" />
    <div class="flex">
      <img src="/Vector.svg" alt="" class="mr-1" />
      <p class="font-bold">Сортировка по :</p>
      <vueSelect v-model="filters.sortBy" />
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
  props: {
    filters: Object,
  },
};
</script>

<style scoped>
.sort-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

@media (max-width: 768px) {
  .sort-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .sort-header p {
    font-size: 1rem;
  }

  .sort-header img {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .sort-header {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }

  .sort-header p {
    font-size: 0.9rem;
    text-align: center;
  }

  .sort-header img {
    width: 16px;
    height: 16px;
  }

  .sort-header .flex {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
}
</style>
