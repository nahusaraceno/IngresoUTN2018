function Mostrar()
{

	var n1;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var flag=0;

do
{
	n1=parseInt(prompt("Ingrese un número:"));

if(n1>=0)
{positivo+=n1;}

else
{negativo= negativo* n1;flag=1;}
respuesta=prompt("Desea continuar?");}
while(respuesta=='si')

if(flag==0)
{negativo=0;}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN