<template>
    <div class="room-item">
        <div class="room-img">
            <img v-show="!loaded" :src="placeholder">
            <img v-show="loaded" :src="room.room_src" @load="loaded = true">
            <span class="nickname">{{room.nickname}}</span>
            <span class="online">
                <span class="fa fa-user"></span>
                {{room.online | number}}
            </span>
        </div>
        <div class="room-name">
            <span class="fa fa-desktop"></span>
            {{room.room_name}}
        </div>
    </div>
</template>

<script>
import placeholder from '../assets/img/placeholder.gif'
import Vue from 'vue'

Vue.filter('number',value=>{
    if (value >= 10000) {
        return (value/10000).toFixed(2)+'万'
    } else {
        return value;
    }
});
export default {
    name:'room-item',
    props:['room'],
    data(){
        return {
            placeholder:placeholder,
            loaded:false
        }
    }
}
</script>

<style scoped>
.room-item{
    float: left;
    width: 14.5rem;
    height: 10rem;
    margin: 0.5rem;
    font-size: 1.2rem;
}
.room-img{
    width: 100%;
    height: 8rem;
    color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
}
.room-img img{
    width: 100%;
    height: 100%;
}
.room-img .nickname{
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
    font-size: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 7rem;
}
.room-img .online{
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
}
.room-name{
    width: 13rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 0.5rem;
}
</style>