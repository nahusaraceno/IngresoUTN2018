function Mostrar()
//
{
var nombre;
var temp;
var contador=0;
var respuesta="continuar"
while(respuesta!="no")
{
    temp=parseInt(prompt("ingrese temperatura"));
    while(temp<-100||temp>100||isNaN(temp))
    {
        temp=parseInt(prompt("ingrese temperatura"));
    }
    nombre=prompt("ingrese nombre");
    while(!isNaN(nombre))
    {nombre=prompt("ingrese nombre");}
    
    
    
    
    
    
    
    
    respuesta=prompt("ingrese no para salir");
}

}
