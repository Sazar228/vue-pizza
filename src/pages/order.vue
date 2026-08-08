<template>
    
    <OrderCart :isAdded="isAdded" :carts="carts"/>

</template>

<script>
import OrderCart from '@/components/orderCart.vue';
import { inject } from 'vue';
export default {
    components:{
        OrderCart
    },
    props:{
        isAdded:Boolean
    },
    setup(){
        const { carts, cartCount } = inject('cartCount')

        return{
            cartCount,
            carts
        }
    }

};
</script>

<style scoped>


</style>
