function Mostrar()
{

	var flag=0; var max; var min; var numero;
	// declarar variables
	
	var respuesta="si";

	while(respuesta=='si')
	{
		numero=parseInt(prompt("Ingrese un numero:"));
		if(numero>max || flag==0) 
		{max=numero;}
	
	if(numero<min || flag==0){ min = numero;flag=1;}
	
respuesta=prompt("Desea continuar?");

	}
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;


}//FIN DE LA FUNCIÓN