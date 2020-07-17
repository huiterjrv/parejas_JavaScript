
function inicio() {
    document.getElementById("boton").disabled = true;
    // es para reiniciar el estado de las h1 a block
    for (var i=1; i<=15; i++) {
            document.getElementById('num'+i).style.display="block";
            document.getElementById('n'+i).style.display="none";
    }

    //asigna los nombres a cada variable
    var nombre = new Array(14);
    for (var i = 0 ; i <=14 ; i++) {
        var a = 1+i;
        nombre[i] = document.getElementById('name'+a).value;
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
    var tiemContador = 3;
    let n = 1;
    var tiempo = setInterval(contador,1000);//inicio el reloj
    //la funcion del reloj
    function contador() {
        tiem++;//contador del tiempo
        //aqui empiesa a insrtar los valores octenidos alasar
        if ( tiem == tiemContador) {
            document.getElementById('num'+n).style.display="none";
            document.getElementById('n'+n).style.display="block";
            document.getElementById('n'+n).setAttribute("src","img/"+parreja[(n-1)]+".jpg");
            for (var i = 1 ; i <= 15 ; i++) {
                if (parreja[(n-1)] == i) {
                    i--;
                    document.getElementById('n'+n).setAttribute("title",nombre[i]);
                    break;
                }
            }
            n++;
            document.getElementById('num'+n).style.display="none";
            document.getElementById('n'+n).style.display="block";
            document.getElementById('n'+n).setAttribute("src","img/"+parreja[(n-1)]+".jpg");
            for (var i = 1 ; i <= 15 ; i++) {
                if (parreja[(n-1)] == i) { 
                    i--;
                    document.getElementById('n'+n).setAttribute("title",nombre[i]);
                    break;
                }
            }
            n++;
            tiemContador += 2; 
        }
       
        if ( tiem == 15) {
            document.getElementById('num15').style.display="none";
            document.getElementById('n15').style.display="block";
            document.getElementById('n15').setAttribute("src","img/"+parreja[14]+".jpg");
            for (var i = 1 ; i <= 15 ; i++) {
                if (parreja[14] == i) { 
                    i--;
                    document.getElementById('n15').setAttribute("title",nombre[i]);
                    break;
                }
            }
        }
        //con esyto paro el reloj y la ruleta a los 16min
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