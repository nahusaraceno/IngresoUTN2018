function Mostrar()
//si es de noche y son pasadas de 24 debo sumarle el mensaje "me voy a un bar". 
//si es de mañana con una hora menor a 11 debemos sumar el mensaje a desayunar.
{
    var hora = prompt("Ingrese");
    
    switch(hora)
    {

case"12":
case"13":
case"14":
case"15":
case"16":
case"17":
case"18":
case"19":
case"20":
    alert("mate");
    break;

case"1":
case"2":
case"3":
case"4":
case"5":
case"6":
case"21":
case"22":
case"23":
case"24":
    alert("noche")
    break;


case"7":
case"8":
case"9":
case"10":
case"11":

alert("mañana");
break;

default:
alert("Esa hora no existe");
break;
}

}
