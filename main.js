const $ = (css, parent = document) => parent.querySelector(css);
const $$ = (css, parent = document) => Array.from(parent.querySelectorAll(css));

window.onload = function() {
  document.body.scrollTop;
  document.body.scrollLeft;
  showView('Saved');

  document.addEventListener('keydown', function(event) {
    console.log(event.key);
    switch(event.key) {
      case '7':
        $('main').style.transform = 'translate(0, 0)';
        break;
      case '8':
        $('main').style.transform = 'translate(-100vw, 0)';
        break;
      case '9':
        $('main').style.transform = 'translate(-200vw, 0)';
        break;
      case '4':
        $('main').style.transform = 'translate(0, -100vh)';
        break;
      case '5':
        $('main').style.transform = 'translate(-100vw, -100vh)';
        break;
      case '6':
        $('main').style.transform = 'translate(-200vw, -100vh)';
        break;
      case '2':
        $('main').style.transform = 'translate(-100vw, -200vh)';
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
      $('main').style.transform = 'translate(0, 0)';
      break;
    case 'Settings':
      $('main').style.transform = 'translate(-100vw, 0)';
      break;
    case 'Sign-up':
      $('main').style.transform = 'translate(-200vw, 0)';
      break;
    case 'Ignored':
      $('main').style.transform = 'translate(0, -100vh)';
      break;
    case 'Swiper':
      $('main').style.transform = 'translate(-100vw, -100vh)';
      break;
    case 'Saved':
      $('main').style.transform = 'translate(-200vw, -100vh)';
      break;
    case 'Preloader':
      $('main').style.transform = 'translate(-100vw, -200vh)';
      break;
  }
}
