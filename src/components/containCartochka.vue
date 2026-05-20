<template>
    <h1 class="font-bold text-2xl p-5">Все пиццы</h1>

  <div v-auto-animate class="p-5 flex grid grid-cols-4 pizza-grid">
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
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 20px;
}

@media (max-width: 1024px) {
  .pizza-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .pizza-grid {
    grid-template-columns: 1fr;
    padding: 10px;
  }
}

</style>
