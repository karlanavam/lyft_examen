document.addEventListener("scroll",cambiarLogo);
document.addEventListener("scroll",apareceSingOn);
document.addEventListener("scroll",fondoBarra);
var eventoVideo = document.getElementsByClassName('imagenVideos');
for(var i = 0 ; i < eventoVideo.length ; i++){
  eventoVideo[i].addEventListener("click", reproduceVideo);
}



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
  // alert("Hola mundo :3 ");
  // document.getElementById("ifr1").style.display="none";
  // // style="visibility: hidden"
  var playVideo= document.getElementsByClassName('reproductorVideo');
  playVideo[0].style.visibility="visible";
  var quitaImagen= document.getElementsByClassName("imagenVideos");
  quitaImagen[0].style.display="none";
  console.log(i);
}
