<template>
    <h1 class="font-bold text-2xl p-5">Все пиццы</h1>

  <div v-auto-animate class="pizza-grid">
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

<style scoped>
.pizza-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 16px;
  padding: 20px;
}

</style>
