
function inicio() {
    document.getElementById("boton").disabled = true;
    // es para reiniciar el estado de las h1 a block
    for (var i=1; i<=15; i++) {
            document.getElementById('num'+i).style.display="block";
            document.getElementById('n'+i).style.display="none";
    }

    //generador de numeros alatorios
    var num;
    var parreja = new Array(14);
    var repetir = true;
    //va a insertar cada numero
    for (var i = 0; i<=14; i++) {
        //aqui genera un numero alatorio y lo verifica
        do {
            repetir = false;
            num = 1 + Math.round(Math.random()*14);
            //pregunta si ya asigno el primer numero
            if (i >= 1) {
                //verifico todos los numeros aver si se repite
                for (var c = 0 ; c<=i-1; c++) {
                    //comparo los numeros con el que me dieron para ver si se repite
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
    var tiempo = setInterval(contador,1000);//inicio el reloj
    //la funcion del reloj
    function contador() {
        tiem++;//contador del tiempo
        //aqui empiesa a insrtar los valores octenidos alasar 
        if ( tiem == 3) {
            document.getElementById('num1').style.display="none";
            document.getElementById('n1').style.display="block";
            document.getElementById('n1').setAttribute("src","img/"+parreja[0]+".jpg");
            document.getElementById('num2').style.display="none";
            document.getElementById('n2').style.display="block";
            document.getElementById('n2').setAttribute("src","img/"+parreja[1]+".jpg");
        }
        if ( tiem == 5) {
            document.getElementById('num3').style.display="none";
            document.getElementById('n3').style.display="block";
            document.getElementById('n3').setAttribute("src","img/"+parreja[2]+".jpg");
            document.getElementById('num4').style.display="none";
            document.getElementById('n4').style.display="block";
            document.getElementById('n4').setAttribute("src","img/"+parreja[3]+".jpg");
        }
        if ( tiem == 7) {
            document.getElementById('num5').style.display="none";
            document.getElementById('n5').style.display="block";
            document.getElementById('n5').setAttribute("src","img/"+parreja[4]+".jpg");
            document.getElementById('num6').style.display="none";
            document.getElementById('n6').style.display="block";
            document.getElementById('n6').setAttribute("src","img/"+parreja[5]+".jpg");
        }
        if ( tiem == 9) {
            document.getElementById('num7').style.display="none";
            document.getElementById('n7').style.display="block";
            document.getElementById('n7').setAttribute("src","img/"+parreja[6]+".jpg");
            document.getElementById('num8').style.display="none";
            document.getElementById('n8').style.display="block";
            document.getElementById('n8').setAttribute("src","img/"+parreja[7]+".jpg");
        }
        if ( tiem == 11) {
            document.getElementById('num9').style.display="none";
            document.getElementById('n9').style.display="block";
            document.getElementById('n9').setAttribute("src","img/"+parreja[8]+".jpg");
            document.getElementById('num10').style.display="none";
            document.getElementById('n10').style.display="block";
            document.getElementById('n10').setAttribute("src","img/"+parreja[9]+".jpg");
        }
        if ( tiem == 13) {
            document.getElementById('num11').style.display="none";
            document.getElementById('n11').style.display="block";
            document.getElementById('n11').setAttribute("src","img/"+parreja[10]+".jpg");
            document.getElementById('num12').style.display="none";
            document.getElementById('n12').style.display="block";
            document.getElementById('n12').setAttribute("src","img/"+parreja[11]+".jpg");
        }
        if ( tiem == 15) {
            document.getElementById('num13').style.display="none";
            document.getElementById('n13').style.display="block";
            document.getElementById('n13').setAttribute("src","img/"+parreja[12]+".jpg");
            document.getElementById('num14').style.display="none";
            document.getElementById('n14').style.display="block";
            document.getElementById('n14').setAttribute("src","img/"+parreja[13]+".jpg");
        }
        if ( tiem == 15) {
            document.getElementById('num15').style.display="none";
            document.getElementById('n15').style.display="block";
            document.getElementById('n15').setAttribute("src","img/"+parreja[14]+".jpg");
        }
        //con esyto paro el reloj y la ruleta a los 21min
        if(tiem == 16) {
            alert ("listo");
            clearInterval(tiempo);
            clearInterval(ruleta);
            document.getElementById("boton").disabled = false;
        }	
    }
    //da efecto de carusl de numeros
    var ruleta = setInterval(inicioRuleta,100);
    function inicioRuleta () {
        for (var i=1; i<=15; i++) {
            var t = 1 + Math.round(Math.random()*14);
                document.getElementById('num'+i).setAttribute("src","img/"+t+".jpg");
                t++;
                if (t==15){
                    t = 1;
                }
        }
    }
}