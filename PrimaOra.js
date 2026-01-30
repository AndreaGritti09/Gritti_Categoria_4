

function Elabora(){
    let voti= document.getElementById("voti").value;
    let ArrayVoti=[];
    do {
        ArrayVoti.push(voti)
        voti=prompt("Se vuoi interrompere l'inserimento di voti digita stop")
        while(voti<0 || voti>10) {
            voti=prompt("Inserisci un valore adeguato")
        }
    } while(!(voti.equalsIgnoreCase("stop")));

    
}