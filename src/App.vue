<script>
import { onMounted, provide } from "vue";
import ContainCartochka from "./components/containCartochka.vue";
import Header from "./components/header.vue";
import Sort from "./components/sort.vue";
import { Pizzas } from "./hooks/getPizzas";
import { Categories } from "./hooks/getCategories";
import { Dough } from "./hooks/getTypedough";
import { Size } from "./hooks/getTypeSize";
import { cartPrice } from "./hooks/getTotalPrice";
import { Order } from "./hooks/getOrder";
import { cartPizza } from "./hooks/getCartPizza";
import { cartPrices } from "./hooks/getCartPrice";
import { localStor } from "./hooks/localPart";
import { RouterView } from "vue-router";

export default {
  components: {
    Header,
    Sort,
    ContainCartochka,
  },
  setup() {
    const { pizzas,isAdded,getPizzas,defType,defSize } = Pizzas()
    const { filters,getSorted,categories } = Categories(pizzas)
    const { orderId,createOrder,carts,isCreatingOrder,cartCount,pizzaCounts,addToCart,removeToCart,clearCart} = Order(pizzas)
    // const { carts,addToCart,deleteToCart } = cartPizza(pizzas)
    const { totalPrice } = cartPrices(carts)
    const { changeType } = Dough(pizzas)
    const { changeSize } = Size(pizzas)

    const { getPrice,allPriceCart } = cartPrice(carts)
    const { cartEmpty,btnDisable,localCart,checkLocalCart } = localStor(isCreatingOrder,carts,pizzas)


    provide('categories',categories,pizzas)
    provide('doughType',changeType)
    provide('sizeType',changeSize)
    provide('getPrice',getPrice)
    provide('order',createOrder)
    provide('doOrders',{addToCart,removeToCart,clearCart})
    provide('cartCount',{carts,cartCount})
    provide('allPriceCart',allPriceCart)
    provide('sizes',{ defType,defSize })

    onMounted(async ()=>{
      localCart()
      await getPizzas()
      checkLocalCart()
    })  

    return{
      pizzas,
      isAdded,
      getPizzas,
      filters,
      getSorted,
      categories,
      defType,
      changeType,
      defSize,
      changeSize,
      getPrice,
      orderId,
      createOrder,
      totalPrice,
      carts,
      allPriceCart,
      isCreatingOrder,
      cartEmpty,
      btnDisable,
      localCart,
      checkLocalCart,
      cartCount,
      pizzaCounts,
      addToCart,
      removeToCart,
      clearCart
    }
  },
};
</script>

<template>
  <div class="w-4/5 bg-white m-auto rounded-xl mt-10 shadow-xl mb-3 main-container">
    
    <Header />
    <RouterView
    :pizzas="pizzas"
    :filters="filters"
    :isAdded="isAdded"
    ></RouterView>
  </div>
</template>

<style scoped>
/* Базовые стили */
.main-container {
  width: 80%;
  margin: 40px auto 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 20px;
}

/* Для планшетов */
@media (max-width: 768px) {
  .main-container {
    width: 95%;
    margin: 20px auto;
    padding: 15px;
  }
}

/* Для телефонов */
@media (max-width: 480px) {
  .main-container {
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 8px;
  }
}

</style>
