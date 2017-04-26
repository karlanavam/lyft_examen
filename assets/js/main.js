var imagenDetonador= document.getElementsByClassName('imagenVideos');
for( var i=0 ; i<imagenDetonador.length ; i++){
  console.log(imagenDetonador[i]);
  imagenDetonador[i].addEventListener("click",verVideo);
}

function verVideo(){
  alert("Hola");
}
