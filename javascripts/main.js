
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('showScroll').innerHTML = scrolled + 'px';
}

window.ontouchmove = function(evt) {
  if (typeof evt.touches === 'undefined') {
    return;
  }
  
  var d_x = evt.touches[0].clientX;
  
  if (Math.abs(d_x) > 20) {
    document.getElementById('left_wrap').classList.add('menu-visible');
  }
}

window.ontouchend = function(evt) {
    document.getElementById('left_wrap').classList.remove('menu-visible');
}
