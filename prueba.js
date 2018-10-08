console.log("Hola Mundo")

//Variables numericas
var numero = 8;
console.log("numero: ", numero);

var x = document.getElementById("variable");
x.innerHTML = "Uso de una variable numerica: " + numero + ".";

//Variables de texto
var palabra = "palabras";
console.log("palabras: ", palabra);

var x = document.getElementById("variable2");
x.innerHTML = "Uso de una variable de texto: " + palabra + ".";

//variables boleanas
var boleana = true;
console.log("boleana: ", boleana);

var x = document.getElementById("variable3");
x.innerHTML = "Uso de una variable boleana: " + boleana + ".";

//Variables de tipo arreglo(Array)
var colores = ["rojo", "amarillo", "azul"];
console.log("colores:", colores[1]);

var x = document.getElementById("variable4");
x.innerHTML = "Uso de una variable de tipo arreglo: " + colores[1] + ".";

//Variablesde tipo objeto (object: propiedad y el valor)
var jugo = {"ingrediente1":"pera", "ingrediente2":"mandarina", "ingrediente3":"platano"};
console.log("jugo: ","ingrediente1");
var x = document.getElementById("variable5");
x.innerHTML = "Uso de una variable de tipo objeto: " + "fresa ","ingrediente1" + ".";



//VARIABLES DOM (Modelo de objetos del documento)
/* El DOM es la estructura de objetos que genera el navegador cuando se carga
un documento y se puede alterar mediante javascript para cambiar dinamicamente los contenidos y aspecto de la
pagina */

var caja = document.querySelector("#caja");
console.log("caja: ", caja);


caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "pink";

var cajita = document.querySelector("#cajita");
console.log("caja: ", cajita);


cajita.style.width = "100px";
cajita.style.height = "100px";
cajita.style.background = "yellow";




/*=========Evento del DOM====*/

var recuadro = document.querySelector("#recuadro");


function cambiarColor(){
	recuadro.style.width = "200px";
	recuadro.style.background = "brown";

}
function estadoOriginal(){
	recuadro.style.width = "200px";
	recuadro.style.background = "red";
}

//=========================
//EVENTOS DESDE JAVASCRIPT
//=========================

var boton = document.querySelector("#boton");

boton.addEventListener("mouseover",moverCaja)

function moverCaja(){

	recuadro.style.width = "500px";
	recuadro.style.transition = "0s width ease";
	recuadro.style.background = "pink";

}


/*======FUNCIONES CON  RETORNO SIN PARAMETROS*/

function retorno1(){
	var numero = 5;
	
	}

	console.log(retorno1());


/*===FUNCIONES CON RETORNO CON PARAMETROS===*/

function retorno2(numero){
	return numero;
}

console.log(retorno2(4))




/*====CONDICIONES======*/

var a = 5;
var b = 10;

if(a > b){

	console.log("a es mayor que b")
}else if(a == b){
	console.log("a es lo mismo que b")
}else{
	console.log("a no es lo mismo que b, y a es menor que b")
}




/*=====CAMBIOS====*/

var dia ="domingo";

switch(dia){


	case "sabado":
	console.log("voy a estudiar asp y jsp");
	break;

	case "martes":
	console.log("voy a estudiar css");
	break;

	case "jueves":
	console.log("voy a descansar");
	break;

	case "domingo":
	console.log("voy a comer");
	break;

	default: console.log("voy a estudiar javascript");

}



/*====CICLO FOR=========*/

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);


for(var i = 0; i < cajas.length; i++){

	cajas[i].style.width = "50px";
	cajas[i].style.height = "50px";
	cajas[i].style.background = "green";
	cajas[i].style.marginTop = "10px";
	cajas[i].style.marginRight = "10px";
	cajas[i].style.display = "inline-block";
}

for(var i = 1; i<= 5; i++){
console.log("i", i);
}
	 

/*=========CICLO WHILE (MIENTRAS, HACE Y DESPUES EVALUA)===*/

var n = 1;

while(n <= 5){
	console.log("n", n);
	n++;
}



/*======CICLO DO WHILE=====*/

var p = 1;

do{
	console.log("p", p);
	p++
}

while(p<= 5);
