function Mostrar()
{
   var cantPares=0; 
   var i;
   var numero
    numero=parseInt(prompt("Ingrese numero:"));

for(var i=1;i<=numero;i++)
{
if(i % 2 == 0) { cantPares++; console.log(i);}

}console.log("Se encontraron "+cantPares+" numeros pares.");



}//FIN DE LA FUNCIÓN