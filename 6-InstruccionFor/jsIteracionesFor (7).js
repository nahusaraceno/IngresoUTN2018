function Mostrar()
{

var cantDiv=0; 
   var i;
   var numero;

    numero=parseInt(prompt("Ingrese numero:"));

for(var i=1;i<=numero;i++)
{
if(numero % i == 0) { cantDiv++; console.log(i);}

}
console.log("Se encontraron "+cantDiv+" numeros divisores.");


}//FIN DE LA FUNCIÓN