
function open_left_wrap() {
    document.getElementById('left_wrap').classList.add('menu-visible');
}

function close_left_wrap() {
    document.getElementById('left_wrap').classList.remove('menu-visible');
}

var touchX = 0;

window.ontouchend = function(evt) {
  if (typeof evt.changedTouches === 'undefined') {
    return;
  }
  
  let d_x = evt.changedTouches[0].clientX - touchX;
  
  if (d_x > 50) {
    open_left_wrap();
  }
  else if (d_x < -50) {
    close_left_wrap();
  }
}

window.ontouchstart = function(evt) {
  if (typeof evt.changedTouches === 'undefined') {
    return;
  }
  
  touchX = evt.changedTouches[0].clientX;
  
  if (document.getElementById('left_wrap') != evt.changedTouches[0].target) {
    close_left_wrap();
  }
}

