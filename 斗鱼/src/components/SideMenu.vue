<template>
   <div class="side-menu" @click="hideSideMenu">
       <ul>
           <li>
               <router-link to="/">首页<i class="fa fa-angle-right"></i></router-link>
           </li>
           <li>
               <router-link to="/sort">全部分类<i class="fa fa-angle-right"></i></router-link>
           </li>
           <li>
               <router-link to="/recommend">推荐<i class="fa fa-angle-right"></i></router-link>
           </li>
           <li>
               <router-link to="/personal">个人中心<i class="fa fa-angle-right"></i></router-link>
           </li>
       </ul>
       <!-- 遮罩层 -->
       <div class="overlay"></div>
   </div>
</template>

<script>
import bus from '../router/bus'
     export default {
         name: 'side-menu',
         methods: {
             hideSideMenu(){
                 bus.$emit('hidemenu');
             }
         }
     }
</script>

<style scoped>
    .overlay{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.15);
        position: absolute;
        top: 0;
        left: 0;
    }
    .side-menu{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 64px;
        left: 0;
        z-index: 9999;
    }
    ul{
        width: 66%;
        height: 100%;
        background-color: #333;
        border-top: 1px solid #999;
        position: absolute;
        top: 0;
        left: 0;
    }
    li{
        border: 1px solid #999;
        height: 4.4rem;
        line-height: 44rem;
        color: #ccc;
        font-size: 1.4rem;
        padding-left: 2rem;
        padding-right: 3rem;
    }
    i{
        float: right;
        line-height: 44rem;
    }
</style>
