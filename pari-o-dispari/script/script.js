"use strict";
//definisco le costanti per l'input e l'output delle informazioni
const sendButton = document.getElementById('send');
const numberInput = document.getElementById('numero-scelto');
const selectInput = document.getElementById('pari-dispari');
const esito = document.getElementById('esito')
const numeroShow = document.getElementById('numero-pc')

//funzione per l'estrazione di un numero casuale
function numeroCasuale(){
    let randomNumber = Math.floor(Math.random() * 6);
    return randomNumber;
}

//funzione per ottenere il risultato della somma dei numeri
function risultato(number,numberPc){
    let result;
    let sum = number + numberPc
    if (sum % 2 === 0){
        result = "pari";
    } else{
        result = "dispari";
    }
    return result;
}

//inserimento dei valori inseriti come variabile e successivo controllo del risultato del gioco
sendButton.addEventListener('click', function(){
    
    let numeroScelto = parseInt(numberInput.value)
    let selectScelto = selectInput.value
    if(numeroScelto > 5){
        alert('Il numero scelto deve essere compreso tra 0 e 5 (estremi compresi)')
    } else if(isNaN(numeroScelto) || selectScelto === ""){
        alert('Scegli dei valori validi')
    } else{
        let numeroPc = numeroCasuale()
        if(risultato(numeroScelto,numeroPc) === selectScelto){
            esito.innerHTML = `<span>HAI VINTO</span>`
        } else {
            esito.innerHTML = `<span>HA VINTO IL COMPUTER</span>`
        }
        numeroShow.innerHTML = numeroPc
    }
}
)