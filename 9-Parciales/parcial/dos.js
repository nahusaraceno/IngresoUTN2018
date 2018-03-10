function Mostrar()
{
  var importe = parseInt(prompt("Ingresar importe: "));
var iva = importe*0.21;
var importefinal = importe+iva;
document.getElementById("importeFinal").value = importefinal;

}
