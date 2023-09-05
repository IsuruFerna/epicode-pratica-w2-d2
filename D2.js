/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x1 = 3;
const x2 = 5;

if (x1 > x2) {
   console.log("primo numero è maggiore");
} else if (x1 < x2) {
   console.log("secondo numero è maggiore");
} else {
   console.log("I numeri sono parì");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num !== 5) {
   console.log(num, "non è equivalente a 5");
} else {
   console.log(num, "è equivalente a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num % 5 === 0) {
   console.log(num, "è perfettamente divisibile per 5");
} else {
   console.log(num, "non è perfettamente divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 8;
const num2 = 4;

if (num1 === 8 || num2 === 8) {
   console.log("Un numero contiene 8");
} else if (num1 + num2 === 8) {
   console.log("Addizione tra di numeri risulta 8");
} else if (num1 - num2 === 8 || num2 - num1 === 8) {
   console.log("Sostrazione tra di numeri risulta 8");
} else {
   console.log("I numeri non risulta un valore di 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 55;
let shippingCost = totalShoppingCart >= 50 ? 0 : 10;
let total = (totalShoppingCart += shippingCost);
console.log("totale è: ", total);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let promoBlackFriday = 20 / 100;
total = (total - total * promoBlackFriday).toFixed(2);
console.log("totale incluso promozione Black Friday:", total);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 8;
const num4 = 11;
const num5 = 10;

if (num3 > num4 && num4 > num5) {
   console.log(num3, num4, num5);
} else if (num3 < num4 && num4 < num5) {
   console.log(num5, num4, num3);
} else if (num4 < num3 && num3 < num5) {
   console.log(num5, num3, num4);
} else {
   console.log(num4, num5, num3);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const typeCheck = "str";

if (typeof typeCheck === "number") {
   console.log("type of typeCheck is number");
} else {
   console.log("type of typeCheck isn't a number");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numForPariDispari = 8;

if (numForPariDispari % 4 === 0) {
   console.log(numForPariDispari, " è pari");
} else {
   console.log(numForPariDispari, " è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("***********  ES 10 ***********");
let val = 8;
if (val < 5) {
   console.log("Meno di 5");
} else if (val < 10) {
   console.log("Meno di 10");
} else {
   console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
   name: "John",
   lastName: "Doe",
   skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

console.log("Aggiunto la città: ", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log("Rimosso lastName", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log("Rimosso l'ultimo skill", me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);

console.log("risultato dell'array", array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array[array.length - 1] = 100;

console.log(
   "modifico l'ultimo valore dell'array a 100: ",
   array[array.length - 1]
);
