function Mostrar()
{
var num1 = parseInt(prompt("Ingrese el primer numero:"));
var num2 = parseInt(prompt("Ingrese el segundo numero:"));
var resultado;
var resta;
var suma;
if(num1==num2)
{
    resultado=num1*num2;
    alert("El resultado es "+resultado);
}
else if(num1>num2)
{
    resta=num1-num2;
 alert("El resultado es: "+resta);
   }
else if(num1<num2)
{
    suma=num1+num2;
    alert("El resultado es: "+suma);
}
}
