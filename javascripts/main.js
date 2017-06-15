
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('showScroll').innerHTML = scrolled + 'px';
}

window.ontouchend = function(evt) {
  if (typeof evt.touches === 'undefined') {
    return;
  }
  
  var d_x = evt.touches[0].clientX;
  var d_y = evt.touches[0].clientY;
  
  if (Math.abs(d_x) > 50) {
    document.getElementById('left_wrap').classList.add('menu-visible');
  }
}

window.ontouchstart = function(evt) {
    document.getElementById('left_wrap').classList.remove('menu-visible');
}
