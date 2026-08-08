<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name:'buttonAdded'
    }
</script>

<style scoped>
.btn{
    width: 155px;
    height: 40px;
    background-color:white;
    color: orangered;
    border: solid 2px orangered;
    border-radius: 20px;
    text-align: left;
}
</style>