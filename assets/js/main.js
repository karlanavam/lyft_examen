document.addEventListener("scroll",cambiarNav);

function cambiarNav() {
  cambiarLogo();
  fondoBarra();
  apareceSingOn();
}

function cambiarLogo() {
  var logo = document.getElementById('imagenLogoCambio');
  var claseLogo = document.getElementById('nav');

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

var eventoVideo = document.getElementsByClassName('imagenVideos');
for(var i = 0 ; i < eventoVideo.length ; i++){
  eventoVideo[i].addEventListener("click", reproduceVideo);
}

function reproduceVideo(){
  alert("Hola mundo :3 ");
}
