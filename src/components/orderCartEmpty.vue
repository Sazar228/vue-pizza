<template>
    <div
    class="flex flex-col items-center text-center p-20"
  >
    <h1 class="font-bold text-2xl mb-2">Корзина пустая 😕</h1>
    <p class="text-slate-400 mb-12">
      Вероятней всего, вы не заказывали ещё пиццу. <br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src="/shopping-cart-colour.png" alt="" class="w-70 h-50 pointer-events-none" />
    <RouterLink to="/">
      <div class="w-35 bg-black text-white p-2 mt-10 rounded-2xl all_mini">
        Вернуться назад
      </div>
    </RouterLink>
  </div>
</template>

<script>
    export default {
        
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
</style>