<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div @click="addCount">{{getCount}}</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  computed: {
    ...mapGetters(['getCount'])
    // getCount() {
    //   console.log('this.$store.getters', this.$store.getters);
    //   return this.$store.getters.getCount;
    // }
  },
  methods: {
    addCount() {
      this.$store.commit('addCount', 1);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
