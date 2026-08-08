<template>
    <div
    class="flex flex-col items-center text-center p-20 empty-cart"
  >
    <h1 class="font-bold text-2xl mb-2">Корзина пустая 😕</h1>
    <p class="text-slate-400 mb-12">
      Вероятней всего, вы не заказывали ещё пиццу. <br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src="/shopping-cart-colour.png" alt="" class="w-70 h-50 pointer-events-none" />
    <RouterLink to="/">
      <div class="w-35 bg-black text-white p-2 mt-10 rounded-2xl all_mini back-btn">
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
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
}

.empty-cart h1 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.empty-cart p {
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 30px;
}

.empty-cart img {
  max-width: 300px;
  height: auto;
}

.empty-cart .back-btn {
  width: 200px;
  background: #000;
  color: #fff;
  padding: 10px;
  margin-top: 20px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.empty-cart .back-btn:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

@media (max-width: 768px) {
  .empty-cart {
    padding: 40px 15px;
  }

  .empty-cart h1 {
    font-size: 1.2rem;
  }

  .empty-cart p {
    font-size: 0.9rem;
  }

  .empty-cart img {
    max-width: 250px;
  }

  .empty-cart .back-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .empty-cart {
    padding: 20px 10px;
  }

  .empty-cart h1 {
    font-size: 1rem;
  }

  .empty-cart p {
    font-size: 0.8rem;
  }

  .empty-cart img {
    max-width: 200px;
  }

  .empty-cart .back-btn {
    width: 100%;
    font-size: 0.85rem;
    padding: 8px;
  }
}

</style>