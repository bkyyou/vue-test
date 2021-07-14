//网页适配
(function(doc, win) {
  var docEl = doc.documentElement;
  var recalc = function() {
    var clientWidth = docEl.clientWidth;
    var clientHeight = docEl.clientHeight;
    var aspectRatio = clientWidth / clientHeight;
    console.log(clientWidth)
    console.log(clientHeight)
    // if (aspectRatio > 1280 / 960) {
    //   docEl.style.fontSize = 100 * (clientHeight / 960) + "px";
    //   window.base = 100 * (clientHeight / 960);
    // } else {
    //   docEl.style.fontSize = 100 * (clientWidth / 1280) + "px";
    //   window.base = 100 * (clientWidth / 1280);
    // }
    docEl.style.fontSize = 100 * (clientWidth / 1366) + "px";
    window.base = 100 * (clientWidth / 1366);
  };

  /**
   * 设计图 640 
   * 宽 320 3.2rem
   * 
   * 现在屏幕 320
   * 实际宽 160 3.2 * 50
   * fontsize = 50 怎么来
   * clientWidth / 640 * 100
   */

  var timer = null;
  win.addEventListener(
    "resize",
    function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        recalc();
      }, 300);
    },
    false
  );
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);