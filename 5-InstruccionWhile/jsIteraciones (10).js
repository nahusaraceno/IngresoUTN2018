function Mostrar() {
	var sumaneg = 0;
	var sumapos = 0;
	var cantidadpos = 0; 
	var cantidadneg = 0; 
	var cantidadceros = 0;
	var cantidadpares = 0;
	var promediopos; 
	var promedioneg;
	var diferencia; 
	var numero;
	var respuesta = "si";
	while (respuesta == "si") {
		numero = parseInt(prompt("Ingrese un numero:"));
		if (numero < 0) { sumaneg += numero; cantidadneg++; }
		else if (numero > 0) { sumapos += numero; cantidadpos++; }
		else { ; cantidadceros++; }
		respuesta = prompt("Desea continuar?");}
	if (numero % 2 == 0) { cantidadpares++; }
	promediopos = sumapos / cantidadpos;
	promedioneg = sumaneg / cantidadneg;
	diferencia = sumapos - sumaneg;
	document.write("Suma todos los numeros negativos: " + sumaneg + "<br/>");
	document.write("Suma todos los numeros positivos: " + sumapos + "<br/>");
	document.write("Cantidad de numeros positivos: " + cantidadpos + "<br/>");
	document.write("Cantidad de numeros negativos: " + cantidadneg + "<br/>");
	document.write("Cantidad de ceros negativos: " + cantidadceros + "<br/>");
	document.write("Cantidad de numeros pares: " + cantidadpares + "<br/>");
	document.write("Promedio de numeros positivos: " + promediopos + "<br/>");
	document.write("Promedio de numeros negativos: " + promedioneg + "<br/>");
	document.write("Diferencia entre numeros positivos y negativos: " + promediopos + "<br/>");



}//FIN DE LA FUNCIÓN