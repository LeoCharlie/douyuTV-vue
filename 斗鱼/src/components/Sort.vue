<template>
    <div class="sort">
        <nav-bar>分类</nav-bar>
        <main>
            <router-link 
            v-for="item in gamelist" 
            :to="/games/+item.cate_id+'/'+item.game_name" 
            :key="item.cate_id">
                <sort-item :game="item"></sort-item>
            </router-link>
        </main>
    </div>
</template>

<script>
import NavBar from './NavBar'
import SortItem from './sort/SortItem'
export default {
    name:'sort',
    components: {
        NavBar,SortItem
    },
    data(){
        return {
            gamelist:[]
        }
    },
    mounted () {
        this.http.get('/douyuapi/api/RoomApi/game').then(res=>{
            console.log(res.data);
            this.gamelist = res.data.data;
        })
    }
}
</script>

<style scoped>
main{
    padding-top: 64px;
}
</style>