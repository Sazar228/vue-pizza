<template>
  <div class="flex flex-col items-center p-2 rounded-xl w-3xs mt-5 card">
    <!-- cartochka  -->
    <img :src="image" alt="" class="w-3xs ml-3 pointer-events-none" />
    <h1 class="font-bold mb-3">{{ name }}</h1>
    <div
      class="mt-2 w-full h-22 flex flex-col items-center bg-gray-100 rounded-xl p-2 font-bold"
    >
      <div class="flex gap-2 mb-2 items-center w-full">
        <button
          @click="changeType(id, 'thin')"
          class="transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          :class="[
            'flex-1 h-8 rounded',
            defType === 'thin' ? 'bg-white' : 'bg-gray-100',
          ]"
        >
          тонкое
        </button>
        <button
          @click="changeType(id, 'traditional')"
          class="transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          :class="[
            'flex-1 text-sm h-8 rounded',
            defType === 'traditional' ? 'bg-white' : 'bg-gray-100',
          ]"
        >
          традиционное
        </button>
      </div>

      <div class="flex gap-2 items-center w-full h-10">
        <button
          @click="changeSize(id, '26')"
          class="p-1 transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          :class="[
            'flex-1 text-sm w-full rounded',
            defSize === '26' ? 'bg-white' : 'bg-gray-100',
          ]"
        >
          26 см
        </button>
        <button
          @click="changeSize(id, '30')"
          class="p-1 transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          :class="[
            'flex-1 text-sm w-full rounded',
            defSize === '30' ? 'bg-white' : 'bg-gray-100',
          ]"
        >
          30 см
        </button>
        <button
          @click="changeSize(id, '40')"
          class="p-1 transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          :class="[
            'flex-1 text-sm w-full rounded',
            defSize === '40' ? 'bg-white' : 'bg-gray-100',
          ]"
        >
          40 см
        </button>
      </div>
    </div>
    <div class="w-full flex justify-between items-center mt-3">
      <h1 class="font-bold text-xl">от {{ readyPrice }} ₽</h1>
      <Transition name="fade" mode="out-in">
        <div
        v-if="!added"
        @click="changeBtn()"
        class="bg-orange-600 p-1.5 rounded-2xl w-3/6 text-center text-white font-bold">
        <p>+ Добавить</p>
      </div>
        <div v-else class="bg-black p-2 rounded-2xl w-3/6 text-center text-purple-700 font-bold">
        <p class="text-sm">Добавлено ✔️</p>
      </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";

export default {
  props: {
    name: String,
    price: Number,
    image: String,
    id: Number,
    defType: String,
    defSize: String,
  },
  setup(props) {
    const changeType = inject("doughType");
    const changeSize = inject("sizeType");
    const getPrice = inject("getPrice");
    const createOrder = inject('order')

    const readyPrice = getPrice(props);

    const added = ref(false)

    const changeBtn = ()=>{
      createOrder(props.id,readyPrice)
      added.value = true

      setTimeout(() => {
        added.value = false
      },2000);
    }

    return {
      changeType,
      changeSize,
      getPrice,
      readyPrice,
      createOrder,
      added,
      changeBtn
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.card {
  max-width: 320px;
  margin: 20px auto;
  padding: 15px;
  border-radius: 12px;
}

.card img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto 10px;
}

.card h1 {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 10px;
}

.card button {
  font-size: 0.9rem;
  padding: 8px;
  border-radius: 8px;
  flex: 1;
}

.card .price {
  font-size: 1.2rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .card {
    max-width: 90%;
    padding: 12px;
  }

  .card h1 {
    font-size: 1rem;
  }

  .card button {
    font-size: 0.8rem;
    padding: 6px;
  }

  .card .price {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .card {
    max-width: 100%;
    padding: 10px;
  }

  .card h1 {
    font-size: 0.9rem;
  }

  .card button {
    font-size: 0.75rem;
    padding: 5px;
  }

  .card .price {
    font-size: 0.9rem;
  }
}
</style>
