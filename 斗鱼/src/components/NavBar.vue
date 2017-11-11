<template>
    <header>
        <span @click="showSideMenu" class="fa fa-bars menu"></span>
        <slot></slot>
        <span class="fa fa-user user"></span>
    </header>
</template>

<script>
import bus from '../bus.js'
export default {
    name:'nav-bar',
    methods: {
        showSideMenu(){
            console.log('显示侧滑菜单');
            bus.$emit('showmenu');
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
.menu{
    margin-right: 2rem;
}
.user{
    float: right;
    margin-top: calc(32px - 0.8rem);
}
</style>