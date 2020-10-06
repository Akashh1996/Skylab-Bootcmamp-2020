<!DOCTYPE html>
<html>
<head>
<style>
</style>
</head>
<body>

<script>
	var Carton = [
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
		{row : 0, column : 0, val : 0, crossed : false},
	]
	
	let turno = 0, i = 0, j = 0, a = 0, b = 0, c = 0, bingo = 0;
	let exit = false, linea = true, ExitToDesktop = false;
	let x, y, numGritado;
	
	function Compare(numCarton,  numGritado){
		if(numCarton == numGritado){
			return true;
		}else{
			return false;
		}
	}
	
			
	while(!ExitToDesktop){
		
	//preguntar nombre de usuario
		var usuario = prompt("Nombre de Usuario");
		if (usuario == null || usuario == "") {
			alert("debes introducir un nombre de usuario");
			exit = true;
		}else{
			exit = false;
		}
		
	
	//generar cartón
		
		while(i < 15){
			
			x = Math.floor(Math.random() * 9) + 1;
			y = Math.floor(Math.random() * 3) + 1;
			if(Carton[i].row == 0 && Carton[i].column == 0){
				Carton[i].column = x;
				Carton[i].row = y;
				Carton[i].val = Math.floor(Math.random() * 99) + 1;
				i++;
			}		
		}
			
		while(!exit){
			turno++;
			let mensaje = JSON.stringify(Carton)
			exit = !confirm(mensaje);
			numGritado = Math.floor(Math.random() * 99) + 1;
			if(!exit){	
				alert("se ha gritado el numero " + numGritado);
			}
			
			for(i = 0; i < 15; i++){
				Carton[i].crossed = Compare(Carton[i].val, numGritado);
				if(Carton[i].crossed){
					Carton[i].val = "X";
				}
			}
			if(linea){
				for(i = 0; i < 15; i++){
					if(Carton[i].val != "X" && Carton[i].row == 1){
						a++;
					}
					if(Carton[i].val != "X" && Carton[i].row == 2){
						b++;
					}
					if(Carton[i].val != "X" && Carton[i].row == 3){
						c++;
					}
				}
				if(a == 0 || b == 0 || c == 0){
					alert("LINEA!");
					console.log("LINEA");
					linea = false;
				}
			}
			a = 0;
			b = 0;
			c = 0;
			bingo = 0;
			for(i = 0; i < 15; i++){
				if(Carton[i].val != "X"){
					bingo++;
				}
			}
			if(bingo == 0){
				alert("BINGO!");
				exit = true;
			}
		}
		ExitToDesktop = !confirm("Has hecho " + turno + " turnos. Quieres volver a jugar?");
		if (!ExitToDesktop){
			exit = false;
			turno = 0;
			linea = true;
			for(i = 0; i < 15; i++){
				Carton[i].row = 0;
				Carton[i].column = 0;
				Carton[i].crossed = false;
			}
			i = 0;
		}
	}
</script>

</body>
</html>