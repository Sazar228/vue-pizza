import { computed } from "vue";


export function cartPrices (carts) {
    const totalPrice = computed(()=>{
        return carts.value.reduce((acc,item)=>acc+item.price,0)
    })

    return{
        totalPrice
    }
}