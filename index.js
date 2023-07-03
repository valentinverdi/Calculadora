const teclaC = document.querySelector(".restablecer")
const teclaPunto = document.querySelector(".punto")
const teclaDivision = document.querySelector(".division")
const teclaMultiplicacion = document.querySelector(".multiplicacion")
const teclaSuma = document.querySelector(".mas")
const teclaResta = document.querySelector(".menos")
const teclaIgual = document.querySelector(".igual")
const tecla1 = document.querySelector(".uno")
const tecla2 = document.querySelector(".dos")
const tecla3 = document.querySelector(".tres")
const tecla4 = document.querySelector(".cuatro")
const tecla5 = document.querySelector(".cinco")
const tecla6 = document.querySelector(".seis")
const tecla7 = document.querySelector(".siete")
const tecla8 = document.querySelector(".ocho")
const tecla9 = document.querySelector(".nueve")
const tecla0 = document.querySelector(".cero")
const pantalla = document.querySelector(".pantalla")
const calculadora = document.querySelector(".grid-container")

const teclasNum = [tecla0, tecla1,tecla2,tecla3,tecla4,tecla5,tecla6,tecla7,tecla8,tecla9];
const teclasOp = [teclaSuma,teclaResta,teclaMultiplicacion,teclaDivision];

let numero1 = null;
let numero2 = null;
let operacion = null;
let validarpunto = 0;


teclasNum.forEach(element => {
    element.addEventListener("click",()=>{
        pantalla.innerHTML += element.value;
    })
});

teclasOp.forEach(element =>{
    element.addEventListener("click",()=>{
        operacion = element.value;
        numero1 = Number(pantalla.innerHTML);
        pantalla.innerHTML = null;
        validarpunto = 0;
    })
})

teclaC.addEventListener("click", function e0(){
    pantalla.innerHTML = null;
    numero1 = null;
    numero2 = null;
    operacion = null;
    validarpunto = 0;
})

teclaPunto.addEventListener("click",()=>{
    if (validarpunto === 0) {
        validarpunto = 1;
        pantalla.innerHTML += ".";
    }
})

window.addEventListener("keydown",function keydown(e){
    if (e.key == "+"){
        operacion = "+";
        numero1 = Number(pantalla.innerHTML);
        pantalla.innerHTML = null; 
    } else if (e.key == "-"){
        operacion = "-";
        numero1 = Number(pantalla.innerHTML);
        pantalla.innerHTML = null;
    } else if (e.key == "X" || e.key == "x"){
        operacion = "x";
        numero1 = Number(pantalla.innerHTML);
        pantalla.innerHTML = null;
    } else if (e.key == "/"){
        operacion = "/";
        numero1 = Number(pantalla.innerHTML);
        pantalla.innerHTML = null;
    } else if (isNaN(e.key) == false & e.key !== " "){
        pantalla.innerHTML += e.key;
    } else if (e.key == "c" || e.key == "C" || e.key == "Escape"){
        pantalla.innerHTML = null;
        numero1 = null;
        numero2 = null;
        operacion = null;
    } else if (e.key == "."){
        if (validarpunto === 0) {
            validarpunto = 1;
            pantalla.innerHTML += ".";
        }
    } else if (e.key == "Enter"){
        e.preventDefault()
        numero2 = Number(pantalla.innerHTML);
        if (operacion == "+"){
            pantalla.innerHTML = numero1 + numero2;
        } else if (operacion == "-") {
            pantalla.innerHTML = numero1 - numero2;
        } else if (operacion == "x") {
            pantalla.innerHTML = numero1 * numero2;
        } else if (operacion == "/") {
            pantalla.innerHTML = numero1 / numero2;
        }

        numero1 = Number(pantalla.innerHTML);
        operacion = null;
        numero2 = null;
    } else if (e.key == "Backspace"){
        pantalla.innerHTML = pantalla.innerHTML.substring(0, (pantalla.innerHTML.length - 1));
    } else {
        pantalla.innerHTML = pantalla.innerHTML
    }
})

teclaIgual.addEventListener("click",function ei(){
    numero2 = Number(pantalla.innerHTML);
    if (operacion == "+"){
        pantalla.innerHTML = numero1 + numero2;
    } else if (operacion == "-") {
        pantalla.innerHTML = numero1 - numero2;
    } else if (operacion == "x") {
        pantalla.innerHTML = numero1 * numero2;
    } else if (operacion == "/") {
        pantalla.innerHTML = numero1 / numero2;
    }
    
    numero1 = (pantalla.innerHTML);
    operacion = null;
    numero2 = null;
    validarpunto = 0;
})