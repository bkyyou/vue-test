let currentdrag
let dragEl
let dragoverArr = []
function collDetection(oDiv, oDiv2) {
  var x = oDiv.offsetLeft + oDiv.offsetWidth / 2
  var y = oDiv.offsetTop + oDiv.offsetHeight / 2
  var t2 = oDiv2.offsetTop
  var l2 = oDiv2.offsetLeft
  var r2 = oDiv2.offsetLeft + oDiv2.offsetWidth
  var b2 = oDiv2.offsetTop + oDiv2.offsetHeight
  if (x > l2 && x < r2 && y > t2 && y < b2) {
    return true
  } else {
    return false
  }
}
document.body.addEventListener(
  'touchmove',
  function(e) {
    e.preventDefault()
  },
  {
    passive: false
  }
)

function bindEv(el, binding) {
  console.log('okkkkkkk')
  var touch
  var disX
  var disY
  var count = 0
  el.ontouchstart = e => {
    currentdrag = el
    if (currentdrag.getAttribute('disabled')) {
      return
    }
    dragEl = el.cloneNode(true)
    if (e.touches) {
      // 有可能对象在e上也有可能对象在e.touches[0]上
      touch = e.touches[0]
    } else {
      touch = e
    }
    disX = touch.clientX - el.offsetLeft // 鼠标位置X减去元素距离左边距离（鼠标到元素左边的距离）
    disY = touch.clientY - el.offsetTop // 鼠标位置Y减去距离顶部距离（鼠标到元素顶部的高度）
    let left = touch.clientX - disX
    let top = touch.clientY - disY
    dragEl.style.position = 'absolute'
    dragEl.style.left = left + 'px'
    dragEl.style.top = top + 'px'
    el.style.opacity = 0
    document.body.appendChild(dragEl)
    document.ontouchmove = e => {
      if (count % 2 === 0) {
        if (e.touches) {
          // 有可能对象在e上也有可能对象在e.touches[0]上
          touch = e.touches[0]
        } else {
          touch = e
        }
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = touch.clientX - disX
        let top = touch.clientY - disY

        // 移动当前元素
        dragEl.style.left = left + 'px'
        dragEl.style.top = top + 'px'
      }
      count++
      e.stopPropagation()
    }
    document.ontouchend = e => {
      document.ontouchmove = null
      document.ontouchend = null
      let collision
      dragoverArr.forEach(item => {
        if (
          collDetection(dragEl, item.dom) &&
          !item.dom.getAttribute('disabled')
        ) {
          collision = item
        }
      })
      if (collision) {
        console.log(binding.value.answerId, collision.answerId)
        if (collision.answerId == binding.value.answerId) {
          collision.isanswer = true
          document.body.removeChild(dragEl)
          binding.value.answerCallback(true, collision.answerId)
          // currentdrag.onmousedown = null;
          return
        } else {
          binding.value.answerCallback(false, collision.answerId)
        }
      } else {
        binding.value.answerCallback(-false)
      }
      document.body.removeChild(dragEl)
      currentdrag.style.opacity = 1
    }
  }

  el.onmousedown = event => {
    currentdrag = el
    if (currentdrag.getAttribute('disabled')) {
      return
    }
    dragEl = el.cloneNode(true)

    // 算出鼠标相对元素的位置
    let pointX = event.clientX - el.offsetLeft // 鼠标位置X减去元素距离左边距离（鼠标到元素左边的距离）
    let pointY = event.clientY - el.offsetTop // 鼠标位置Y减去距离顶部距离（鼠标到元素顶部的高度）
    let left = event.clientX - pointX
    let top = event.clientY - pointY
    // 移动当前元素
    dragEl.style.position = 'absolute'
    dragEl.style.left = left + 'px'
    dragEl.style.top = top + 'px'
    el.style.opacity = 0
    document.body.appendChild(dragEl)
    document.onmousemove = e => {
      if (count % 2 === 0) {
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - pointX
        let top = e.clientY - pointY
        // 移动当前元素
        dragEl.style.left = left + 'px'
        dragEl.style.top = top + 'px'
      }
    }
    document.onmouseup = e => {
      document.onmousemove = null
      document.onmouseup = null
      let collision
      console.log(dragoverArr, '99990')
      dragoverArr.forEach(item => {
        if (
          collDetection(dragEl, item.dom) &&
          !item.dom.getAttribute('disabled')
        ) {
          collision = item
        }
      })
      if (collision) {
        if (collision.answerId == binding.value.answerId) {
          collision.isanswer = true
          document.body.removeChild(dragEl)
          binding.value.answerCallback(true, collision.answerId)
          // currentdrag.onmousedown = null;
          return
        } else {
          binding.value.answerCallback(false, collision.answerId)
        }
      } else {
        binding.value.answerCallback(false)
      }
      document.body.removeChild(dragEl)
      currentdrag.style.opacity = 1
    }
  }
}
export default {
  directives: {
    drag: {
      // 指令的定义
      inserted: bindEv
    },
    dragover: {
      inserted: function(el, binding) {
        dragoverArr.push({
          dom: el,
          answerId: binding.value
        })
      }
    }
  }
}
