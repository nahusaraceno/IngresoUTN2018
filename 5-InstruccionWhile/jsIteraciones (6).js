function Mostrar()
{var n1;

	var contador=0;
	var acumulador=0;

while(contador< 5)
{
	n1=parseInt(prompt("Ingrese un número"));
	acumulador= acumulador + n1;
	contador= contador+1
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN