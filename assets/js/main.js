document.addEventListener("mousemove",cambiarLogo);
document.addEventListener("mousemove",apareceSingOn);

function cambiarLogo() {
  var logo = document.getElementById('imagenLogoCambio');
  var header = document.getElementById('pruebaNav').offsetTop;
  var claseLogo = document.getElementById('nav');

  logo.src = "assets/img/logo-white.png";

}

function apareceSingOn() {
  var sign = document.getElementById("sign");
  console.log(sign);
  sign.filter = "0%";


}

function barraNavColor() {


}
