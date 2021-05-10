function iframeSDK() {
  return {
    options: {
      currentPageSign: 'main',
      // beforeSend: true,
      cbArr: []
    },
    initEvent() {
      // window.addEventListener('message', messageEvent => {
      //   let data = messageEvent.data;
      //   console.log('iframeSDK message', data);
      //   data.from && this.msgCallback(data);
      // }, false);
      window.onmessage = messageEvent => {
        let data = messageEvent.data;
        console.log('iframeSDK message', data);
        data.from && this.msgCallback(data);
      }
    },
    getState(data) {
      // let reg = /<\/?.+?\/?>/g
      
      return data;
    }, 
    // beforeCallbark(data) {
    //   // console.log('data----', data)
    //   // if (data && data.coursewareData && (data.type === 'toItemIframe' || data.type === 'firstInForm')) {
    //   //   this.send(data);
    //   // }
    //   this.options.cbArr.forEach(fn => fn());
    // },  
    msgCallback(data) {
      data = this.getState(data);
      if (this.beforeCallbark && typeof this.beforeCallbark === 'function') {
        console.log('--------')
        this.beforeCallbark(data)
      }
    },
    beforeSend(data) {
      // data.from = this.options.currentPageSign;
      return data;
    },
    send() {
      // if (this.beforeSend && typeof this.beforeSend === 'function') data = this.beforeSend(data);
      // console.log('data----', data);
      // document.getElementsByName(name ? name : data.domId + 'IndexIframe').forEach(a => { console.log(a); a.contentWindow.postMessage(data, '*'); })
    },
    init() {
      this.initEvent();
    },
    addCb(fn) {
      this.options.cbArr.push(fn)
    },
    reduceCb(i) {
      this.options.cbArr.splice(i, 1);
    },
  }
}

// // 应该在引入的地方初始化， 否则 options 配置无法被修改
// iframeSDK().initEvent();

let sdkObj = iframeSDK();
console.log(11111111)
sdkObj.initEvent();
sdkObj.initEvent();
sdkObj.initEvent();
sdkObj.initEvent();
sdkObj.initEvent();
sdkObj.initEvent();
sdkObj.initEvent();

export default  sdkObj;
