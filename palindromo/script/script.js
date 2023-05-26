"use strict";
//definisco le costanti per l'input e l'output delle informazioni
const inputParola = document.getElementById('parola');
const sendButton = document.getElementById('send-parola');
const risultato = document.getElementById('risultato');

//funzione per controllare se una parola è palindroma
function palindromo(word){
    let result;
    let myArray = ((word).toLowerCase()).split('');
    let reverseWord = (myArray.reverse()).join('');
    if(word === reverseWord){
        result = true;
    } else{
        result = false;
    }
    return result;
}

//stampa del risultato del controllo della parola
sendButton.addEventListener('click', function(){
    let parolaScelta = inputParola.value;
    if(palindromo((parolaScelta).toLowerCase()) === true){
        risultato.innerHTML = `<h2>${parolaScelta} &Egrave; UNA PAROLA PALINDROMA</h2>`;
    } else{
        risultato.innerHTML = `<h2>${parolaScelta} NON &Egrave; UNA PAROLA PALINDROMA</h2>`;
    }
    inputParola.value = '';
}
)