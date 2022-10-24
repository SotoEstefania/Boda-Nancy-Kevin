
const btnVolverQuiz = clase('.volver-quiz');
const pAciertosQuiz=clase('.aciertos-quiz');
const btnNuevoQuiz=clase('.nuevo-quiz');
const btnRendirseQuiz=clase('.rendirse-quiz');
const pPreguntaQuiz= clase('.p-pregunta-quiz');
const pFinQuiz= clase('.p-fin-quiz');


btnInicialJuegoQuiz.onclick= iniciarQuiz;
btnRendirseQuiz.onclick=rendirseQuiz;
btnNuevoQuiz.onclick=iniciarQuiz;
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
'De dónde vinieron parientes para la fiesta de hoy?'];

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
opcionesQuiz.push(['Esquel, San Juan y Córdoba','Río Negro y Formosa','Buenos Aires, Mendoza y Neuquén','Chile, Santa Cruz y Jujuy']);



let listaPreguntas2 = 
['Dónde prefiere vacaionar Paula?',
'Qué auto tienen?',
'Quiénes son María y Ángel?',
'Dónde creció Rodri?',
'Cuál es la bebida alcohólica favorita de Paula?',
'Una difícil: Qué ascendencia tiene la familia materna de Rodri? 👀',
'Dónde trabaja Ro?',
'Qué le encanta preparar a Rodri?',
'Pregunta?',
'Pregunta?'];

opcionesQuiz.push(['En las playas más solitarias','En una ciudad donde haya mucho para hacer','En un lugar muy natural, como la cordillera','En lugares donde haya mucha nieve']);
opcionesQuiz.push(['Un Citroen c3 morado','Un Peugeot 206 gris','Un Volkswagen Golf rojo','Un Ford Focus blanco']);
opcionesQuiz.push(['Los tíos de Paula','Los padres de Rodri','Los hermanos de Paula','Los primos de Rodri']);
opcionesQuiz.push(['En Buenos Aires','En Santa Cruz','En Madryn','En Córdoba']);
opcionesQuiz.push(['El Campari','El Fernet Branca','El Gancia','El vino blanco dulce']);
opcionesQuiz.push(['Portuguesa','Española','Italiana','Mexicana']);
opcionesQuiz.push(['En una firma de abogados','En una tienda de electrónica','En una fábrica de bebidas','En una agencia de transportes']);
opcionesQuiz.push(['Caipirinha','Margaritas','Daiquiris','Piña colada']);
opcionesQuiz.push(['Respuesta','RespuestaC','Respuesta','Respuesta']);
opcionesQuiz.push(['Respuesta','Respuesta','Respuesta','RespuestaC']);

let correctaQuiz2 = [2,0,1,3,0,2,2,0,1,3];

let opcionesQuiz2 = [];





let posicionActual = 0;
let preguntasRespondidas= 0;
let respuestasCorrectas = 0;


function iniciarQuiz(){
    sectionInicial.style.display='none'; 
    sectionJuegoQuiz.style.display='flex';
    sectionFinQuiz.style.display='none';
    posicionActual = 0;
    respuestasCorrectas = 0;
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
function terminarJuego(){
    sectionFinQuiz.style.display='flex';
    sectionJuegoQuiz.style.display='none';
    if(preguntasRespondidas==10 && respuestasCorrectas>5){
        pFinQuiz.innerHTML=`Genial! Respondiste ${respuestasCorrectas} preguntas correctamente. <br> Sumás ${Math.floor(respuestasCorrectas/2)} puntos 💪🏽`
        puntaje+=(Math.floor(respuestasCorrectas/2));
    }else{
        pFinQuiz.innerHTML=`Sólo respondiste ${respuestasCorrectas} preguntas correctamente. <br> Ésta vez no sumás puntos. Intentalo de nuevo!`
    }

}

function rendirseQuiz(){
    sectionInicial.style.display='flex';
    sectionMemo.style.display='none';
    sectionJuegoQuiz.style.display='none';
}

function volverQuiz(){
    sectionInicial.style.display='flex';
    sectionMemo.style.display='none';
    sectionJuegoQuiz.style.display='none';
    sectionFinQuiz.style.display='none';
    pPuntaje.innerHTML=`Puntaje: ${puntaje}`;
}