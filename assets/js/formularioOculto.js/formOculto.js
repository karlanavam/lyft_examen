var nombre=document.getElementsByClassName("entradaForm")[0];
    nombre.addEventListener("click",apareceForm);

  function apareceForm(){
    var formRestante=document.getElementById("desplegar");
        formRestante.style.display="block"
  }
