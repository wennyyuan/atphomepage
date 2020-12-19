var imgs = document.querySelectorAll('img');
//offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
function getTop(e) {
  var T = e.offsetTop;
  while(e = e.offsetParent) {
    T += e.offsetTop;
  }
  return T;
}

function lazyLoad(imgs) {
  var H = document.documentElement.clientHeight;
  var S = document.documentElement.scrollTop || document.body.scrollTop;
  for (let i = 0; i < imgs.length; i++) {
    if (H + S > getTop(imgs[i]) && !imgs[i].getAttribute('src')) {
      imgs[i].src = imgs[i].getAttribute('data-src');
    }
  }
}
lazyLoad(imgs);
window.onscroll = function () {
  lazyLoad(imgs);
}