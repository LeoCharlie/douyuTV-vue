<template>
  <div id="app">
        <!-- 侧滑菜单 -->
        <transition name="side-menu">
            <slide-menu v-show="show"></slide-menu>
        </transition>
    <router-view/>
  </div>
</template>

<script>
import SlideMenu from './components/SideMenu'
import bus from './router/bus'
export default {
  name: 'app',
  components: {
    SlideMenu
  },
  data(){
    return{
      show: false //控制侧滑菜单是否显示
    }
  },
  created(){
    bus.$on('showmenu',()=>{
      console.log('接受到显示的指令');
      this.show = true;
    })
    bus.$on('hidemenu',()=>{
      this.show = false;
    })
  }
}
</script>

<style>

</style>


