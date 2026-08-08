<template>
  <div v-auto-animate class="w-5/6 m-auto p-10 order">
    <OrderTopPart />

    <OrderCartEmpty v-if="carts.length === 0 && !isAdded" />

    <OrderCartFull
      v-for="cart in carts"
      :key="cart.id"
      :id="cart.id"
      :image="cart.image"
      :name="cart.name"
      :finalPrice="cart.finalPrice"
      :defType="cart.defType"
      :defSize="cart.defSize"
      v-else
    >
    </OrderCartFull>

    <OrderEnd v-if="carts.length >= 1"/>
    
  </div>

</template>

<script>
import OrderCartEmpty from "./orderCartEmpty.vue";
import OrderCartFull from "./orderCartFull.vue";
import OrderTopPart from "./orderTopPart.vue";
import OrderEnd from "./orderEnd.vue";
export default {
  components: {
    OrderCartEmpty,
    OrderCartFull,
    OrderTopPart,
    OrderEnd
  },
  props: {
    carts: Array,
    isAdded: Boolean,
  },
  
};
</script>

<style scoped>
.order-container {
  width: 83%;
  margin: 0 auto;
  padding: 40px;
}

@media (max-width: 768px) {
  .order-container {
    width: 95%;
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .order-container {
    width: 100%;
    padding: 10px;
  }

  .order-container h1 {
    font-size: 1rem;
    text-align: center;
  }

  .order-container .order-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .order-container button {
    width: 100%;
    font-size: 0.85rem;
    margin-top: 8px;
  }
}

</style>
