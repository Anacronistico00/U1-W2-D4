// Esercizi aggiuntivi (facoltativi) per D4
console.log('ESERCIZI EXTRA');
/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------EXTRA 1----------');
let randomNumbers = giveMeRandom(n1);

function checkArray(randomNumbers) {
  let randomSum = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > 5) {
      console.log(randomNumbers[i] + ' è maggiore di 5');
      randomSum += randomNumbers[i];
    } else {
      console.log(randomNumbers[i] + ' è minore di 5');
    }
  }
  return "La somma dei numeri random nell'array è: " + randomSum;
}
console.log(checkArray(randomNumbers));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

console.log('----------EXTRA 2----------');

const shoppingCart = [
  {
    price: 17,
    name: 'Mouse',
    id: 1231,
    quantity: 2,
  },
  {
    price: 35,
    name: 'tastiera',
    id: 123,
    quantity: 2,
  },
  {
    price: 180,
    name: 'LCD Screen',
    id: 1234,
    quantity: 2,
  },
  {
    price: 870,
    name: 'DesktopPC',
    id: 987,
    quantity: 2,
  },
  {
    price: 15,
    name: 'Headphones',
    id: 4435,
    quantity: 2,
  },
  {
    price: 32,
    name: 'Microphone',
    id: 5436,
    quantity: 2,
  },
];

function shoppingCartTotal(shoppingCart) {
  let total = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];
    total += item.price * item.quantity;
  }

  return total;
}
console.log(shoppingCartTotal(shoppingCart));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
console.log('----------EXTRA 3----------');

function calculateTotalQuantity(shoppingCart) {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].quantity;
  }
  return total;
}
let totalBefore = calculateTotalQuantity(shoppingCart);
console.log('La quantità totale di oggetti nel carrello è: ' + totalBefore);

let newItem = {
  price: 46,
  name: 'RGB stripes',
  id: 5456,
  quantity: 2,
};

function addToShoppingCart(shoppingCart, newItem) {
  shoppingCart.push(newItem);
  return shoppingCart.length;
}

addToShoppingCart(shoppingCart, newItem);

let totalAfter = calculateTotalQuantity(shoppingCart);
console.log('La quantità totale di oggetti nel carrello è: ' + totalAfter);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------EXTRA 4----------');

function maxShoppingCart(shoppingCart) {
  let maxPriceItem = shoppingCart[0];
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > maxPriceItem.price) {
      maxPriceItem = shoppingCart[i];
    }
  }
  return maxPriceItem;
}

let mostExpensiveItem = maxShoppingCart(shoppingCart);

console.log("L'oggetto più costoso nel carrello è: " + mostExpensiveItem.name);
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------EXTRA 5----------');

function latestShoppingCart(shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
}

let latestItem = latestShoppingCart(shoppingCart);

console.log("L'ultimo oggetto nel carrello è: " + latestItem.name);
/* EXTRA 6

 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------EXTRA 6----------');

function loopUntil(x) {
  if (x < 0 || x > 9) {
    console.log('Si prega di inserire un numero compreso tra 0 e 9.');
    return;
  }

  let consecutiveCount = 0;

  for (let i = 0; ; i++) {
    let randomNumber = Math.floor(Math.random() * 10);

    console.log(randomNumber);

    if (randomNumber === x) {
      consecutiveCount++;
    } else {
      consecutiveCount = 0;
    }

    if (consecutiveCount === 3) {
      console.log('----Ciclo terminato----');
      console.log(
        'Cicli totali per trovare 3 numeri maggiori di x per tre volte consecutive: ' +
          i
      );
      break;
    }
  }
}

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------EXTRA 7----------');

let numbers = [4, 'text', 8, null, 10, undefined, 15];

function average(numbers) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number' && !isNaN(numbers[i])) {
      sum += numbers[i];
      count++;
    }
  }

  // Se count è 0, ritorna 0 per evitare divisione per zero
  return count === 0 ? 0 : sum / count;
}

console.log('La media è:', average(numbers));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------EXTRA 8----------');

let words = ['bue mischiato', 'elefante', 'rinoceronte', 'leone'];

function longest(str) {
  let longestString = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestString.length) {
      longestString = str[i];
    }
  }
  return longestString;
}

console.log('La stringa più lunga è:', longest(words));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

console.log('----------EXTRA 9----------');

function emailChecker(emailContent) {
  const contentLower = emailContent.toLowerCase();
  if (contentLower.includes('spam') || contentLower.includes('scam')) {
    return false;
  } else {
    return true;
  }
}
let emailContent1 = 'Questo è un messaggio importante!';
let emailContent2 = 'Attenzione: questa email contiene SPAM!';

console.log('questa email è sicura? ' + emailChecker(emailContent1));
console.log('questa email è sicura? ' + emailChecker(emailContent2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------EXTRA 10----------');

let pastDate = new Date('2023-01-01');

function daysSince(date) {
  const today = new Date();
  const msDifference = today - date;
  const daysPassed = Math.floor(msDifference / 1000 / 60 / 60 / 24);
  return daysPassed;
}
console.log('Dal ' + pastDate + ' sono passati ' + daysSince(pastDate));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('----------EXTRA 11----------');

let x = 3;
let y = 2;

function matrixGenerator(x, y) {
  const matrix = [];
  for (let i = 0; i < y; i++) {
    const row = [];
    for (let j = 0; j < x; j++) {
      row.push(i.toString() + j.toString());
    }
    matrix.push(row);
  }
  return matrix;
}
console.log(matrixGenerator(x, y));
