<template>
  <div class="flex justify-between mt-5">
    <p class="text-xl">
      Всего пицц : <span class="font-bold text-lg">{{ cartCount }} шт</span>
    </p>
    <p class="text-xl">
      Сумма заказа :
      <span class="text-orange-500 font-bold text-lg"
        >{{ allPriceCart }} ₽</span
      >
    </p>
  </div>

  <div class="flex justify-between mt-5">
    <RouterLink to="/"
      ><div class="border border-slate-200 text-slate-500 p-3 rounded-full">< Вернуться назад</div></RouterLink>
    <div
    @click="clearCart"
      class="border border-orange-500 text-white bg-orange-500 p-3 rounded-full"
    >
      Оплатить сейчас
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const { cartCount } = inject("cartCount");
    const allPriceCart = inject("allPriceCart");
    const { clearCart } = inject("doOrders");

    return {
      cartCount,
      allPriceCart,
      clearCart
    };
  },
};
</script>

<style lang="scss" scoped></style>
