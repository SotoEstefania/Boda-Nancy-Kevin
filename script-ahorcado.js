

// Palabra a averiguar
var palabra = "";
var guion;
//Imagenes
const imagenAhorcado= clase('.imagen-ahorcado');
// Num aleatorio
var random;
// Elemento html de la palabra
var parrafoPalabra = clase("#palabra-a-adivinar");
// Contador de intentos
var intentos = clase('.intentos');
const intentosText=clase('.intentos-text');
var conteoAciertos=0;
var conteoVidas=5;
// Boton de reset
const nuevoAhorcado = clase(".nuevo-juego");
// Botones iniciarAhorcado, pista y desistir
const btnPista = clase('.btn-pista');
const btnDesistir = clase('.desistir');
// Abecedario
const letrasAbecedario = document.querySelectorAll('#btn-letra');
var botonLetra;
var letra;
var intentosFin = clase('.intentos-finjuego');
var spanPista = clase('.span-pista');

// Secciones
const divAhorcado = clase('.div-imagen-ahrcado');


const palabras=[['Ramo','Accesorio de flores de la novia'],['Vestido','Prenda, normalmente blanca, que usa la novia'],['Invitados','Si la fiesta es grande, hay muchos'],['Musica','Nos hace bailar'],['Catering','Se encarga de preparar los alimentos'],['Zapatos','Paula esta usando unos blancos y Rodri unos negros'],['Flores','Decoracion natural'],['Globos','Decoracion ovalada que se infla'],['Juez','Persona que casa a los novios'],['Matrimonio','Los novios pasan a ser un...'],['Universidad','Donde se conocieron Paula y Rodri'],['Maquillaje','Delineador, labial, base, sombras...'],['Peinado','Puede ser suelto, con trenzas, con rodete...'],['Velo','Accesorio para la cabeza de la novia'],['Anillos','Objeto simbolo de union y matrimonio'],['Recepcion','Cuando los invitados esperan a los novios'],['Bebidas','Gaseosas, vinos, cervezas'],['Esmoquin','Vestimenta del novio'],['Cuñados','Los hermanos se transforman en...'],['Propuesta','Cuando el novio ofrece el anillo a la novia'],['Nazael','Segundo nombre del novio'],['Arroz','Se le lanza a los novios en símbolo de abundancia'],['Moño','Accesorio del novio'],['Souvenir','Al finalizar la fiesta, los invitados se llevan uno'],['Libreta','Los novios firman la ... de familia'],['Familia','Ahora los novios son una...'],['Tragos','Los adultos van a la barra a buscarlos toda la noche'],['Brindis','Tradición de chocar las copas'],['Vals','Primer baile tradicional del matrimonio'],['',''],['',''],['',''],['',''],];

btnInicialJuegoAhorcado.onclick= function(){iniciarAhorcado();sectionInicial.style.display='none'; sectionJuegoAhorcado.style.display='flex';}
nuevoAhorcado.onclick=iniciarAhorcado;

function iniciarAhorcado(){
    // Para limpiar los guiones de la palabra anterior y reiniciarAhorcado conteos
    conteoAciertos = 0;
    conteoVidas = 5;
    parrafoPalabra.innerHTML='';
    intentosText.textContent= ('Intentos restantes: ' + conteoVidas);
    imagenAhorcado.src='img/ahorcado5.svg';
    for(i=0;i<letrasAbecedario.length;i++){
        letrasAbecedario[i].disabled=false;
    }
    
    
    
    // palabras.splice(palabras.indexOf(palabras[random]),1); 
    
    
    
    
    // Para elegir un numero al azar segun la cantidad de palabras, redondeando hacia abajo para que no haya un numero de mas
    const cantidadPalabras= palabras.length;
    const numAzar= Math.floor(Math.random()*cantidadPalabras);
    // La palabra ahora es un string del array, poniendo el indice segun el numero sorteado
    palabra=palabras[numAzar][0].toUpperCase();
    console.log(palabra);
    btnPista.disabled=true;
    spanPista.innerHTML = palabras[numAzar][1];
    console.log(palabras[numAzar][1]);
    spanPista.style.visibility='hidden';
    // Crear un guion por cada letra de la palabra
    for(let i = 0; i < palabra.length; i++){
        const espacioLetra = document.createElement('span');
        guion=document.createTextNode('_');
        espacioLetra.appendChild(guion);
        parrafoPalabra.appendChild(espacioLetra);
    }
}
//Dar pista y dehabilitar boton pista
btnPista.onclick=darPista;
function darPista(){
   spanPista.style.visibility='visible';
   btnPista.disabled=true;
}
// Funcion para que al usar una letra llame a la funcion letrasUsadas
for (i=0; i<letrasAbecedario.length; i++){
    letrasAbecedario[i].onclick=letrasUsadas;
}
// Funcion para saber que hacer cuando se toca un boton de letra
function letrasUsadas(event){
    botonLetra=event.target;
    botonLetra.disabled=true;
    letra=botonLetra.innerHTML.toUpperCase();
    let acerto=false;
    for (i=0; i< palabra.length; i++){
        if (letra==palabra[i]){
            const guiones = document.querySelectorAll('#palabra-a-adivinar span');
            guiones[i].innerHTML=letra;
            conteoAciertos++;
            acerto=true;
        }
    }
    if (acerto==false){
        conteoVidas--;
        const source=`img/ahorcado${conteoVidas}.svg`;
        imagenAhorcado.src=source;
        intentosText.textContent= ('Intentos restantes: ' + conteoVidas);
        if(conteoVidas==2){
            btnPista.disabled=false;
        }
    }
    if(conteoVidas==0){
        parrafoPalabra.innerHTML=palabra;
        intentosText.textContent=('Fin del juego! La palabra era:');
        gameOver();
    }else if(conteoAciertos==palabra.length){
        intentosText.textContent=('Felicitaciones, ganaste!');
        imagenAhorcado.src='img/ahorcadoFin.svg';
        gameOver();
        puntaje++;
    }
}
//Termino el juego, deshabilitar letras
function gameOver(){
    for(i=0;i<letrasAbecedario.length;i++){
        letrasAbecedario[i].disabled=true;
    }
    btnPista.disabled=true;
    spanPista.style.visibility='hidden';
}


// Desistir y volver al inicio
btnDesistir.onclick= desistir;
function desistir(){
    sectionInicial.style.display='flex';
    sectionMemo.style.display='none';
    sectionJuegoAhorcado.style.display='none';
    conteoErrores=6;
    pPuntaje.innerHTML=`Puntaje: ${puntaje}`;
}