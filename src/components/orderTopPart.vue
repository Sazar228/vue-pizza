<template>
    <div class="flex justify-between cart-header">
      <div class="flex items-center">
        <img src="/CartCart.svg" alt="" class="w-6 h-6 pointer-events-none" />
        <p class="font-bold text-2xl ml-3">Корзина</p>
      </div>
      <div @click="clearCart" class="flex items-center">
        <img src="/clearCart.svg" alt="" class="w-5 h-5 pointer-events-none" />
        <p class="text-slate-500 ml-1">Очистить корзину</p>
      </div>
      
    </div>
</template>

<script>
import { inject } from 'vue';

    export default {
        setup(){
          const { clearCart } = inject('doOrders')

          return{
            clearCart
          }
        }
    }
</script>

<style scoped>
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

@media (max-width: 768px) {
  .cart-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .cart-header p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .cart-header {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .cart-header p {
    font-size: 1rem;
    text-align: center;
  }

  .cart-header img {
    width: 20px;
    height: 20px;
  }
}

</style>