function Mostrar()
{
var i;
var numero=parseInt(prompt("Ingrese el numero:"));

var flag= true;
for(i=2;i< numero;i++)
{
if(numero % i == 0)
{
    flag=false;
    break;
}
}
if(flag)
{alert("Este numero es primo.");}
else
{alert("Este numero no es primo.");}

}

//FIN DE LA FUNCIÓN