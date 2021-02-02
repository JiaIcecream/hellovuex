import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex);

//创建对象
const store = new Vuex.Store({
  //定义在所有组件能用的变量
  state: {
    counter:1000,
    movies: [
      {id:1,name:'xiaojia',age:12},
      {id:2,name:'xiaoke',age:21},
      {id:3,name:'xiaozhang',age:15},
      {id:4,name:'xiaowu',age:30}
    ]
  },
  mutations: {
    //定义方法,默认每个方法都会传一个state到里面去
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    //mutations传递参数
  },
  getters: {
    //默认传入state
    powerCounter(state) {
      return state.counter * 2
    },
    more20stu(state) {
      return state.movies.filter(s => s.age > 20)
    },

    getagecounter(state,getters) {
      return getters.more20stu.length
    },
    //getters默认是不能传递参数的, 如果希望传递参数, 
    //那么只能让getters本身返回另一个函数.
    getage(state) {
      return function(age){
        return state.movies.filter(s => s.age > age)
      }
    }
  },
  //在里面做一些异步操作
  actions: {
    
  }
})

export default store