var imagenDetonador= document.getElementsByClassName('imagenVideos');
for( var i=0 ; i<imagenDetonador.length ; i++){

  // if(i==0){
  imagenDetonador[i].addEventListener("click",verVideo);
    // imagenDetonador[0].src="www.youtube.com";

}

function verVideo(){
  var img = document.getElementById('myImageId');
    img.style.visibility = 'hidden';
  var video= document.getElementById("video1");
  video.style.visibility="visible";
  // <iframe dissable width="420" height="345" src="https://www.youtube.com/embed/XGSy3_Czz8k">
  // </iframe>
  // var nodoPadre = document.getElementsByClassName("")
}
