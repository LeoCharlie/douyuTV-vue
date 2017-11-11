// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

import './assets/base.css'
import './assets/font-awesome-4.7.0/css/font-awesome.css'
Vue.prototype.http = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

// 设置文字的大小
// 当视图的大小变化时，让HTML的文字大小也变化，设置视图高度时，使用rem为单位
// rem: 相对HTML标签字体大小
var html = document.documentElement;
var calcRem = function() {
    var w = html.clientWidth;
    if (w <= 320) {
        html.style.fontSize = '10px';
    } else if (w <= 640) {
        html.style.fontSize = w / 32 + 'px';
    } else {
        html.style.fontSize = '20px';
    }
    console.log('w=' + w + 'fontsize=' + html.style.fontSize)
}
calcRem();
window.onresize = function() {
    calcRem();
}