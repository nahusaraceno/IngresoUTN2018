function Mostrar() {
    //tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
  if(edad < 13){
      alert("niño");
  }else if(edad < 18){
      alert("adolescsnte");
  }
  else{
      alert("adulto");
  }

  



}//FIN DE LA FUNCIÓN