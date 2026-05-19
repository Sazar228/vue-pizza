import axios from "axios";
import { ref } from "vue";


export function Pizzas () {
    const pizzas = ref([])
    const isAdded = ref(false)
    const defType = ref('thin')
    const defSize = ref('26')

    const getPizzas = async () => {
        try{
            const { data } = await axios.get('https://ba87bf8337650d94.mokky.dev/pizzas')

            pizzas.value = data.map(obj => ({
                ...obj,
                isAdded:false,
                defType:'thin',
                defSize:'26'
            }))
        }catch(err){
            console.log('error in getPizzas' + err)
        }
    }

    return{
        pizzas,
        isAdded,
        getPizzas,
        defType,
        defSize
    }
}