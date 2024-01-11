// check di controllo funzionamento js
console.log('JS OK');

// dichiaro la variabile error per verifica su input
let error = false;

// dichiaro la variabile costo biglietto
let ticketPrice = 0;

// Assegno ad una variabile il div dove scriverò il risultato
const result = document.getElementById('result');
const userDiscount = document.getElementById('userDiscount');
const kilometersRecap = document.getElementById('userKilometers');
const ageRecap = document.getElementById('userAge');
const userName = document.getElementById('user-name');

// assegno ad una variabile il ticket risultato
const userTicket = document.getElementById('ticket-container');
console.log(userTicket);

// dichiaro la costante che recupera il bottone per creare l'Event Listener
const calcButton = document.getElementById('calc-button');

// Event Listener che intercetta il click del bottone e fà partire i controlli e il calcolo del prezzo del biglietto
calcButton.addEventListener('click', 
    function() {
        let sconto = 0;

        // recupero valori dall'input
        let insertKilometers = parseFloat(document.getElementById('inserted-kilometers').value);
        console.log(insertKilometers);
        let insertAge = document.getElementById('inserted-age').value;
        console.log(insertAge);
        let insertName = document.getElementById('inserted-name').value;
        console.log(insertName)

        // verifica su input utente
        if(!insertName || isNaN(insertKilometers) || isNaN(insertAge) || insertAge <= 0 || insertAge > 100){
            error=true;
        }
        
        // calcolo prezzo biglietto e detrazione eventuale sconto
        if(!error){
            // calcolo prezzo senza sconto
            ticketPrice = (insertKilometers * 0.21);
            // console.log('Prezzo del biglietto senza sconti: ' + ticketPrice);
            // calcolo sconto e modifica prezzo
            if (insertAge < 18){
                sconto = ((ticketPrice*20)/100);
                // console.log("C'è uno sconto di: " + sconto + "$");
                ticketPrice -= sconto;
            } else if (insertAge > 65){
                sconto = ((ticketPrice*40)/100);
                // console.log("C'è uno sconto di: " + sconto + "$");
                ticketPrice -= sconto;
            }
        } else {
            // stampa errore di input
            alert("Inserimento Input Errati. Si prega di riprovare");

        }

        // stampa su pagina
        ageRecap.innerText = insertAge;
        kilometersRecap.innerText = insertKilometers;
        userDiscount.innerText = sconto.toFixed(2);
        result.innerText = '€ ' + ticketPrice.toFixed(2);
        userName.innerText = insertName;

        // apparizione ticket
        userTicket.style.display = "block";
        // reset campi form
        document.getElementById('inserted-name').value = "";
        document.getElementById('inserted-kilometers').value = "";
        document.getElementById('inserted-age').value = "";
    });