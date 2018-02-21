function Mostrar()
{
var n1;
	var contador=0;
	var acumulador=0;
	var respuesta="si";

while(respuesta=="si")
{
	n1= parseInt(prompt("Ingrese el número"));
	acumulador+=n1;
	contador++;
	respuesta=prompt("desea continuar ?");
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN