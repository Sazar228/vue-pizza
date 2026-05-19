<template>
    <h1 class="font-bold text-2xl p-5">Все пиццы</h1>

  <div v-auto-animate class="p-5 flex grid grid-cols-4">
    <Cartochka
    v-for="pizza in pizzas"
    :id="pizza.id"
    :key="pizza.id"
    :name="pizza.name"
    :price="pizza.price"
    :image="pizza.image"
    :defType="pizza.defType"
    :defSize="pizza.defSize"
    
    />
  </div>
</template>

<script>
import Cartochka from "./cartochka.vue";

export default {
  components: {
    Cartochka,
  },
  props:{
    pizzas:Array,
  }
};
</script>

<style scoped></style>
