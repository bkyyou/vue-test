<template>
  <div class="iframe_page_container">
    iframepage
  </div>
</template>

<script>
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
      console.log('iframeSDK message', data);
      data.from && this.msgCallback(data);
    }, false);

    setTimeout(() => {
      console.log('send====')
      // parent.window.postMessage({ from: 'indexIframe', coursewareData: null, type: 'needInitData', domId: this.domId }, '*');
      parent.window.postMessage({ coursewareData: null, type: 'needInitData', domId: this.domId }, '*');
    }, 2000);
  },
  methods: {

  }
}
</script>

<style>
</style>
