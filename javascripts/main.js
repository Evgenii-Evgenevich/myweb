
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('showScroll').innerHTML = scrolled + 'px';
}

var touchX = 0;

window.ontouchend = function(evt) {
  if (typeof evt.changedTouches === 'undefined') {
    return;
  }
  
  var d_x = evt.changedTouches[0].clientX - touchX;
  var d_y = evt.changedTouches[0].clientY - 0;
  
  if (Math.abs(d_x) > 50) {
    document.getElementById('left_wrap').classList.add('menu-visible');
  }
}

window.ontouchstart = function(evt) {
  if (typeof evt.changedTouches === 'undefined') {
    return;
  }
  
  touchX = evt.changedTouches[0].clientX;
  
  document.getElementById('left_wrap').classList.remove('menu-visible');
}
