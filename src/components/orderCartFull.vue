<template>
  <div class="w-full mt-5 shadow border-slate-200 h-full rounded order-card">
    <div class="card-inner">
      <img :src="image" alt="" class="pointer-events-none" />
      <div class="info">
        <h1 class="font-bold text-xl">{{ name }}</h1>
        <p class="text-slate-500">
            <span v-if="defType === 'thin'">тонкое тесто</span>
            <span v-else>толстое тесто</span>
            , {{ defSize }} см.</p>
      </div>

      <div class="actions">
        <div class="flex items-center gap-3">
        <div @click="removeToCart(id,finalPrice)" class="w-6 h-6 border-2 rounded-full flex items-center justify-center border-orange-700 text-orange-700">
          <span class="text-xl font-bold leading-none mb-1">−</span>
        </div>
        <div @click="addToCart(id,finalPrice)" class="w-6 h-6 border-2 rounded-full flex items-center justify-center border-orange-700 text-orange-700">
          <span class="text-xl font-bold leading-none mb-1">+</span>
        </div>
      </div>

      <p class="ml-10 font-bold text-lg">{{ finalPrice }} ₽</p>

      <div @click="removeToCart(id,finalPrice)" class="remove-item ml-10 w-8 h-8 border-2 border-slate-300 rounded-full flex items-center justify-center">
        <span class="text-slate-500 font-bold mb-1">x</span>
      </div>
      </div>
    </div>
  </div>
</template>


<script>
import { inject } from 'vue';

    export default {
        props:{
            id:Number,
            name:String,
            finalPrice:Number,
            image:String,
            defType:String,
            defSize:String
        },

        setup(){
            const { addToCart,removeToCart } = inject('doOrders')

            return{
                addToCart,
                removeToCart
            }
        }
        
    }
</script>

<style scoped>
.order-card {
  width: 100%;
  margin-top: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.order-card .card-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 12px;
}

.order-card img {
  width: 100px;
  height: auto;
  margin-right: 15px;
  border-radius: 8px;
  flex-shrink: 0;
}

.order-card .info {
  flex: 1 1 150px;
  min-width: 0;
}

.order-card .actions {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1 1 100%;
  margin-top: 12px;
}

@media (max-width: 768px) {
  .order-card .remove-item {
    display: none;
  }

  .order-card .card-inner {
    gap: 12px;
  }

  .order-card img {
    width: 76px;
    margin: 0;
  }

  .order-card .actions {
    gap: 12px;
    justify-content: flex-end;
  }
}

@media (max-width: 560px) {
  .order-card .card-inner {
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 8px 12px;
    padding: 10px;
  }

  .order-card img {
    grid-row: span 2;
    width: 64px;
  }

  .order-card .info {
    min-width: 0;
  }

  .order-card .info h1 {
    font-size: 1rem;
  }

  .order-card .info p {
    font-size: 0.85rem;
  }

  .order-card .actions {
    grid-column: 2;
    width: 100%;
    justify-content: space-between;
    gap: 8px;
  }

  .order-card .actions > div:first-child {
    gap: 8px;
  }

  .order-card .actions p {
    font-size: 0.95rem;
    white-space: nowrap;
  }

  .order-card .info {
    flex-basis: 100%;
    text-align: center;
  }

  .order-card img {
    margin: 0 auto 10px;
  }

  .order-card .card-inner {
    flex-direction: column;
    align-items: center;
  }
}
</style>