// check di controllo funzionamento js
console.log('JS OK');

// dichiaro la variabile error per verifica su input
let error = false;

// dichiaro la variabile costo biglietto
let ticketPrice = 0;

// Dichiaro le costanti dei dati ricevuti in input
const userKilometers = document.getElementById('inserted-kilometers');
const userAge = document.getElementById('inserted-age');

// Assegno ad una variabile il div dove scriverò il risultato
const result = document.getElementById('result');

// dichiaro la costante che recupera il bottone per creare l'Event Listener
const calcButton = document.getElementById('calc-button');

// Event Listener che intercetta il click del bottone e fà partire i controlli e il calcolo del prezzo del biglietto
calcButton.addEventListener('click', 
    function(){
        // recupero valori dall'input
        const insertKilometers = parseFloat(userKilometers.value);
        console.log(insertKilometers);
        const insertAge = userAge.value;
        console.log(insertAge);

        // verifica su input utente
        if(isNaN(insertKilometers) || isNaN(insertAge) || insertAge <= 0 || insertAge > 100){
            error=true;
        }
        
        // calcolo prezzo biglietto e detrazione eventuale sconto
        if(!error){
            // calcolo prezzo senza sconto
            ticketPrice = (insertKilometers * 0.21).toFixed(2);
            console.log('Prezzo del biglietto senza sconti: ' + ticketPrice);
            // calcolo sconto e modifica prezzo
            if (insertAge < 18){
                const sconto = ((ticketPrice*20)/100).toFixed(2);
                console.log("C'è uno sconto di: " + sconto + "$");
                ticketPrice -= sconto;
            } else if (insertAge > 65){
                const sconto = ((ticketPrice*40)/100).toFixed(2);
                console.log("C'è uno sconto di: " + sconto + "$");
                ticketPrice -= sconto;
            } else {
                console.log("Non hai diritto ad alcun sconto mi dispiace")
            }
        } else {
            // stampa errore di input
            alert("Inserimento Input Errati. Si prega di riprovare");
            ticketPrice = "Error";
        }

        // stampa su pagina
        result.innerText = '€ ' + ticketPrice;

    })