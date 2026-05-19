

export function Dough (pizzas) {

    const changeType = (id,type) =>{
        const pizza = pizzas.value.find(p => p.id === id)
        if(pizza){
            pizza.defType = type
        }
    }


    return{
        changeType
    }

}