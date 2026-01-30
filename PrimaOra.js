function Elabora(){
let inputVoto = document.getElementById("voti").value; 
let ArrayVoti = [];


if (inputVoto !== "") {
    let numero = parseFloat(inputVoto);
    if (!isNaN(numero)) {
        ArrayVoti.push(numero);
    }
}

let nuovoVoto;
do {
    let risposta = prompt("Inserisci un altro voto (digita -1 per terminare):");
    
    nuovoVoto = parseFloat(risposta);

    if (isNaN(nuovoVoto)) break;
    if (nuovoVoto === -1) break;

    while ((nuovoVoto < 0 || nuovoVoto > 10) && nuovoVoto !== -1) {
        nuovoVoto = parseFloat(prompt("Voto non valido! Inserisci un valore tra 0 e 10 (o -1 per uscire):"));
    }

    if (nuovoVoto !== -1 && !isNaN(nuovoVoto)) {
        ArrayVoti.push(nuovoVoto);
    }

} while (nuovoVoto !== -1);

let somma = 0; 

for (let i = 0; i < ArrayVoti.length; i++) {
    somma += ArrayVoti[i];
}

let media = 0;
if (ArrayVoti.length > 0) {
    media = somma / ArrayVoti.length;
}


let contatore = 0; 

for (let i = 0; i < ArrayVoti.length; i++) {
    if (ArrayVoti[i] < 6) {
        contatore += 1;
    }
}

let messaggio = "La media dei tuoi voti è: " + media.toFixed(2);


if (contatore >= 3) {
    
    messaggio += "<br><strong style='color:red'>⚠️ RISCHIO BOCCIATURA</strong>";
}


document.getElementById("RischioBocciatura").innerHTML = messaggio;

    
}