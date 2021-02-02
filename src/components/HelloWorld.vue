<template>
  <div class="hello">
    <h2>{{$store.state.counter}} </h2>
    <h2>{{$store.getters.powerCounter}} </h2>
    <h2>{{$store.getters.more20stu}} </h2>
    <!-- 该返回值是一个值 -->
    <h2>{{$store.getters.getagecounter}} </h2>
    <!-- 该返回值是一个函数，可以向这个函数里面传递参数 -->
    <h2>{{$store.getters.getage(25)}} </h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>
