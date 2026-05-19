<template>
  <div class="w-full mt-5 shadow border-slate-200 h-full rounded">
    <div class="flex items-center p-2">
      <img :src="image" alt="" class="w-25 h-25 mr-5 pointer-events-none" />
      <div class="w-70">
        <h1 class="font-bold text-xl">{{ name }}</h1>
        <p class="text-slate-500">
            <span v-if="defType === 'thin'">тонкое тесто</span>
            <span v-else>толстое тесто</span>
            , {{ defSize }} см.</p>
      </div>

      <div class="flex w-4/6 justify-around">
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

</style>