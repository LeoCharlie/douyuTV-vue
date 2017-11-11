<template>
    <header>
        <span @click="back" class="fa fa-angle-left back"></span>
        <slot></slot>
    </header>
</template>

<script>
export default {
    methods: {
        back(){
            window.history.back();
        }
    }
}
</script>

<style scoped>
header{
    width: 100%;
    height: 64px;
    line-height: 64px;
    background-color: #333;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    color: white;
    font-size: 1.6rem;
    padding: 0 2rem;
}
.back{
    margin-right: 2rem;
}
</style>