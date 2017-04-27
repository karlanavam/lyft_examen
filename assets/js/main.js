document.addEventListener("scroll",cambiarLogo);
document.addEventListener("scroll",apareceSingOn);
document.addEventListener("scroll",fondoBarra);

function cambiarLogo() {
  var logo = document.getElementById('imagenLogoCambio');
  var claseLogo = document.getElementById('nav');

  if(window.scrollY <90){
    logo.src = "assets/img/logo-white.png";
  }else {
    logo.src = "assets/img/logo-pink.png";
  }

}

function apareceSingOn() {
  var sign = document.getElementById("sign");

}

function fondoBarra() {
  var nav = document.getElementById('nav');

  if(window.scrollY <90){
    nav.style.backgroundColor = "transparent";
  }else {
    nav.style.backgroundColor = "white";
  }
}
