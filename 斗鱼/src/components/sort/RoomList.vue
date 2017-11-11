<template>
    <div class="room-list">
        <back-bar>{{$route.params.gamename}}</back-bar>
        <main>
            <room-detail v-for="item in roomlist" :room="item" :key="item.nickname"></room-detail>
        </main>
    </div>
</template>

<script>
import BackBar from '../BackBar'
import RoomDetail from './RoomDetail'
export default {
    components: {
        BackBar,RoomDetail
    },
    data(){
        return {
            roomlist:[]
        }
    },
    mounted () {
        // 获取某个分类下的房间列表
        this.http.get('/douyuapi/api/RoomApi/live/'+this.$route.params.cateid)
        .then(res=>{
            console.log(res.data);
            this.roomlist = res.data.data;
        })
    }
}
</script>

<style scoped>
main{
    padding-top: 64px;
}
</style>