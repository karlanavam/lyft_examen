var eventoClick = document.getElementsByClassName("videoPlayDerecha");
var eventoClickIzquierda = document.getElementsByClassName("videoPlayIzquierda");
 var quitaPlay=document.getElementsByClassName("imagenVideos");
var video= document.getElementsByClassName("play");
eventoClick[0].addEventListener("click",reproduceVideo);
// eventoClick[1].addEventListener("click",reproduceVideo1);
// eventoClickIzquierda[0].addEventListener("click",reproduceVideo2);


function reproduceVideo(){
  alert("hola");
  // video[0].style.visibility="visible";
  // video[0].src+="&autoplay=1";
  // eventoClick[0].style.display="none";
  // quitaPlay[0].style.display="none";

}
