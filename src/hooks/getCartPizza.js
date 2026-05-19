import { ref } from "vue";

export function cartPizza (pizzas) {
    const carts = ref([])

    const addToCart = (pizzas) =>{
        carts.value.push(pizzas)
        pizzas.isAdded = true
    }

    const deleteToCart = (pizzas) =>{
        carts.value.splice(
            carts.value.indexOf(pizzas),1)
            pizzas.isAdded = false
    }

    return{
        carts,
        addToCart,
        deleteToCart
    }
}