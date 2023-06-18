let risultati = [];

let giocatore = Math.floor(Math.random() * 6) + 1;
let computer = Math.floor(Math.random() * 6) + 1;

let punteggiElement = document.getElementById("punteggi");
let risultatoElement = document.getElementById("risultato");
let arrayElement = document.getElementById("array");

punteggiElement.innerHTML = "Il giocatore ha ottenuto: " + giocatore + "<br>Il computer ha ottenuto: " + computer;

if (giocatore > computer) {
  risultatoElement.innerHTML = "Il giocatore vince!";
  risultati.push("giocatore");
} else if (giocatore < computer) {
  risultatoElement.innerHTML = "Il computer vince!";
  risultati.push("computer");
} else {
  risultatoElement.innerHTML = "È un pareggio!";
  risultati.push("pareggio");
}

arrayElement.innerHTML = "Risultati: " + risultati;
