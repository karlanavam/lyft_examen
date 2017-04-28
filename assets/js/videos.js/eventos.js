var eventoClick = document.getElementsByClassName("videoPlayDerecha");
var eventoClickIzquierda = document.getElementsByClassName("videoPlayIzquierda");
 var quitaPlay=document.getElementsByClassName("imagenVideos");
var video= document.getElementsByClassName("play");
eventoClick[0].addEventListener("click",reproduceVideo);
eventoClick[1].addEventListener("click",reproduceVideo1);
// eventoClickIzquierda[0].addEventListener("click",reproduceVideo2);


function reproduceVideo(){
   eventoClick[0].style.display="none";
   quitaPlay[0].style.display="none";
   video[0].style.visibility="visible";
   video[0].src+="&autoplay=1";
  }

function reproduceVideo1(){
  eventoClick[2].style.display="none";
  quitaPlay[2].style.display="none";
  video[2].style.visibility="visible";
  video[2].src+="&autoplay=1";

}
function reproduceVideo2(){
  // eventoClickIzquierda[0].style.display="none";
  quitaPlay[2].style.display="none";

}
