import axios from "axios";
import { compile, computed, ref } from "vue";


export function Order (pizzas) {
    const carts = ref([])
    const isCreatingOrder = ref(false)
    const orderId = ref(null)

    const cartCount = computed(()=> carts.value.length)

    const createOrder = async (pizzaId,readyPrice) => {
        try{
            isCreatingOrder.value = true
            const pizza = pizzas.value.find(p=>p.id === pizzaId)
            if(!pizza) return

            carts.value.push({
                ...pizza,
                finalPrice: readyPrice
            })

            const { data } = await axios.post('https://ba87bf8337650d94.mokky.dev/orders',{
                items:carts.value
            })

            orderId.value = data.id

            console.log(data);
            
        }catch(err){
            console.log('error in createOrder' + err)
        }finally{
            isCreatingOrder.value = false
        }
    }

    const addToCart = (pizzaId,readyPrice)=>{
        const pizza = pizzas.value.find(p => p.id === pizzaId)
        if(!pizza) return
        carts.value.push({
            ...pizza,
            finalPrice:readyPrice
        })
    }
    const removeToCart = (pizzaId,readyPrice) =>{
        const index = carts.value.findIndex(p=>p.id===pizzaId && p.finalPrice === readyPrice)
        if(index !==-1){
            carts.value.splice(index,1)
        }
    }

    const clearCart = ()=>{
        carts.value = []
    }




    return{
        orderId,
        createOrder,
        carts,
        isCreatingOrder,
        cartCount,
        addToCart,
        removeToCart,
        clearCart
    }
}