
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('showScroll').innerHTML = scrolled + 'px';
}

window.ontouchmove = function(evt) {
  if (typeof evt.touches === 'undefined') {
    return;
  }
  
  var d_x = evt.touches[0].clientX;
  var d_y = evt.touches[0].clientY;
  
  if (Math.abs(d_x) > 50 && Math.abs(d_y) < 5) {
    document.getElementById('left_wrap').classList.add('menu-visible');
  }
}

window.ontouchstart = function(evt) {
    document.getElementById('left_wrap').classList.remove('menu-visible');
}
