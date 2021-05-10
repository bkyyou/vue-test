<template>
 <div class="home_container">
    <my-aside></my-aside>
    <my-header></my-header>
    <!-- <iframe id="iframe1" src="/#/iframePage" frameborder="0"></iframe> -->
    <router-view></router-view>
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
</style>
