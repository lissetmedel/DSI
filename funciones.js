function colores(){
	alert("Esta función más adelante cambiará los colores");
}

function crear(){
	let ancho = document.getElementById('ancho').value;
	let alto = document.getElementById('alto').value;
	let color = document.getElementById('color').value;

	document.getElementById('cuadrado').style.background = color;
	document.getElementById('cuadrado').style.height = alto+"px";
	document.getElementById('cuadrado').style.width = ancho+"px";
}