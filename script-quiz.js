const btnVolverQuiz = clase('.volver-quiz');
const pAciertosQuiz=clase('.aciertos-quiz');
const btnNuevoQuiz=clase('.nuevo-quiz');
const btnRendirseQuiz=clase('.rendirse-quiz');
const pPreguntaQuiz= clase('.p-pregunta-quiz');
const pPreguntaQuiz2= clase('.p-pregunta-quiz-2');
const pFinQuiz= clase('.p-fin-quiz');
const seleccionQuizes= clase('.seleccion-quizes');
const btnSeleccionQuiz1= clase('.seleccion-quiz-1');
const btnSeleccionQuiz2= clase('.seleccion-quiz-2');
const quizBotones= clase('.quiz-botones-1');
const quizBotones2= clase('.quiz-botones-2');


var quiz1= clase('.quiz-preguntas1');
var quiz2= clase('.quiz-preguntas2');



btnInicialJuegoQuiz.onclick= elegirQuiz;
btnSeleccionQuiz1.onclick=iniciarQuiz;
btnSeleccionQuiz2.onclick=iniciarQuiz2;
btnRendirseQuiz.onclick=rendirseQuiz;
btnNuevoQuiz.onclick=elegirQuiz;
btnVolverQuiz.onclick=volverQuiz;

let listaPreguntas = 
['Dónde se conocieron?',
'Cuántos años tienen?',
'Cuántas mascotas tienen?',
'Dónde se comprometieron?',
'Quiénes son Juana, Olivia y Ana?',
'Cómo se llaman las hermanas de Rodri?',
'Una difícil: Qué piedra tiene el anillo de compromiso de Paula? 💍',
'Dónde viven?',
'Qué lugar NO visitaron?',
'Qué le encanta preparar a Rodri?'];

let correctaQuiz = [1,3,2,0,1,2,0,3,1,0];

let opcionesQuiz = [];

opcionesQuiz.push(['En la escuela','En la universidad','En el trabajo','En una fiesta']);
opcionesQuiz.push(['Pau tiene 25 y Ro 26','Ro tiene 28 y Pau 29','Ambos tienen 27','Pau tiene 26 y Ro 29']);
opcionesQuiz.push(['Un perro: Firulais','Dos gatos: Gaspar y Canela','No tienen mascotas','Un loro y un pez: Río y Nemo']);
opcionesQuiz.push(['En la cordillera durante sus vacaciones','En la playa en el verano','En su restaurante favorito','En su casa el día de su aniversario']);
opcionesQuiz.push(['Las primas cercanas de Paula','Las sobrinas de los novios','Las tías favoritas de Rodri','Las hijas de los novios']);
opcionesQuiz.push(['María y Ángeles','Paloma y Jesica','Alma y Estefanía','Dulce María y Catalina']);
opcionesQuiz.push(['Una amatista (violeta)','Una esmeralda (verde)','Un rubí (rojo)','Un ámbar (amarillo)']);
opcionesQuiz.push(['En un edificio','En un complejo de departamentos','En un hotel','En una chacra']);
opcionesQuiz.push(['Florianópolis, Brasil','Santiago, Chile','Misiones, Argentina','Punta del Este, Uruguay']);
opcionesQuiz.push(['Caipirinha','Margaritas','Daiquiris','Piña colada']);


let posicionActual = 0;
let preguntasRespondidas= 0;
let respuestasCorrectas = 0;


function elegirQuiz(){
    sectionInicial.style.display='none';
    sectionJuegoQuiz.style.display='flex';
    seleccionQuizes.style.display='flex';
    quiz1.style.display='none';
    quiz2.style.display='none';
    sectionFinQuiz.style.display='none';
}

function iniciarQuiz(){
    sectionInicial.style.display='none'; 
    sectionJuegoQuiz.style.display='flex';
    quiz1.style.display='flex';
    quiz2.style.display='none';
    sectionFinQuiz.style.display='none';
    seleccionQuizes.style.display='none';
    posicionActual = 0;
    respuestasCorrectas = 0;
    preguntasRespondidas = 0;
    cargarPregunta();
}

function cargarPregunta(){

    if(listaPreguntas.length <= posicionActual){
        terminarJuego();
    }
    else{
        limpiaropcionesQuiz();
        pPreguntaQuiz.innerHTML=`${listaPreguntas[posicionActual]}`;
        document.getElementById("opc0").innerHTML = opcionesQuiz[posicionActual][0];
        document.getElementById("opc1").innerHTML = opcionesQuiz[posicionActual][1];
        document.getElementById("opc2").innerHTML = opcionesQuiz[posicionActual][2];
        document.getElementById("opc3").innerHTML = opcionesQuiz[posicionActual][3];
    }
}

function limpiaropcionesQuiz(){
    document.getElementById("opc0").className = "opcion-quiz btn";
    document.getElementById("opc1").className = "opcion-quiz btn";
    document.getElementById("opc2").className = "opcion-quiz btn";
    document.getElementById("opc3").className = "opcion-quiz btn";
}

function comprobarRespuesta(opcElegida){
    if(opcElegida==correctaQuiz[posicionActual]){
        document.getElementById(`opc${opcElegida}`).className = "opcion-quiz btn opcionCorrecta";
        respuestasCorrectas++;
        preguntasRespondidas++;
    }else{
        document.getElementById(`opc${opcElegida}`).className = "opcion-quiz btn opcionIncorrecta";
        document.getElementById(`opc${correctaQuiz[posicionActual]}`).className = "opcion-quiz btn opcionCorrecta";
        preguntasRespondidas++;
    }
    posicionActual++;

    setTimeout(cargarPregunta,1200);
}

