<template>
  <div id="app">
    <!-- 侧滑菜单 -->
    <transition name="side-menu">
      <side-menu v-show="show"></side-menu>
    </transition>
    <!-- 主要内容 -->
    <router-view></router-view>    
  </div>
</template>

<script>
import SideMenu from './components/SideMenu'
import bus from './bus.js'
export default {
  name: 'app',
  components: {
    SideMenu
  },
  data(){
    return {
      show: false //控制侧滑菜单是否展现
    }
  },
  created () {
    bus.$on('showmenu',()=>{
      // console.log('接受到显示的指令');
      this.show = true;
    })
    bus.$on('hidemenu',()=>{
      this.show = false;
    })
  }
}
</script>

<style scoped>
/* 侧边栏的过渡 */
.side-menu-enter,
.side-menu-leave-to{
  transform: translateX(-100vw);
}
.side-menu-enter-active,
.side-menu-leave-active{
  transition: all 0.5s;
}
</style>
