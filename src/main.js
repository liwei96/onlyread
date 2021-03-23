import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import BaiduMap from 'vue-baidu-map';
// const BaiduMap = require('vue-baidu-map')
// Vue.use(BaiduMap, {
//     ak: 'q3dhj4cf9pSDRNwhvkTscWBPeL5fSVxm'
// })
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
