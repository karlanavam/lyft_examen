document.addEventListener("scroll",cambiarLogo);
document.addEventListener("scroll",apareceSingOn);
document.addEventListener("scroll",fondoBarra);

function cambiarLogo() {
  var logo = document.getElementById('imagenLogoCambio');
  var claseLogo = document.getElementById('nav');

  logo.src = "assets/img/logo-pink.png";



}

function apareceSingOn() {
  var sign = document.getElementById("sign");




}

function fondoBarra() {
  var nav = document.getElementById('nav');

    nav.style.backgroundColor = "white";

}
