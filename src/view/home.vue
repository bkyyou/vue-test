<template>
 <div class="home_container">
    <my-header></my-header>
    <!-- <iframe id="iframe1" src="/#/iframePage" frameborder="0"></iframe> -->
    <div class="home">
      <my-aside></my-aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
 </div>
</template>

<script>
import header from '../components/header';
import aside from '../components/aside';
export default {
 name: '',
 data() {
   return {

   }
 },
 components: {
   myHeader: header,
   myAside: aside
 },
 mounted() {

 },
 methods: {

 }
}
</script>

<style>
.home_container {
  display: flex;
  /* padding-top: 60px; */
  width: 100%;
  height: 100%;
  /* flex-wrap: wrap; */
  flex-direction: column;
}
.home {
  flex: 1;
  display: flex;
}
.content {
  flex: 1;
}
</style>
