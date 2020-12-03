const $ = (css, parent = document) => parent.querySelector(css);
const $$ = (css, parent = document) => Array.from(parent.querySelectorAll(css));

window.onload = function() {
  showView('Swiper');

  document.addEventListener('keydown', function(event) {
    console.log(event.key);
    switch(event.key) {
      case '7':
        $('#container').style.transform = 'translate(0, 0)';
        break;
      case '8':
        $('#container').style.transform = 'translate(-100vw, 0)';
        break;
      case '9':
        $('#container').style.transform = 'translate(-200vw, 0)';
        break;
      case '4':
        $('#container').style.transform = 'translate(0, -100vh)';
        break;
      case '5':
        $('#container').style.transform = 'translate(-100vw, -100vh)';
        break;
      case '6':
        $('#container').style.transform = 'translate(-200vw, -100vh)';
        break;
      case '2':
        $('#container').style.transform = 'translate(-100vw, -200vh)';
        break;
    }
  }, true);
}

function ignore() {
  console.log("Ignore");
}

function save() {
  console.log("Save");
}

function showView(viewName) {
  switch(viewName) {
    case 'Sign-in':
      $('#container').style.transform = 'translate(0, 0)';
      break;
    case 'Settings':
      $('#container').style.transform = 'translate(-100vw, 0)';
      break;
    case 'Sign-up':
      $('#container').style.transform = 'translate(-200vw, 0)';
      break;
    case 'Ignored':
      $('#container').style.transform = 'translate(0, -100vh)';
      break;
    case 'Swiper':
      $('#container').style.transform = 'translate(-100vw, -100vh)';
      break;
    case 'Saved':
      $('#container').style.transform = 'translate(-200vw, -100vh)';
      break;
    case 'Preloader':
      $('#container').style.transform = 'translate(-100vw, -200vh)';
      break;
  }
}
