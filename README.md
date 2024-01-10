# js-biglietto-treno-form

## TRACCIA

Descrizione:
Scrivere un programma che chieda all'utente:

- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:

- Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

MILESTONE 2:

- Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
  Il recap dei dati e l'output del prezzo finale (cioè il biglietto) andranno quindi stampati in pagina. Il prezzo dovrà essere formattato con massimo due
  decimali, per indicare i centesimi sul prezzo.

BONUS:

- Visualizzare il biglietto solo dopo che l'utente ha cliccato sul bottone.

## RISOLUZIONE

1. Dichiaro e assegno tutte le costanti e le variabili che mi servono
2. Creo input per recuperare dall'utente i chilometri che vuole percorrere
3. Creo l'input per recuperare dall'utente l'età del passeggero.
4. Creo il bottone che una volta cliccato farà partire il calcolo che deve:
   - Controllare se l'utente ha inserito dei valori giusti
   - SE ha inserito i valori giusti
     - Recuperare l'input dei chilometri
     - Moltiplicare i chilometri che vuole percorrere per 0.21
     - Recuperare l'età per verificare SE l'utente ha diritto ad uno sconto
       - SE è minorenne
         - applicare sconto del 20%
       - ALTRIMENTI SE è over 65
         - applicare sconto del 40%
