document.addEventListener("scroll",cambiarNav);
var nav = document.getElementById("nav");

function cambiarNav() {
  cambiarLogoYColorDelTexto();
  fondoBarra();
  apareceSingOn();
}

function cambiarLogoYColorDelTexto() {
  var logo = document.getElementById('imagenLogoCambio');

  if(window.scrollY < 112){
    logo.src = "assets/img/logo-white.png";
    nav.className = "";
    }
  else {
    nav.className = "cambiarColor";
    logo.src = "assets/img/logo-pink.png";
  }
}

function apareceSingOn() {
  var btnSign = document.getElementById("sign");

  if(window.scrollY < 112){
    btnSign.style.visibility = "hidden";
  }else {
    btnSign.style.visibility = "visible"
  }
}

function fondoBarra() {
  var nav = document.getElementById('nav');

  if(window.scrollY < 112){
    nav.style.backgroundColor = "transparent";
  }else {
    nav.style.backgroundColor = "white";
  }
}
