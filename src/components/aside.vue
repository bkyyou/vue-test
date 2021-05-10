<template>
  <div class="aside_container">
    aside
  </div>
</template>

<script>
import iframeMsgSDK from '../iframeMsgSDK.js';

export default {
  name: '',
  data() {
    return {

    }
  },
  components: {

  },
  mounted() {
    iframeMsgSDK.beforeBark = function() {

    }
    // window.addEventListener('message', messageEvent => {
    //   let data = messageEvent.data;
    //   console.log('aside iframeSDK message', data);
    //   // data.from && this.msgCallback(data);
    //   iframeMsgSDK.send();
    // }, false);
    // window.addEventListener('message', messageEvent => {
    //   let data = messageEvent.data;
    //   console.log('aside iframeSDK message', data);
    //   // data.from && this.msgCallback(data);
    //   iframeMsgSDK.send();
    // }, false);
    window.onmessage = function() {
      console.log('aside iframeSDK message');
    }
    window.onmessage = function() {
      console.log('aside iframeSDK message');
    }
    console.log(22)
    document.addEventListener('click', () => {
      console.log(111);
    }, false);
    document.addEventListener('click', () => {
      console.log(222);
    }, false);
  },
  methods: {

  }
}
</script>

<style>
</style>
