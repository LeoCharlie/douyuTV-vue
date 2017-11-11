<template>
    <div class="sort-item">
        <img :src="game.game_icon">
        <p>{{game.game_name}}</p>
    </div>
</template>

<script>
export default {
    props:['game']
}
</script>

<style scoped>
.sort-item{
    float: left;
    width: 33.33333vw;
    height: 33.33333vw;
    border: 1px dashed #999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.6rem;
}
.sort-item img{
    width: 5rem;
    height: 5rem;
}
</style>