import axios from "axios";
import { reactive, ref, watch } from "vue";

export function Categories(pizzas) {
  const categories = [
    { id: 1, name: "all", label: "Все" },
    { id: 2, name: "meat", label: "Мясные" },
    { id: 3, name: "veg", label: "Вегетарианские" },
    { id: 4, name: "grill", label: "Гриль" },
    { id: 5, name: "spicy", label: "Острые" },
  ];

  const filters = reactive({
    sortBy: "popular",
    searchBtn: 'all',
  });

  const getSorted = async () => {
    try {
      const params = {};

      if (filters.sortBy) {
        params.sortBy = filters.sortBy;
      }

      if(filters.searchBtn && filters.searchBtn !== "all"){
        params.category = filters.searchBtn
      }

      const res = await axios.get("https://ba87bf8337650d94.mokky.dev/pizzas", {
        params,
      });
      pizzas.value = res.data.map(obj => {
        const oldPizza = pizzas.value.find(p=>p.id === obj.id)
        return{
          ...obj,
          defType:oldPizza ? oldPizza.defType : 'thin',
          defSize:oldPizza ? oldPizza.defSize : '26',
          isAdded:oldPizza ? oldPizza.isAdded : false
        }
      })
      ;
    } catch (err) {
      console.log("error in getSorted" + err);
    }
  };

  watch(
    () => [filters.sortBy,filters.searchBtn],
    () => {
      getSorted();
    },
  );

  return {
    filters,
    getSorted,
    categories,
  };
}
