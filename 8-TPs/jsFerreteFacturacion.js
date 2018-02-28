/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var n1=parseFloat(document.getElementById("PrecioUno"));
    var n2=parseFloat(document.getElementById("PrecioDos"));
    var n3=parseFloat(document.getElementById("PrecioTres"));
	var total= n1+n2+n3;

alert("El total es "+total);
}
function Promedio () 
{var n1=parseFloat(document.getElementById("PrecioUno"));
    var n2=parseFloat(document.getElementById("PrecioDos"));
    var n3=parseFloat(document.getElementById("PrecioTres"));
    var promedio= (n1+n2+n3)/3;
	alert(promedio);
}
function PrecioFinal () 
{
	var n1=parseFloat(document.getElementById("PrecioUno"));
    var n2=parseFloat(document.getElementById("PrecioDos"));
    var n3=parseFloat(document.getElementById("PrecioTres"));
	var total= n1+n2+n3;
    var iva= total*0.21;
    var precioFinal= total+ iva;
    alert(precioFinal);
}