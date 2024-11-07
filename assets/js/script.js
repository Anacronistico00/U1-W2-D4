/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log('----------Esercizio 1----------');

let base = 11;
let height = 12;

function area(base, height) {
  area = base * height;
  return area;
}

console.log("L'area del rettangolo è: ", area(base, height));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('----------Esercizio 2----------');

let int1 = 5;
let int2 = 5;

function crazySum(int1, int2) {
  if (int1 !== int2) {
    sum = int1 + int2;
    return sum;
  } else {
    sum = (int1 + int2) * 3;
    return sum;
  }
}

console.log(crazySum(int1, int2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('----------Esercizio 3----------');

let int3 = 25;

function crazyDiff(int3) {
  if (int3 > 19) {
    sum = Math.abs(int3 - 19);
    return sum;
  } else {
    sum = Math.abs(int3 - 19) * 3;
    return sum;
  }
}

console.log(crazyDiff(int3));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------Esercizio 4----------');

let n = 980;

function boundary(n) {
  if ((n > 20 && n < 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(n));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log('----------Esercizio 5----------');

let string = 'EPICODE';

function epify(string) {
  if (string.startsWith('EPICODE')) {
    return string;
  } else {
    return 'EPICODE ' + string;
  }
}

console.log(epify(string));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------Esercizio 6----------');

let posNumber = 17;

function check3and7(posNumber) {
  if (posNumber < 1) {
    return 'Il numero è negativo';
  } else if (posNumber % 3 === 0 || posNumber % 7 === 0) {
    return 'Il numero ' + posNumber + ' È multiplo di 3 o di 7';
  } else {
    return 'Il numero non è multiplo di 3 o 7';
  }
}

console.log(check3and7(posNumber));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------Esercizio 7----------');
console.log(string);

function reverseString(string) {
  string = string.split('').reverse().join('');
  return string;
}

console.log(reverseString(string));

// Array.reverse();

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------Esercizio 8----------');

let stringUpper = 'mi piacciono i treni';
console.log(stringUpper);

function upperFirst(stringUpper) {
  stringUpper = stringUpper.split(' ');

  for (let i = 0; i < stringUpper.length; i++) {
    stringUpper[i] =
      stringUpper[i].charAt(0).toUpperCase() + stringUpper[i].slice(1);
  }
  stringUpper = stringUpper.join(' ');
  return stringUpper;
}
console.log(upperFirst(stringUpper));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('----------Esercizio 9----------');

let trimString = 'Supercalifragilistichespiralidoso';
console.log(trimString);

function cutString(trimString) {
  trimString = trimString.slice(1, -1);
  return trimString;
}

console.log(cutString(trimString));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------Esercizio 10----------');

let n1 = 5;

function giveMeRandom(n1) {
  const nArray = [];
  for (let i = 0; i < n1; i++) {
    nArray.push(Math.floor(Math.random() * 11));
  }
  return nArray;
}
console.log('Array di numeri random:');
console.log(giveMeRandom(n1));
