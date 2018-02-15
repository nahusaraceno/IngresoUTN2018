function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

while(!(numero>= 1 && numero <= 9))
{
	numero=prompt("Incorrecto, reingresar:");
}
alert("correcto");
}//FIN DE LA FUNCIÓN