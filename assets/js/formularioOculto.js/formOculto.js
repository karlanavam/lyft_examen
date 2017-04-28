function apareceFormOculto() {
  var alDarClic=document.getElementsByClassName("entradaForm")[0];
  alDarClic.addEventListener("click",apareceForm);

  function apareceForm(){
    var apareceElem = document.getElementsByClassName('display');
    for(var i = 0 ; i < apareceElem.length ; i++){
      apareceElem[i].style.display="visible";
    }
  }
}
apareceFormOculto();
