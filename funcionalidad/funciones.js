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
function menu(){
	document.getElementById('menu').classList.toggle('visible');
	let e=document.querySelectorAll('.contenedor');
	let t=e.length;
	for(i=t-1; i>=0;i--){
		e[i].classList.toggle('size');
	}
}