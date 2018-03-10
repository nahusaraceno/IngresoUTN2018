function Mostrar()
{
var largo;
var ancho;
var perimetro;
largo = parseInt(largo);
largo = (document.getElementById("alrgo").value);
ancho = parseInt(ancho);
ancho = (document.getElementById("ancho").value);
perimetro =  largo*2+ancho*2
alambre = perimetro*3;
alert("el alambre que se debe usar es "+alambre);
}
