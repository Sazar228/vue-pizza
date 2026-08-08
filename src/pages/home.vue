<template>
  <Sort :filters="filters" />
  <ContainCartochka :pizzas="pizzas" />
</template>

<script>
import ContainCartochka from "@/components/containCartochka.vue";
import Sort from "@/components/sort.vue";
import { inject } from "vue";
export default {
  components: {
    ContainCartochka,
    Sort,
  },
  props: {
    pizzas: Array,
    filters: Object,
    isAdded: Boolean,
  },
  setup(props) {
    const categories = inject("categories");
    const changeType = inject("doughType");
    const changeSize = inject("sizeType");
    const getPrice = inject("getPrice");
    const createOrder = inject("order");
    const cartCount = inject("cartCount");
    const allPriceCart = inject("allPriceCart");

    return {
      categories,
      changeType,
      changeSize,
      getPrice,
      createOrder,
      cartCount,
      allPriceCart,
    };
  },
};
</script>

<style lang="scss" scoped></style>
