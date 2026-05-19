<template>
  <div v-auto-animate class="w-5/6 m-auto p-10">
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

<style scoped></style>
