const btnVolverQuiz = clase('.volver-quiz');
const pAciertosQuiz=clase('.aciertos-quiz');
const btnNuevoQuiz=clase('.nuevo-quiz');
const btnRendirseQuiz=clase('.rendirse-quiz');
const pPreguntaQuiz= clase('.p-pregunta-quiz');
const pPreguntaQuiz2= clase('.p-pregunta-quiz-2');
const pPreguntaQuiz3= clase('.p-pregunta-quiz-3');
const pFinQuiz= clase('.p-fin-quiz');
const seleccionQuizes= clase('.seleccion-quizes');
const btnSeleccionQuiz1= clase('.seleccion-quiz-1');
const btnSeleccionQuiz2= clase('.seleccion-quiz-2');
const btnSeleccionQuiz3= clase('.seleccion-quiz-3');
const quizBotones= clase('.quiz-botones-1');
const quizBotones2= clase('.quiz-botones-2');
const quizBotones3= clase('.quiz-botones-3');


var quiz1= clase('.quiz-preguntas1');
var quiz2= clase('.quiz-preguntas2');
var quiz3= clase('.quiz-preguntas3');




btnInicialJuegoQuiz.onclick= elegirQuiz;
btnSeleccionQuiz1.onclick=iniciarQuiz;
btnSeleccionQuiz2.onclick=iniciarQuiz2;
btnSeleccionQuiz3.onclick=iniciarQuiz3;
btnRendirseQuiz.onclick=rendirseQuiz;
btnNuevoQuiz.onclick=elegirQuiz;
btnVolverQuiz.onclick=volverQuiz;

let listaPreguntas = 
['Cuál es su segundo nombre?',
'Cómo se llama su emprendimiento?',
'Qué ascendencia tiene su familia materna? ',
'Quiénes son Mia y Valentina?',
'De qué da clases?',
'Cuál es su banda favorita?',
'Quién es Lorenzo?',
'De qué toma clases en el gimnasio?',
'Dónde trabaja?',
'Con qué prefiere su gin tonic?'];

let correctaQuiz = [2,3,1,1,3,0,1,3,1,2];

let opcionesQuiz = [];

opcionesQuiz.push(['Kathia','Katrina','Katherine','Katalina']);
opcionesQuiz.push(['Sweet Nan','Sweet Kathy','Sweetberries','Sweet Kate']);
opcionesQuiz.push(['Española','Chilena','Peruana','Cubana']);
opcionesQuiz.push(['Sus primas cercanas','Sus hermanas','Sus madrinas','Sus mejores amigas']);
opcionesQuiz.push(['De pilates','De funcional','De danzas clásicas','De elongación']);
opcionesQuiz.push(['No Te Va Gustar','Reik','Morat','Guasones']);
opcionesQuiz.push(['Su vecino favorito','Su ahijado','Su padrino','Su hermano']);
opcionesQuiz.push(['De GAP','De funcional','De calistenia','De crossfit']);
opcionesQuiz.push(['En una lanera nacional','En una oficina administrativa','En una editorial','En una pastelería']);
opcionesQuiz.push(['Mandarina','Pomelo','Frutos rojos','Solo con Sprite']);


let posicionActual = 0;
let preguntasRespondidas= 0;
let respuestasCorrectas = 0;


function elegirQuiz(){
    sectionInicial.style.display='none';
    sectionJuegoQuiz.style.display='flex';
    seleccionQuizes.style.display='flex';
    quiz1.style.display='none';
    quiz2.style.display='none';
    quiz3.style.display='none';
    sectionFinQuiz.style.display='none';
}

