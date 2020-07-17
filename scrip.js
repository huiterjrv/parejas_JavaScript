//generador de numeros alatorios
var num;
var parreja = new Array(14);
var repetir = true;

for (var i = 0; i<=14; i++) {
	do {
		repetir = false;
		num = 1 + Math.round(Math.random()*14);
		if (i >= 1) {
			for (var c = 0 ; c<=i-1; c++) {
				if (parreja[c] == num) {
					repetir = true;
				}
			}
		}
	} while (repetir === true);
	parreja[i] = num;
}

//reloj
var tiem = 1;
var tiempo = setInterval(contador,1000);
function contador() {
	tiem++;
	if(tiem == 26) {
		alert ("listo");
		clearInterval(tiempo);
		clearInterval(ruleta);
	}	
	if ( tiem == 3) {
		document.getElementById('num1').style.display="none";
		document.getElementById('n1').innerHTML=parreja[0];
		document.getElementById('num2').style.display="none";
		document.getElementById('n2').innerHTML=parreja[1];
	}
	if ( tiem == 6) {
		document.getElementById('num3').style.display="none";
		document.getElementById('n3').innerHTML=parreja[2];
		document.getElementById('num4').style.display="none";
		document.getElementById('n4').innerHTML=parreja[3];
	}
	if ( tiem == 9) {
		document.getElementById('num5').style.display="none";
		document.getElementById('n5').innerHTML=parreja[4];
		document.getElementById('num6').style.display="none";
		document.getElementById('n6').innerHTML=parreja[5];
	}
	if ( tiem == 12) {
		document.getElementById('num7').style.display="none";
		document.getElementById('n7').innerHTML=parreja[6];
		document.getElementById('num8').style.display="none";
		document.getElementById('n8').innerHTML=parreja[7];
	}
	if ( tiem == 15) {
		document.getElementById('num9').style.display="none";
		document.getElementById('n9').innerHTML=parreja[8];
		document.getElementById('num10').style.display="none";
		document.getElementById('n10').innerHTML=parreja[9];
	}
	if ( tiem == 18) {
		document.getElementById('num11').style.display="none";
		document.getElementById('n11').innerHTML=parreja[10];
		document.getElementById('num12').style.display="none";
		document.getElementById('n12').innerHTML=parreja[11];
	}
	if ( tiem == 21) {
		document.getElementById('num13').style.display="none";
		document.getElementById('n13').innerHTML=parreja[12];
		document.getElementById('num14').style.display="none";
		document.getElementById('n14').innerHTML=parreja[13];
	}
	if ( tiem == 21) {
		document.getElementById('num15').style.display="none";
		document.getElementById('n15').innerHTML=parreja[14];
	}
}
//da efecto de carusl de numeros
var ruleta = setInterval(inicioRuleta,100);
function inicioRuleta () {
	for (var i=1; i<=15; i++) {
		var t = 1 + Math.round(Math.random()*14);
			document.getElementById('num'+i).innerHTML=t++;
			if (t>=16){
				t = 1;
			}
	}
}








/*
var num;
var parreja[14];
var repetir;

for (var i = 0; i==14; i++) {
	do {
		repetir = false:\;
		num = 1 + Math.floor(Math.random()*14):
		if (i>=1) {
			for (var c = 0 ; i-1; c++) {
				if (parreja[c] == num) {
					repetir = true;
				}
			}
		}
	} while (repetir = false)
	parreja[i] = num;
}

for (var i = 0; i = 14 ; i++) {
	var a = i++;
	if (i<=13) {
		document.write("numero "+parreja[i]+" con el numero "+parreja[a]+"<br>");
	} else {
		document.write("numero quedo solo "+parreja[i]);
	}
}
*/