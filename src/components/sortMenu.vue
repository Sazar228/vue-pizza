  <template>
    <div class="flex gap-4 categories">
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
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 768px) {
  .categories {
    justify-content: center;
    gap: 10px;
  }

  .categories button {
    font-size: 0.9rem;
    padding: 8px 12px;
  }
}

@media (max-width: 480px) {
  .categories {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .categories button {
    width: 100%;
    font-size: 0.85rem;
    padding: 6px 10px;
  }
}

  </style>
