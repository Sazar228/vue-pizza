import { computed, ref } from "vue";

export function cartPrice(carts) {
  const getPrice = (pizza) =>{
    return computed(()=>{
        let finalPrice = pizza.price
        
        if (pizza.defType === "traditional") finalPrice += 50;
        if (pizza.defSize === "30") finalPrice += 100;
        else if (pizza.defSize === "40") finalPrice += 200;

        return finalPrice
    })
  }


  const allPriceCart = computed(()=>{
    return carts.value.reduce((sum,pizza)=> sum + pizza.finalPrice,0)
  })

  return{
    getPrice,
    allPriceCart
  }
}