function iniciarQuiz(){
    sectionInicial.style.display='none'; 
    sectionJuegoQuiz.style.display='flex';
    quiz1.style.display='flex';
    quiz2.style.display='none';
    quiz3.style.display='none';
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
['Dónde trabaja?',
'De qué equipo de fútbol es hincha?',
'Cuál es su banda favorita?',
'Quién es Luca?',
'Cuánto/as hermano/as tiene?',
'Cuál es su cerveza favorita?',
'Cuánto mide de alto?',
'Cuál es su juego favorito de Play 4?',
'PREGUNTA',
'PREGUNTA'];

let opcionesQuiz2 = [];

opcionesQuiz2.push(['En una obra social','En una firma de abogados','En una distribuidora','En un salón de eventos']);
opcionesQuiz2.push(['Boca','River','San Lorenzo','Talleres']);
opcionesQuiz2.push(['Attaque 77','Cielo Razzo','Green Day','Coldplay']);
opcionesQuiz2.push(['Su primo','Su hermano','Su cuñado','Su sobrino']);
opcionesQuiz2.push(['1','2','3','4']);
opcionesQuiz2.push(['IPA','Cualquier roja','APA','Stout']);
opcionesQuiz2.push(['RESPUESTA','RESPUESTA','RESPUESTA','RESPUESTA']);
opcionesQuiz2.push(['RESPUESTA','RESPUESTA','RESPUESTA','RESPUESTA']);
opcionesQuiz2.push(['RESPUESTA','RESPUESTA','RESPUESTA','RESPUESTA']);
opcionesQuiz2.push(['RESPUESTA','RESPUESTA','RESPUESTA','RESPUESTA']);

let correctaQuiz2 = [2,1,0,3,2,0,3,1,1,0];



function iniciarQuiz2(){
    sectionInicial.style.display='none'; 
    sectionJuegoQuiz.style.display='flex';
    quiz1.style.display='none';
    quiz2.style.display='flex';
    quiz3.style.display='none';
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

// QUIZ 3
let listaPreguntas3 = 
['Dónde se conocieron?',
'Cuántos años tienen?',
'Dónde se comprometieron?',
'Cuántas mascotas tienen?',
'Cuántos años tuvieron de noviazgo?',
'Dónde viven?',
'Cuál serie les encanta?',
'Qué país visitaron en 2019?',
'PREGUNTA',
'De qué color era el primer gato que tuvieron juntos?'];

let opcionesQuiz3 = [];

opcionesQuiz3.push(['En la escuela secundaria','En la playa en primavera','En su primer trabajo','En una fiesta de cumpleaños']);
opcionesQuiz3.push(['Nancy tiene 25 y Kevin 26','Kevin tiene 28 y Nancy 29','Ambos tienen 27','Nancy tiene 28 y Kevin 30']);
opcionesQuiz3.push(['En la playa en su aniversario','En su restaurante favorito','En la cordillera durante sus vacaciones','En un recital en Córdoba']);
opcionesQuiz3.push(['No tienen mascotas','Tres gatos y un loro','Dos gatos y dos perros','Un pez y dos perros']);
opcionesQuiz3.push(['6','8','10','12']);
opcionesQuiz3.push(['En un edificio céntrico','En un hotel','En un duplex ','En una chacra alejada']);
opcionesQuiz3.push(['Los simpsons','Friends','Stranger Things','Todas las anteriores']);
opcionesQuiz3.push(['Uruguay','Mexico','Brasil','España']);
opcionesQuiz3.push(['RESPUESTA','RESPUESTA','RESPUESTA','RESPUESTA']);
opcionesQuiz3.push(['Gris con una manchita blanca','Negro con ojos amarillos','Blanco con una rayita gris','Naranja con blanco y negro']);

let correctaQuiz3 = [1,3,0,2,3,2,3,2,1,0];



function iniciarQuiz3(){
    sectionInicial.style.display='none'; 
    sectionJuegoQuiz.style.display='flex';
    quiz1.style.display='none';
    quiz2.style.display='none';
    quiz3.style.display='flex';
    sectionFinQuiz.style.display='none';
    seleccionQuizes.style.display='none';
    posicionActual = 0;
    respuestasCorrectas = 0;
    preguntasRespondidas = 0;
    cargarPregunta3();
}

function cargarPregunta3(){

    if(listaPreguntas3.length <= posicionActual){
        terminarJuego();
    }
    else{
        limpiaropcionesQuiz3();
        pPreguntaQuiz3.innerHTML=`${listaPreguntas3[posicionActual]}`;
        document.getElementById("opc0-3").innerHTML = opcionesQuiz3[posicionActual][0];
        document.getElementById("opc1-3").innerHTML = opcionesQuiz3[posicionActual][1];
        document.getElementById("opc2-3").innerHTML = opcionesQuiz3[posicionActual][2];
        document.getElementById("opc3-3").innerHTML = opcionesQuiz3[posicionActual][3];
    }
}

function limpiaropcionesQuiz3(){
    document.getElementById("opc0-3").className = "opcion-quiz btn";
    document.getElementById("opc1-3").className = "opcion-quiz btn";
    document.getElementById("opc2-3").className = "opcion-quiz btn";
    document.getElementById("opc3-3").className = "opcion-quiz btn";
}

function comprobarRespuesta3(opcElegida){
    if(opcElegida==correctaQuiz3[posicionActual]){
        document.getElementById(`opc${opcElegida}-3`).className = "opcion-quiz btn opcionCorrecta";
        respuestasCorrectas++;
        preguntasRespondidas++;
    }else{
        document.getElementById(`opc${opcElegida}-3`).className = "opcion-quiz btn opcionIncorrecta";
        document.getElementById(`opc${correctaQuiz2[posicionActual]}-3`).className = "opcion-quiz btn opcionCorrecta";
        preguntasRespondidas++;
    }
    posicionActual++;

    setTimeout(cargarPregunta3,1200);
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
    quiz3.style.display='none';
}

function volverQuiz(){
    sectionInicial.style.display='flex';
    sectionMemo.style.display='none';
    sectionJuegoQuiz.style.display='none';
    sectionFinQuiz.style.display='none';
    pPuntaje.innerHTML=`Puntaje: ${puntaje}`;
}