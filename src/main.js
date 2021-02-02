import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'
import axios from 'axios'
import request from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

//axios的基本使用
//这个本身是返回一个promise的所以可以直接执行then()
// axios({
//   url:'http://localhost:8085/bookshop/book/getbook',
//   method:'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url:'http://localhost:8085/bookshop/book/updatebook',
//   method:'put',
//   params:{
//     id:2,
//     name:'天降奇兵',
//     price:61,
//     date:'2020-09-06'
//   }
// }).then(res => {
//   console.log(res);
// })

//axios的并发请求
//使用all方法传入一个数组，数组中的值为需要并发的请求
// axios.all([axios({
//   url:'http://localhost:8085/bookshop/book/getbook',
//   method:'get'
// }),axios({
//   url:'http://localhost:8085/bookshop/book/updatebook',
//   method:'put',
//   params:{
//     id:2,
//     name:'天降奇兵',
//     price:61,
//     date:'2020-09-06'
//   }
// })])
// .then(res => {
//   console.log(res);
// })

// //对axios参数进行全局配置
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'
// //这里的超时单位是毫秒
// axios.defaults.timeout = 5000

// //传入的参数是一个数组类型的，每个元素是一个axios对象
// //params携带的参数对应的是get请求，不能用在post请求中，在post中传入的是data
// axios.all([axios({
//   url:'/bookshop/book/getbook',
//   method:'get'
// }),axios({
//   url:'/bookshop/book/updatebook',
//   method:'put',
//   params:{
//     id:2,
//     name:'天降奇兵',
//     price:61,
//     date:'2020-09-06'
//   }
// })])
// //另一种写法
// .then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


//在某些情况下，如果业务变得很大，访问服务器的人数很多，那么项目的部署就会采用分布式的部署，部署到多个服务器上面去。
//每一台的服务器的ip地址又是不同的所以axios请求的url再采用全局配置的baseurl就不可行了，所以就需要创建axios实例

//create函数中传入的是一个对象里面包含那些通用的配置比如baseurl，timeout
// const instance = axios.create({
//   baseURL:'http://152.136.185.210:7878/api/m5',
//   timeout: 5000
// })

// //instance本身返回的就是一个promise函数
// instance({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

//调用request中封装的axios
request({
  url:'/home/data',
  params:{
    type:'pop',
    page:1
  }
})