window.onload = function(){
	
	var imagen = document.getElementById("imagen");
	var browser = navigator.userAgent;
	var n = browser.search("Firefox");
	var c = browser.search("Chrome");
	var s = browser.search("Safari");
	var e = browser.search("Edge");
	var o = browser.search("OPR");
	


		console.log("Expresion: ", n);
		console.log("Expresion: ", c);
		console.log("Expresion: ", s);
		console.log("Expresion: ", e);
		console.log("Expresion: ", o);
		
		console.log(n>1);
		console.log(c>1);
		console.log(s>1);
		console.log(e>1);
		console.log(o>1);
		

			if (n>1){
				document.getElementById("titulo").innerHTML = "Bienvenido!! A Firefox";
				imagen.src = "img/fire.png";
				imagen.style.width = "100px";
				imagen.style.height = "100px";
			}
			if (c>1){
				document.getElementById("titulo").innerHTML = "Bienvenido!! A Chrome";
				imagen.src = "img/c.png";
				imagen.style.width = "100px";
				imagen.style.height = "100px";
			}
			
			if (s>1 && c<1){
				document.getElementById("titulo").innerHTML = "Bienvenido!! A Safari";
				imagen.src = "img/safari.png";
				imagen.style.width = "100px";
				imagen.style.height = "100px";

			}
			if (e>1){
				document.getElementById("titulo").innerHTML = "Bienvenido!! A Microsoft Edge";
				imagen.src = "img/micro.png";
				imagen.style.width = "300px";
				imagen.style.height = "300px";
			}
			if (o>1){
				document.getElementById("titulo").innerHTML = "Bienvenido!! A Opera";
				imagen.src = "img/Opera.png";
				imagen.style.width = "100px";
				imagen.style.height = "100px";
			}




			console.log("imagen: ", imagen);
			console.log("titulo: ", browser);
	}