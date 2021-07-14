<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div @click="addCount">{{getCount}}</div> -->
    <router-view></router-view>
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
  width: 100%;
  height: 100%;
}
#iframe1 {
  width: 1280px;
  height: 960px;
}
#iframe2 {
  width: 1280px;
  height: 960px;
}

/* 100px == 1rem */
/* html {
  font-size: calc(200vw/7.5);
} */
</style>
