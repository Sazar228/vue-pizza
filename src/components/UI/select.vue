<template>
    <select
        :value="modelValue"
        @change="updateSelect"
        name=""
        id=""
        class="text-orange-600 ml-3 focus:ring-0 focus:outline-none rounded-md border-dotted"
      >
        <option value="popular">популярности</option>
        <option value="price">по цене</option>
        <option value="name">по названию</option>
      </select>
</template>

<script>
    export default {
        name:'vueSelect',
        methods:{
            updateSelect(event){
                this.$emit('update:modelValue',event.target.value)
            }
        },
        props:{
            modelValue:{
                type:String,
                default:'popular'
            }
        }
    }
</script>

<style lang="" scoped>

</style>