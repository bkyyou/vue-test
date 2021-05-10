<template>
  <div class="header_container">
    header
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
    window.addEventListener('message', messageEvent => {
      let data = messageEvent.data;
      console.log('header iframeSDK message', data);
      // data.from && this.msgCallback(data);
      iframeMsgSDK.send()
    }, false);
  },
  methods: {

  }
}
</script>

<style>
</style>
