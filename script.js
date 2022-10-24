function clase(str){
    return document.querySelector(str);
}
const sectionInicial= clase('.pantalla-inicial');
const btnInicialJuegoMemoria=clase('.btn-juego-memoria');
const btnInicialJuegoAhorcado=clase('.btn-juego-ahorcado');
const btnInicialJuegoQuiz=clase('.btn-juego-quiz');
const sectionJuegoAhorcado = clase('.section-juego-ahorcado');
const sectionMemo = clase('.section-juego-memoria');
const sectionJuegoQuiz = clase('.section-quiz-novios');
const sectionFinQuiz= clase('.fin-quiz');
const pPuntaje=clase('.puntaje-total');
var puntaje=0;