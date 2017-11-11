<template>
    <div class="sort">
        <nav-bar>个人中心</nav-bar>
        <main>
            个人中心
        </main>
    </div>
</template>

<script>
import NavBar from './NavBar'
export default {
    name:'personal',
    components: {
        NavBar
    }
}
</script>

<style scoped>
main{
    padding-top: 64px;
}
</style>