
//进度条3
var progressthree = (function () {
  var threeDiv = document.getElementById('threeDiv'); //长线条
  var minthree = document.getElementById('minthree'); //小方块
  var three = document.getElementById("three");
  var vals = document.getElementById("vals");
  var threebg = document.getElementById('threebg');
  var ifBool = false; //判断鼠标是否按下
  //事件
  var start = function (e) {
    e.stopPropagation();
    ifBool = true;
  }
  var move = function (e) {
    if (ifBool) {
      if (!e.touches) {  //兼容移动端
        var x = e.clientX;
      } else {   //兼容PC端
        var x = e.touches[0].pageX;
      }
      //var x = e.touches[0].pageX || e.clientX; //鼠标横坐标var x
      var threeDiv_left = getPosition(threeDiv).left; //长线条的横坐标
      var minthree_left = x - threeDiv_left; //小方块相对于父元素（长线条）的left值
      if (minthree_left >= threeDiv.offsetWidth - 15) {
        minthree_left = threeDiv.offsetWidth - 15;
      }
      if (minthree_left < 0) {
        minthree_left = 0;
      }
      //设置拖动后小方块的left值
      minthree.style.left = minthree_left + "px";
      threebg.style.width = minthree_left +  'px';
      
      // three.innerText = parseInt((minthree_left / (threeDiv.offsetWidth - 15)) * 10);
      // vals.innerText = parseInt((minthree_left / (threeDiv.offsetWidth - 15)) * 10);

    }
  }
  var end = function (e) {
    ifBool = false;
  }
  //鼠标按下方块
  minthree.addEventListener("touchstart", start);
  minthree.addEventListener("mousedown", start);
  //拖动
  window.addEventListener("touchmove", move);
  window.addEventListener("mousemove", move);
  //鼠标松开
  window.addEventListener("touchend", end);
  window.addEventListener("mouseup", end);
  //获取元素的绝对位置
  function getPosition(node) {
    var left = node.offsetLeft; //获取元素相对于其父元素的left值var left
    var top = node.offsetTop;
    current = node.offsetParent; // 取得元素的offsetParent
    // 一直循环直到根元素
    while (current != null) {
      left += current.offsetLeft;
      top += current.offsetTop;
      current = current.offsetParent;
    }
    return {
      "left": left,
      "top": top
    }
  }
})()