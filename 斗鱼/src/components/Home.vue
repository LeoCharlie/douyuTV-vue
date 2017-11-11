<template>
  <div id="home">
      <nav-bar>斗鱼TV</nav-bar>
      <main>
          <div class="loading"></div>
          <span v-if="status == 'loading'" class="fa fa-cog fa-spin fa-3x fa-fw"></span>
          <span v-if="status == 'fail'">加载失败</span>
      </main>
      <div v-if="status == 'success'">
          <room-item v-for="item in roomlist" :room="item" :key="item.room_id"></room-item>
      </div>
      <div v-if="status == 'success'" class="">
          <span class="fa fa-cog fa-spin fa-3x fa-fw"></span>
          正在加载更多
      </div>
  </div>
</template>

<script>
import NavBar from "./NavBar"
import RoomItem from "./RoomItem"
    export default {
        name: 'home',
        components: {
            NavBar,
            RoomItem
        },
        data(){
            return{
           status: 'loading',
           roomlist: []
            }
        },
        methods: {
            // 当页面发生滚动时调用的函数
            didScroll(){
                var bodyH = document.body.clientHeight; //页面的总高度
                var scrollTop = document.scrollingElement.scrollTop; //页面被卷去的高度
                var windowH = document.documentElement.clientHeight; //可视页面的高度
                if (windowH + scrollTop >= bodyH-10) {
                    console.log('加载更多');
                    if (!this.isLoading) {
                        this.loadMore();
                    }
                }
            },
            loadMore(){
                this.isLoading = true;
                this.http.get('/douyu/api/RoomApi/live',{
                   params:{
                       offset:this.roomlist.length/30
                   }
                })
                .then(res=>{
                   if (res.data.err == 0) {
                       this.roomlist = this.roomlist.concat(res.data.data);
                   }
                   this.isLoading = false;
               },err=>{
                   this.isLoading = false;
               })
           }
        },
        mounted() {
            window.onscroll = this.didScroll;
            console.log("获取房间列表");
            this.http.get('/douyu/api/RoomApi/live').then(res=>{
                console.log(res.data);
                if (res.data.error ==0) {
                    this.status = 'success';
                    this.roomlist = res.data.data;
                    // console.log(JSON.stringify(this.roomlist))
                } else {
                    this.status = 'fail';
                }
            },err=>{
                console.log(err);
                this.status = 'fail';
            })
        }
    }
</script>
<style scoped>
  main{
      padding-top: 64px;
      margin: 0.5rem;
  }
  .loading{
      text-align: center
  }
</style>
