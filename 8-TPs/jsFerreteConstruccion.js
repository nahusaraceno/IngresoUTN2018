/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largo=parseInt(document.getElementById("Largo").value);
    var ancho=parseInt(document.getElementById("Ancho").value);
    var suma= largo+ ancho;
var perimetro=suma*2;
var total=perimetro*3;
alert("Se necesitan "+total+" metros de alambre.");
}
function Circulo () 
{var radio=parseFloat(document.getElementById("Radio").value);
    
var total=radio*Math.PI*3;
alert("El radio es de "+total.toFixed(2)+"M.");
	
}
function Materiales () 
{
	var largo=parseInt(document.getElementById("Largo").value);
    var ancho=parseInt(document.getElementById("Ancho").value);
    var cemento;
    var cal;
    var suma= largo+ ancho;
var perimetro=suma*2;

}