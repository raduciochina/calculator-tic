console.log("script started");
var display = "0";
var operand1 = 0;
var operand2 = null;
var operatie = null;

function initializare(){
    display = "0";
    operand1 = 0;
    operand2 = null;
    operatie = null;
    actualizareDisplay();
}

function actualizareDisplay(){
    document.getElementById("display").innerText = display;
}


// var element = document.getElementById('selectabil');
// element.addEventListener("click", afiseazaCeva);
// function afiseazaCeva(e){
//     console.log(e.target.innerText);
//     e.target.style="background-color: purple";
// }

var cifre = Array.from(document.getElementsByClassName("cifra"));

cifre.forEach(element =>{
    element.addEventListener("click", cifraApasata);
});

function cifraApasata(e){

    if(operatie === null){
        operand1 = operand1 * 10 + Number(e.target.innerText);
        display = operand1;
        actualizareDisplay();
        console.log("operand 1 devine ", operand1);
    }else if(operand2 === null){
        operand2 = Number(e.target.innerText)
        display = operand2;
        actualizareDisplay();
        console.log("operand 2 devine", operand2);
    }else{
        operand2 = operand2 * 10 + Number(e.target.innerText)
        display = operand2;
        actualizareDisplay();
        console.log("operand 2 devine", operand2);
    }
    
}

var functii = Array.from(document.getElementsByClassName("functie"));

functii.forEach(element =>{
    element.addEventListener("click", functieApasata);
});

function functieApasata(e){
    switch(e.target.innerText){
        case "C":
            initializare();
            break;
        case "Sterge":
            console.log("Ai apasat sterge");
            break;
        case "=":
            console.log(display);
            calcul();
            actualizareDisplay();
            //operand1 = calcul(); pentru continuare calcule cu rezultatul obtinut
            break;
        default:
            console.log("ai apasat alta functie");
            operatie = e.target.innerText;
            break;
    }
}

function calcul(){
    let result = 0;
    console.log("operaatie este", operatie);
    switch(operatie){
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "X":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;
    }
    display = result.toString();
    return result;
}

//TO DO
//CONTINUARE OPERATII CU REZULTATUL DUPA APASRE =
//INTRODUCERE NUMERE NEGATIVE
//BUTON STERGERE ultima cifra introdusa