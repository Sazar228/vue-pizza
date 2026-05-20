<template>
  <div class="w-full mt-5 shadow border-slate-200 h-full rounded order-card">
    <div class="flex items-center p-2 card-inner">
      <img :src="image" alt="" class="w-25 h-25 mr-5 pointer-events-none" />
      <div class="w-70 info">
        <h1 class="font-bold text-xl">{{ name }}</h1>
        <p class="text-slate-500">
            <span v-if="defType === 'thin'">тонкое тесто</span>
            <span v-else>толстое тесто</span>
            , {{ defSize }} см.</p>
      </div>

      <div class="flex w-4/6 justify-around actions">
        <div class="flex items-center gap-3">
        <div @click="removeToCart(id,finalPrice)" class="w-6 h-6 border-2 rounded-full flex items-center justify-center border-orange-700 text-orange-700">
          <span class="text-xl font-bold leading-none mb-1">−</span>
        </div>
        <div @click="addToCart(id,finalPrice)" class="w-6 h-6 border-2 rounded-full flex items-center justify-center border-orange-700 text-orange-700">
          <span class="text-xl font-bold leading-none mb-1">+</span>
        </div>
      </div>

      <p class="ml-10 font-bold text-lg">{{ finalPrice }} ₽</p>

      <div @click="removeToCart(id,finalPrice)" class="ml-10 w-8 h-8 border-2 border-slate-300 rounded-full flex items-center justify-center">
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
  padding: 12px;
}

.order-card img {
  width: 100px;
  height: auto;
  margin-right: 15px;
  border-radius: 8px;
}

.order-card .info {
  flex: 1;
}

.order-card .actions {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
}

@media (max-width: 768px) {
  .order-card .actions {
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .order-card .actions div,
  .order-card .actions p {
    margin: 0;
  }
}

@media (max-width: 480px) {
  .order-card .actions {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }

  .order-card .actions div,
  .order-card .actions p {
    margin: 0;
  }
}


</style>