

export function Size (pizzas) {

    const changeSize = (id,val) =>{
        const pizza = pizzas.value.find(p => p.id === id )
        if(pizza){
            pizza.defSize = val
        }
    }

    return{
        changeSize
    }
}