<template>
    <header class="p-10 flex justify-between border-b border-slate-300">
      <RouterLink to="/">
        <div class="flex">
        <img src="/pizza_logo.svg" alt="" class="w-10 pointer-events-none" />
        <div class="ml-5">
          <h1 class="text-xl font-bold">VUE PIZZA</h1>
          <p class="text-slate-500">самая вкусная пицца во вселенной</p>
        </div>
      </div>
      </RouterLink>

      <RouterLink
      to="/orders"
      >
        <div
        class="bg-orange-600 rounded-full w-35 flex items-center justify-between text-white font-bold all_mini h-10"
      >
        <p class="ml-3">{{ allPriceCart }} ₽</p>
        <div class="border-l-slate-200 border h-3/5 opacity-25"></div>
        <div class="flex items-center mr-3">
          <img src="/cart.svg" class="w-4" alt="" />
          <p class="ml-2">{{ cartCount }}</p>
        </div>
      </div>
      </RouterLink>
    </header>
</template>

<script>
import { inject } from 'vue';

    export default {
        setup(){
          const allPriceCart = inject('allPriceCart')
          const { cartCount } = inject('cartCount')

          return{
            allPriceCart,
            cartCount
          }
        }
    }
</script>

<style scoped>
.all_mini {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.all_mini:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #cbd5e1;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  header h1 {
    font-size: 1.2rem;
  }

  header p {
    font-size: 0.9rem;
  }

  .all_mini {
    width: 100%;
    justify-content: space-around;
  }
}

@media (max-width: 480px) {
  header {
    padding: 10px;
  }

  header h1 {
    font-size: 1rem;
  }

  header p {
    font-size: 0.8rem;
  }

  .all_mini {
    width: 100%;
    height: auto;
    padding: 8px;
    font-size: 0.8rem;
  }

  .all_mini p {
    margin: 0;
  }

  .all_mini img {
    width: 14px;
  }
}

</style>