document.addEventListener("scroll",cambiarNav);

function cambiarNav() {
  cambiarLogo();
  fondoBarra();
  apareceSingOn();
  colorTextoNav();
}

function cambiarLogo() {
  var logo = document.getElementById('imagenLogoCambio');

  if(window.scrollY < 112){
    logo.src = "assets/img/logo-white.png";
  }else {
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

function colorTextoNav() {

  if(window.scrollY > 112){
    document.getElementById("help").style.color = "black";
  }else {
    document.getElementById("help").style.color = "white";
  }
}
