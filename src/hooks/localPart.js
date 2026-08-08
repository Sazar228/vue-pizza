import { computed, watch } from "vue";

export function localStor(isCreatingOrder, carts, pizzas) {
  const cartEmpty = computed(() => carts.value.length === 0);
  const btnDisable = computed(() => {
    return isCreatingOrder.value || cartEmpty.value;
  });

  const localCart = () => {
    const localCart = localStorage.getItem("cart");
    carts.value = localCart ? JSON.parse(localCart) : [];
  };

  const checkLocalCart = () => {
    pizzas.value = pizzas.value.map((pizza) => ({
      ...pizza,
      isAdded: carts.value.some((cartItem) => cartItem.id === pizza.id),
    }));
  };

  watch(carts, () => {
    pizzas.value = pizzas.value.map((pizza) => ({
      ...pizza,
      isAdded: false,
    }));
  });

  watch(
    carts,
    () => {
      localStorage.setItem("cart", JSON.stringify(carts.value));
    },
    { deep: true },
  );


  return{
    cartEmpty,
    btnDisable,
    localCart,
    checkLocalCart
  }
}