// QUIZ 2
let listaPreguntas2 = 
['Dónde prefiere vacacionar Paula?',
'Qué auto tienen?',
'Quiénes son María y Ángel?',
'Dónde creció Rodri?',
'Cuál es la bebida alcohólica favorita de Paula?',
'Una difícil: Qué ascendencia tiene la familia materna de Rodri? 👀',
'A qué taller de manualidades iba Paula?',
'Dónde trabaja Ro?',
'Quién es Ragnar?',
'De dónde vinieron parientes para la fiesta de hoy?'];

let opcionesQuiz2 = [];

opcionesQuiz2.push(['En las playas más solitarias','En una ciudad con mucho para hacer','En la naturaleza, como la cordillera','Donde haya mucha nieve']);
opcionesQuiz2.push(['Un Citroen c3 oscuro','Un Peugeot 206 claro','Un Volkswagen Golf rojo','Un Ford Focus blanco']);
opcionesQuiz2.push(['Los tíos de Rodri','Los suegros de Paula','Los primos de Rodri','Los hermanos de Paula']);
opcionesQuiz2.push(['En Buenos Aires','En Santa Cruz','En Madryn','En Córdoba']);
opcionesQuiz2.push(['El Campari','El Fernet Branca','El Gancia','El vino blanco dulce']);
opcionesQuiz2.push(['Portuguesa','Española','Italiana','Mexicana']);
opcionesQuiz2.push(['Collages','Cerámica','Pintura sobre madera','Carpintería']);
opcionesQuiz2.push(['En una firma de abogados','En una tienda de electrónica','En una fábrica de bebidas','En una agencia de transportes']);
opcionesQuiz2.push(['Un perro','Un vecino','Un conejo','Una oveja']);
opcionesQuiz2.push(['Esquel, San Juan y Córdoba','Río Negro y Formosa','Buenos Aires, Mendoza y Neuquén','Chile, Santa Cruz y Jujuy']);

let correctaQuiz2 = [2,0,1,3,0,2,1,2,3,0];



function iniciarQuiz2(){
    sectionInicial.style.display='none'; 
    sectionJuegoQuiz.style.display='flex';
    quiz1.style.display='none';
    quiz2.style.display='flex';
    sectionFinQuiz.style.display='none';
    seleccionQuizes.style.display='none';
    posicionActual = 0;
    respuestasCorrectas = 0;
    preguntasRespondidas = 0;
    cargarPregunta2();
}

function cargarPregunta2(){

    if(listaPreguntas2.length <= posicionActual){
        terminarJuego();
    }
    else{
        limpiaropcionesQuiz2();
        pPreguntaQuiz2.innerHTML=`${listaPreguntas2[posicionActual]}`;
        document.getElementById("opc0-2").innerHTML = opcionesQuiz2[posicionActual][0];
        document.getElementById("opc1-2").innerHTML = opcionesQuiz2[posicionActual][1];
        document.getElementById("opc2-2").innerHTML = opcionesQuiz2[posicionActual][2];
        document.getElementById("opc3-2").innerHTML = opcionesQuiz2[posicionActual][3];
    }
}

function limpiaropcionesQuiz2(){
    document.getElementById("opc0-2").className = "opcion-quiz btn";
    document.getElementById("opc1-2").className = "opcion-quiz btn";
    document.getElementById("opc2-2").className = "opcion-quiz btn";
    document.getElementById("opc3-2").className = "opcion-quiz btn";
}

function comprobarRespuesta2(opcElegida){
    if(opcElegida==correctaQuiz2[posicionActual]){
        document.getElementById(`opc${opcElegida}-2`).className = "opcion-quiz btn opcionCorrecta";
        respuestasCorrectas++;
        preguntasRespondidas++;
    }else{
        document.getElementById(`opc${opcElegida}-2`).className = "opcion-quiz btn opcionIncorrecta";
        document.getElementById(`opc${correctaQuiz2[posicionActual]}-2`).className = "opcion-quiz btn opcionCorrecta";
        preguntasRespondidas++;
    }
    posicionActual++;

    setTimeout(cargarPregunta2,1200);
}

function terminarJuego(){
    sectionFinQuiz.style.display='flex';
    sectionJuegoQuiz.style.display='none';
    if(preguntasRespondidas==10 && respuestasCorrectas>5){
        pFinQuiz.innerHTML=`Genial! Respondiste ${respuestasCorrectas} preguntas correctamente. <br> Sumás ${Math.floor(respuestasCorrectas/2)} puntos 💪🏽`
        puntaje+=(Math.floor(respuestasCorrectas/2));
    }else{
        pFinQuiz.innerHTML=`Sólo respondiste ${respuestasCorrectas} preguntas correctamente 👎🏼 <br> Ésta vez no sumás puntos. Intentalo de nuevo! <br> Te recomiendo preguntar a otros invitados, seguro alguno sabe...`
    }
}

function rendirseQuiz(){
    sectionInicial.style.display='flex';
    sectionMemo.style.display='none';
    sectionJuegoQuiz.style.display='none';
    seleccionQuizes.style.display='none';
    quiz1.style.display='none';
    quiz2.style.display='none';
}

function volverQuiz(){
    sectionInicial.style.display='flex';
    sectionMemo.style.display='none';
    sectionJuegoQuiz.style.display='none';
    sectionFinQuiz.style.display='none';
    pPuntaje.innerHTML=`Puntaje: ${puntaje}`;
}