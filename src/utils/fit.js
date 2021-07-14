// 设置成自调用函数 传入window，跟document
((win,doc)=>{
  // doc需要传进去的参数 所以使用变量命名的方式赋函数
  let res=()=>{
    // 当前代码是获取可视窗口的宽度 除以16 16是默认字体大小
    let width=doc.documentElement.clientWidth/100;
    // 设置html根字体大小
    doc.getElementsByTagName('html')[0].style.fontSize=width+'px';
    // 获取html根字体大小
    console.log(doc.getElementsByTagName('html')[0].style.fontSize)
  }
    // 监控可视窗口变化，变化则调用
  window.onresize=()=>{
    // 调用函数进行获取html根字体的大小
    res()
  }
  })(window,document)

  // function resizeScreen() {
  //   console.log('绿幕 resizeScreen');
  //   (function(doc, win) {
  //     var docEl = doc.documentElement;
  //     var recalc = function() {
  //       setTimeout(function() {
  //         var clientWidth = docEl.clientWidth;
  //         var clientHeight = docEl.clientHeight;
  //         var aspectRatio = clientWidth / clientHeight;
  //         console.log('shipei', clientWidth, clientHeight)
  //         if (aspectRatio > 1280 / 960) {
  //           docEl.style.fontSize = 100 * (clientHeight / 960) + 'px';
  //           window.base = 100 * (clientHeight / 960);
  //         } else {
  //           docEl.style.fontSize = 100 * (clientWidth / 1280) + 'px';
  //           window.base = 100 * (clientWidth / 1280);
  //         }
  //       }, 1000)
  //     };
  //     doc.addEventListener('DOMContentLoaded', recalc, false);
  //   })(document, window);
  // }
  
  // export default resizeScreen
  