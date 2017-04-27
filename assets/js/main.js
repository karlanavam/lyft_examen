document.addEventListener("scroll",cambiarLogo);
document.addEventListener("scroll",apareceSingOn);
document.addEventListener("scroll",fondoBarra);
var quitaImagen= document.getElementsByClassName("imagenVideos");
var playVideo= document.getElementsByClassName('reproductorVideo');
var eventoVideo = document.getElementsByClassName('imagenVideos');
console.log(eventoVideo);
eventoVideo[0].addEventListener("click", reproduceVideo);
eventoVideo[1].addEventListener("click", reproduceVideo1);
eventoVideo[2].addEventListener("click", reproduceVideo2);





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

function reproduceVideo(){
  playVideo[0].style.visibility="visible";
  playVideo[0].src+="&autoplay=1";
  quitaImagen[0].style.display="none";
}
function reproduceVideo1(){
  playVideo[1].style.visibility="visible";
  playVideo[1].src+="&autoplay=1";
  quitaImagen[1].style.display="none";
}
function reproduceVideo2(){
  playVideo[2].style.visibility="visible";
  playVideo[2].src+="&autoplay=1";
  quitaImagen[2].style.display="none";
}
