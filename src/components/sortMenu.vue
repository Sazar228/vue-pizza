  <template>
    <div class="flex gap-4">
      <button
      @click="filters.searchBtn = cat.name"
      v-for="cat in categories"
      :key="cat.id"
      class="all_mini px-4 py-2 rounded-xl font-bold"
      :class="filters.searchBtn === cat.name ? 'bg-black text-white' : 'bg-slate-100 text-black'"
      >{{ cat.label }}
      </button>
    </div>

  </template>

  <script>
  import { inject } from 'vue';


  export default {
    props:{
      filters:Object
    },
    setup(props) {
      const categories = inject('categories')
      const pizzas = inject('categories')


      return{
        categories,
        pizzas,
      }
    },
  };
  </script>

  <style scoped>
  .all_mini {
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }
  .all_mini:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  </style>
