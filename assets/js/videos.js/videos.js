var quitaImagen= document.getElementsByClassName("imagenVideos");
var playVideo= document.getElementsByClassName('reproductorVideo');
var eventoVideo = document.getElementsByClassName('imagenVideos');
eventoVideo[0].addEventListener("click", reproduceVideo);
eventoVideo[1].addEventListener("click", reproduceVideo1);
eventoVideo[2].addEventListener("click", reproduceVideo2);

var eventoVideo = document.getElementsByClassName('imagenVideos');
for(var i = 0 ; i < eventoVideo.length ; i++){
  eventoVideo[i].addEventListener("click", reproduceVideo);
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
