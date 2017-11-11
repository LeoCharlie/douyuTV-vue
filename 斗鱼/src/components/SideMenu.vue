<template>
    <div class="side-menu" @click="hideSideMenu">
        <!-- 遮罩层 -->
        <div class="overlay"></div>
        <ul>
            <li>
                <router-link to="/">首页<i class="fa fa-angle-right"></i></router-link>
            </li>
            <li><router-link to="/sort">全部分类<i class="fa fa-angle-right"></i></router-link></li>
            <li><router-link to="/recommend">推荐<i class="fa fa-angle-right"></i></router-link></li>
            <li><router-link to="/personal">个人中心<i class="fa fa-angle-right"></i></router-link></li>
        </ul>
    </div>
</template>

<script>
import bus from '../bus.js'
export default {
    name:'side-menu',
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
    height: calc(100vh - 64px);
    position: fixed;
    top: 64px;
    left: 0;
    z-index: 999;
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
    height: 4.4rem;
    line-height: 4.4rem;
    border-bottom: 1px solid #999;
    color: #ccc;
    font-size: 1.6rem;
    padding-left: 2rem;
    padding-right: 4rem;
}
i{
    float: right;
    margin-top: 1.4rem;
}
</style>