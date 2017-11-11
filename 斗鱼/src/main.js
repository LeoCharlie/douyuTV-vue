import Vue from 'vue'
import App from './App'
import router from './router'

// 导入css
import './assets/base.css'
import './assets/font-awesome-4.7.0/css/font-awesome.css'

import axios from 'axios';
Vue.prototype.http = axios;


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// 设置文字的大小
// 当视图大小变化时，让html的文字大小也变化，设置视图高度时使用 rem 为单位
// rem: 相对于html标签字体的大小
var html = document.documentElement;
var calcRem = function(){
  var w = html.clientWidth; 
  if (w <= 320) {
    html.style.fontSize = '10px';
  }else if (w <= 640) {
    html.style.fontSize = w/32 + 'px';
  }else{
    html.style.fontSize = '20px';
  }
  console.log('w='+w+' fontsize='+html.style.fontSize);
}
calcRem();
window.onresize = function(){
  calcRem();
}