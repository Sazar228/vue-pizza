<template>
  <div class="flex justify-between mt-5 order-summary">
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

  <div class="flex justify-between mt-5 order-summary">
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

<style scoped>
.order-summary {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;
}

@media (max-width: 768px) {
  .order-summary {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .order-summary p {
    font-size: 1rem;
  }

  .order-summary div {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .order-summary {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .order-summary p {
    font-size: 0.9rem;
    text-align: center;
  }

  .order-summary div {
    width: 100%;
    font-size: 0.85rem;
    padding: 8px;
  }
}

</style>
