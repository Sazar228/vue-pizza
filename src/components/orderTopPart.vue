<template>
    <div class="flex justify-between">
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

<style lang="scss" scoped>

</style>